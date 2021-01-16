import { renderHook } from '@testing-library/react-hooks';
import { useFechGifs } from "../../hooks/useFechGifs";

describe('pruebas en el hook Fech Gif', () => {
   test('debe de retornar el estaod inicial', async () => {
      // const { result, waitForNextUpdate } = renderHook(() => { return useFechGifs('to love ru') });
      // await waitForNextUpdate();
      // const { data, loading } = result.current;
      // expect(data).toEqual([]);
      // expect(loading).toBe(true);
   });
   test('debe de retornar un arreglo de img y el loading en false ', async () => {
      const { result, waitForNextUpdate } = renderHook(() => { return useFechGifs('to love ru') });
      await waitForNextUpdate();
      const { data, loading } = result.current;

      expect(data.length).toBe(10);
      expect(loading).toBe(false);

   });


});
