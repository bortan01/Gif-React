import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('pruebas en GifGridItem', () => {
   const title = 'Un titulo';
   const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXlets_YMDLRWRdARL10-uXyzSbK3v7rTgw&usqp=CAU';
   const wrapper = shallow(<GifGridItem title={title} url={url} />);

   test('debe de mostrar el componente correctamente ', () => {
      expect(wrapper).toMatchSnapshot();
   });
   test('debe de tener un parrafo con el titulo ', () => {
      const p = wrapper.find('p');
      expect(p.text().trim()).toBe(title);
   });
   test('debe de tener la imagen igual a la url y alt de prots ', () => {
      const img = wrapper.find('img');
      expect(img.prop('src')).toBe(url);
      expect(img.prop('alt')).toBe(title);
   });
   test('debe de tener animate__fadeOut ', () => {
      const div = wrapper.find('div');
      expect(div.prop("className").includes("animate__fadeOut")).toBe(true);
   });


});
