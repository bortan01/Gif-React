import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('pruebas en GifGridItem', () => {
   const title = 'Un titulo';
   const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXlets_YMDLRWRdARL10-uXyzSbK3v7rTgw&usqp=CAU';

   test('debe de mostrar el componente correctamente ', () => {
      const wrapper = shallow(<GifGridItem title={title} url={url} />);
      expect(wrapper).toMatchSnapshot();
   });

});
