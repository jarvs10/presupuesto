import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Alert from './Alert';
import { generarId } from '@/utilities';

const Modal = ({ setModal, error, setError, gastos, setGastos, gastoEditar, setGastoEditar }) => {

  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setFiltro(gastoEditar.filtro);
    }
  }, [])

  const handleClose = () => {
    setModal(false);

    setGastoEditar({});
  }

  const handleSubmit = e => {
    e.preventDefault();
    if ([nombre, cantidad, filtro].length < 0) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);

      return;
    }

    const objGastos = {
      nombre,
      cantidad,
      filtro,
      fecha: Date.now(),
    }

    if(gastoEditar.id){
      objGastos.id = gastoEditar.id
      
      const gastoUpdate = gastos.map(gasto => gasto.id === gastoEditar.id ? objGastos : gasto);

      setGastos(gastoUpdate);

    } else {
      objGastos.id = generarId();

      setGastos([...gastos, objGastos]);
    }

    setNombre('');
    setCantidad('');
    setFiltro('');

  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
        <div className="relative w-auto my-6 mx-auto min-h-screen min-w-full bg-black">
          <Image onClick={handleClose} className='w-10 absolute top-2 right-2 cursor-pointer' src={'/img/close.png'} width={100} height={100} alt='cerrar' />

          <form onSubmit={handleSubmit} className='mt-10 w-1/2 max-w-2xl bg-white mx-auto transition-all py-8 px-6 rounded-md'>
            <legend className='text-2xl font-bold text-center mb-9'>{gastoEditar.id ? 'Actualizar' : 'Agregar Gasto'}</legend>

            {error && <Alert tipo='error'>{mensaje}</Alert>}

            <div className='mb-6'>
              <label className='mb-2 block font-bold' htmlFor="nombre">Nombre Gasto</label>

              <input
                className='w-full py-2 border border-gray-300 px-2 rounded-md'
                id='nombre'
                type="text"
                placeholder='Agregar Gasto'
                value={nombre}
                onChange={e => setNombre(e.target.value)}
              />
            </div>

            <div className='mb-6'>
              <label className='mb-2 block font-bold' htmlFor="cantidad">Cantidad</label>

              <input
                className='w-full py-2 border border-gray-300 px-2 rounded-md'
                id='cantidad'
                type="number"
                placeholder='Agregar Cantidad'
                value={cantidad}
                onChange={e => setCantidad(Number(e.target.value))}
              />
            </div>

            <div className='mb-10'>
              <label className='mb-2 block font-bold' htmlFor="categoria">Filtrar Gastos</label>

              <select id="categoria"
                className='w-full py-2 border border-gray-300 px-2 rounded-md'
                value={filtro}
                onChange={e => setFiltro(e.target.value)}
              >
                <option value="">-- Seleccione --</option>
                <option value="ahorro">Ahorro</option>
                <option value="casa">Casa</option>
                <option value="ocio">Ocio</option>
                <option value="suscripciones">Suscripciones</option>
                <option value="comida">Comida</option>
                <option value="salud">Salud</option>
                <option value="varios">Gastos Varios</option>
              </select>
            </div>

            <input className='py-3 w-full bg-indigo-600 hover:bg-indigo-800 text-white font-bold cursor-pointer uppercase rounded-md' type="submit" value={gastoEditar.id ? 'Update' : 'Agregar'} />
          </form>
        </div>
      </div>
      {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
    </>

  )
}

export default Modal