import React ,{PropTypes}from 'react';
import styles from './MainLayout.css';
import NavTree from './NavTree';
import {Menu,Icon }  from 'antd';  

const SubMenu = Menu.SubMenu;

function MainLayout({ children, location }) {
    console.log(location);
   // alert(1);
  return (
    <div className={styles.normal}>
      <NavTree location={location} />
      <div id="rightWrap">
          <Menu mode="horizontal">
                <SubMenu title={<span><Icon type="user" />yimu</span>}>
                    <Menu.Item key="setting:1">退出</Menu.Item>
                </SubMenu>
            </Menu>
            <div className="right-box">
                {children}
            </div>
        </div>
     
    </div>
  );
}

MainLayout.PropTypes = {
    children:PropTypes.element.isRequired,
    location:PropTypes.object,
}

export default MainLayout;
