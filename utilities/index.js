export const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return fecha + random;
}

export const generarFecha = fecha => {
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-ES', opciones);
}

export const generarResultadoDeMillon = (numero) => {
    // Divide el número por un millón
    const resultado = numero / 1;
  
    // Formatea el número con separadores de miles y dos decimales
    const resultadoFormateado = resultado.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  
    return resultadoFormateado;
  }