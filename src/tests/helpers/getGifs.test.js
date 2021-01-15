import { getGifs } from "../../helpers/getGifs";

describe('pruebas con getGifs Fectch', () => {
   test('debe de traer 10 elementos ', async () => {
      const gif = await getGifs('dragon ball');
      expect(gif.length).toBe(10);
   });
   test('prueba con string vacio ', async () => {
      const gif = await getGifs('');
      expect(gif.length).toBe(0);
   });

});
