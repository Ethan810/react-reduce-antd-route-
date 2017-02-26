import React ,{Component,PropType} from 'react';
 import {Table,Popconfirm }  from 'antd';
import UserModal from './UserModal';

const UserList = ({total,current,loading,dataSource,dispatch})=>{
    function deleteHandler(id) {
        console.log(id);
        dispatch({
             type: 'users/deleteTableData',  //调用一个action
             payload: id,   //调用时传递的参数
            dispatch
            // type: 'users/remove',
            // payload: id,
        });
    }
    function editHandler(id, values) {
        console.log(id);
        console.log(values);
        // dispatch({
        //     type: '',
        //     payload: { id, values },
        // });
    }
  
    const columns = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a href="#">{text}</a>,
    }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: '操作',
        key: 'operation',
        render: (text, record) => (
        <p>
            <UserModal record={record} title={"用户编辑"} onOk={()=>{editHandler(record.id)}}  >
                <a>编辑</a>
            </UserModal>
            &nbsp;
            <Popconfirm title="确定要删除吗？" onConfirm={()=>{deleteHandler(record.id)}}>
            <a>删除</a>
            </Popconfirm>
        </p>
        ),
    }];

    // 定义分页对象
  const pagination = {
    total,
    current,  
    pageSize: 10,
    onChange: ()=>{},
  };
 

  return (
    <div>
      <Table
      
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={pagination}
      />
    </div>
  );
}

export default UserList; 