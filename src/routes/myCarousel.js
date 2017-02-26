import React ,{PropType} from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
import MyCarousel from '../components/myCarousel';

function carousel({location}){
    return (
        <MainLayout location ={location}>
            <MyCarousel></MyCarousel>
        </MainLayout>
    )
}

carousel.PropType ={

};

export default carousel;