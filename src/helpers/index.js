
//Función que genera IDs
export const generarId = ()=>{
  const fecha = Date.now().toString(36);
  const number = Math.random().toString(36).substring(2);
  return fecha+number;
};

//Formatear las fechas
export const formatearFecha = fecha=>{
  //Primero convierto el valor nuemerico a formato fecha
  const fechaNueva = new Date(fecha);
  const opciones= {
    year:'numeric',
    month:'long',
    day:'2-digit',
  }
  return fechaNueva.toLocaleDateString('es-ES',opciones)
};