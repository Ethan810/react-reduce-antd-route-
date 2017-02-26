import React,{Component,PropTypes} from 'react';
import { Carousel } from 'antd';



class myCarousel extends Component{
    componentDidMount(){
       //alert(1);
    }
    render(){
        return (
            <div style={{width:'330px',height:'220px',margin:'20px auto',overflow:'hidden'}}>
            <Carousel autoplay >
                <div><img  src="../images/img01.jpg" /></div>
                <div><img  src="../images/img02.jpg" /></div>
                <div><img  src="../images/img03.jpg" /></div>
                <div><img  src="../images/img04.jpg" /></div>
            </Carousel>
        </div>
        )
    }
}

export default myCarousel;