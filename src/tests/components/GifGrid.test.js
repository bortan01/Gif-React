import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { GifGrid } from "../../components/GifGrid";
import { useFechGifs } from "../../hooks/useFechGifs";
// import moduleName from '@testing-library/jest-dom/dist/extend-expect';
jest.mock('../../hooks/useFechGifs');
describe('pruebas en <GifGrid/>', () => {
   const category = 'luffy';

   test('debe de mostrar items cuando se cargan imagenes useFechGifs sin datos', () => {
      useFechGifs.mockReturnValue({
         data: [],
         loading: true
      });
      const wraper = shallow(<GifGrid category={category} />);
      expect(wraper).toMatchSnapshot();
   });
   test('debe de mostrar items cuando se cargan imagenes useFechGifs con datos', () => {
      const gifs = [{
         id: "ABC-1234",
         url: "https//localhost/imagen.jpg",
         title: "Imagen XD"
      }];
      //ESTA ES UNA LLAMADA FICTICIA CON SU RESPECTIVA RESPUESTA 
      useFechGifs.mockReturnValue({
         data: gifs,
         loading: false
      });
      const wraper = shallow(<GifGrid category={category} />);
      expect(wraper).toMatchSnapshot();
      expect(wraper.find('p').exists()).toBe(false);
      expect(wraper.find('GifGridItem').length).toBe(gifs.length);
   });




});
