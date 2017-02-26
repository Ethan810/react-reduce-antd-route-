import React,{PropType} from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
import MyProgress from '../components/MyProgress';

function myProgress({location}){
    return (
       <MainLayout location={location}>
             <MyProgress></MyProgress>
        </MainLayout>
    )
}

myProgress.prototype = {

};

export default myProgress;