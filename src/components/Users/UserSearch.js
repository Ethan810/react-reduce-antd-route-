import React, { Component, PropType } from 'react';
import UserModal from './UserModal';
import {Button} from 'antd';

const UserSearch = () => {
    function createHandler() {

    }
    return ( 
    <UserModal record = {{} } title={"用户新建"} onOk = { createHandler } >
        <Button type = "primary" > 新建人员 </Button>
     </UserModal>
    )
};


export default UserSearch;