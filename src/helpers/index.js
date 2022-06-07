
//Función que genera IDs
export const generarId = ()=>{
  const fecha = Date.now().toString(36);
  const number = Math.random().toString(36).substring(2);
  return fecha+number;
};