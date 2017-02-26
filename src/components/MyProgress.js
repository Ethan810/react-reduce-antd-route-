import React ,{Component,PropType}  from 'react';
import { Progress, Button } from 'antd';
import './style.css';
const ButtonGroup = Button.Group;

 const  myProgress = React.createClass({
        getInitialState() {
            return {
            percent: 10,
            };
        },
        componentDidMount(){
            //  console.log(styles);
        },
        increase() {
            let percent = this.state.percent + 10;
            if (percent > 100) {
            percent = 100;
            }
            this.setState({ percent });
        },
        decline() {
            let percent = this.state.percent - 10;
            if (percent < 0) {
            percent = 0;
            }
            this.setState({ percent });
        },
        render() {
            return (
            <div className='normal'>
                <Progress type="circle" percent={this.state.percent} />
                <ButtonGroup>
                    <Button onClick={this.decline} icon="minus" />
                    <Button onClick={this.increase} icon="plus" />
                </ButtonGroup>
                <Progress percent={30} />
                <Progress percent={50} status="active" />
                <Progress percent={70} status="exception" />
                <Progress percent={100} />
                <Progress percent={50} showInfo={false} />
            </div>
                )
            }
        })
export default myProgress;