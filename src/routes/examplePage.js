import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Example from '../components/example';
import {Spin} from 'antd';
 import 'antd/lib/spin/style/css'; // 按需引入 css
import MainLayout from '../components/MainLayout/MainLayout';



function examplePage(props) {
// console.log(props.posts);
 // alert(2)

 const change=()=>{
     const {dispatch} = props;
      dispatch({
        type: 'example/test',
        payload: { subreddit: 'frontend' },
        dispatch
      });
 }
  return (
      <MainLayout location={location}>
          <div>
              <h1 >Yay! Welcome to mode!</h1>
              <Spin />
              <button onClick={change}>点击切换</button>
              <div>
                <Example posts={props.posts}>
                </Example>
              </div>
          </div>
      </MainLayout>
     
  );
}

examplePage.propTypes = {
};

const mapStateToProps = (state) => {
  //console.log(state.example);
  return state.example;
}

export default connect(mapStateToProps)(examplePage);
