import React, { Component, PropType } from 'react';
import {Modal,Form,Input} from 'antd';
const FormItem = Form.Item;

class UserEditModal extends Component {

    constructor(props) {
        console.log(1);
        console.log(props);
        super(props);
        this.state = {
            visible: false,
            title: props.title
        };
    }

    showModelHandler = (e) => {
        if (e) e.stopPropagation();
        this.setState({
            visible: true,
        });
    };

    hideModelHandler = () => {
        this.setState({
            visible: false,
        });
    };

    okHandler = () => {
        const { onOk } = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                onOk(values);
                this.hideModelHandler();
            }
        });
    };

    render() {
        const { children } = this.props;
        const { getFieldProps } = this.props.form;
        const { name, age, address } = this.props.record;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };

        return ( < span >
            <span onClick = { this.showModelHandler } > { children } </span> 
            < Modal title = { this.state.title }
            visible = { this.state.visible }
            onOk = { this.okHandler }
            onCancel = { this.hideModelHandler } >
            <Form horizontal onSubmit = { this.okHandler } >
            <FormItem {...formItemLayout }
            label = "姓名" >
            {
                /*{
                                getFieldProps('name', {
                                  initialValue: name,
                                })(<Input />)
                               
                              }*/
            } <
            Input placeholder = { name } {...getFieldProps('name') }
            /> </FormItem> <
            FormItem {...formItemLayout }
            label = "年龄" >
            {
                /*{
                                getFieldProps('age', {
                                  initialValue: age,
                                })(<Input />)
                              }*/
            } <
            Input placeholder = { age } {...getFieldProps('age') }
            /> </FormItem> <FormItem {...formItemLayout }
            label = "地址" >
            {
                /*{
                                getFieldProps('address', {
                                  initialValue: address,
                                })(<Input />)
                              }*/
            } <
            Input placeholder = { address } {...getFieldProps('address') }
            /> </FormItem> </Form> </Modal> </span>
        );
    }
}

export default Form.create()(UserEditModal);