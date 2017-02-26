import React,{Component,PropType} from 'react';
import { Link } from 'react-router';
import {Menu,Icon }  from 'antd';
const SubMenu = Menu.SubMenu;


function NavTree({ location }) {
    //console.log(children);
   //  console.log(location );
   var  selected = {
       '/':'0',
       "/myTable":'1',
       "/myForm":'2',
       "/myProgress":'3',
       "/myCarousel":'4'
    }
   
  return (
             <div>
                <div id="leftMenu">
                    <img src='../images/logo.png' width="50" id="logo"/>
                    <Menu theme="dark"
                        style={{ width: 200 }}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        selectedKeys={[selected[location.pathname]]}
                    >
                        <Menu.Item key="0"><Link to="/"><Icon type="mail" />我没有子菜单</Link></Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="bars" /><span>主导航</span></span>}>
                            <Menu.Item key="1"><Link to="/myTable">表格</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/myForm">表单</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/myProgress">进度条</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/myCarousel">轮播</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            
            </div>
  );
}

export default NavTree;