import React, { Component, PropTypes } from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
import MyForm from '../components/myForm';

function myForm({location}) {
  return (
      <MainLayout location={location}>
              <MyForm></MyForm>
      </MainLayout>
     
  );
}

myForm.propTypes = {
    
};

export default myForm;