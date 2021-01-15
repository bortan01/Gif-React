import React from 'react'

import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('pruebas en el componente ', () => {
   const setCategories = jest.fn();
   //lo inicializamos arriba para tener ayuda en autocompletado
   let wrapper = shallow(<AddCategory setCategories={setCategories} />);

   //cada vez que se vaya a ejecutar un test se ejecutara esta funcion
   beforeEach(() => {
      ///limpia cualquier simulacion previa 
      jest.clearAllMocks();
      wrapper = shallow(<AddCategory setCategories={setCategories} />);

   });
   test('debe de mostrarse correctamente ', () => {
      expect(wrapper).toMatchSnapshot();
   });
   test('debe de cambiar la caja de texto ', () => {
      const input = wrapper.find("input");
      const value = "chivo";
      input.simulate('change', { target: { value } });
      const parrafo = wrapper.find('p').text().trim();
      expect(parrafo).toBe(value);
   });
   test('no debe de postear la informacion on submit ', () => {
      wrapper.find('form').simulate('submit', { preventDefault() { } });
      expect(setCategories).not.toHaveBeenCalled();
   });
   test('debe de llamar el setCategories y limpiar la caja de texto ', () => {
      //1. simular el input change
      const value = "To love Ru";
      const input = wrapper.find("input");
      input.simulate('change', { target: { value } });
      //2. simular  el submit
      wrapper.find('form').simulate('submit', { preventDefault() { } });
      //3. el set categori debe de haber sido llamado
      expect(setCategories).toHaveBeenCalled();
      //4. el valor del input debe de estar  vacio ""
      expect(input.prop('value')).toBe("");
   });




});
