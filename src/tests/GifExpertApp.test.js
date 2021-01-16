import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('pruebas en <GifExperApp/>', () => {

   test('probando el snapShop ', () => {
      const wraper = shallow(<GifExpertApp />);
      expect(wraper).toMatchSnapshot();
   });
   test('debe de mostrar una lista de categorias ', () => {
      const categories = ['one piece', 'to love ru'];
      const wraper = shallow(<GifExpertApp defaultCategories={categories} />);
      expect(wraper).toMatchSnapshot();
      expect(wraper.find('GifGrid').length).toBe(categories.length);

   })

});
