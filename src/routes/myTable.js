import React, { Component, PropTypes } from 'react';
import MainLayout from '../components/MainLayout/MainLayout';

import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
// import UserModal from '../components/Users/UserModal';
 import styles from './user.css';

 import {connect} from 'react-redux';

function myTable({location,users,dispatch}) {
  //  console.log(users);
    const {
        loading, list, total, current, currentItem, modalVisible, modalType
    } = users;

   
    const UserListProps = {
		dataSource: list,
		total,
		loading,
		current,
        dispatch,
	};
     const UserSearchProps = {};
    // const UserModalProps = {};
   
  return (
      <MainLayout location={location}>
          {/*用户帅选选择框*/}
            <UserSearch {...UserSearchProps}   />
            {/*用户展示列表*/}
            <UserList {...UserListProps}  />
            {/*添加用户   修改用户弹出的浮层*/}
            {/*<UserModal {...UserModalProps}  />*/}
      </MainLayout>
     
  );
}

myTable.propTypes = {
    users: PropTypes.object,
};
//指定订阅数据，关联modal
const mapStateToProps = (state) => {
   // console.log(state);
    return state;
}
//建立数据关联联系
export default connect(mapStateToProps)(myTable);

