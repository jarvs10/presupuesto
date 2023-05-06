import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

const Control = ({presupuesto, gastos, setPresupuesto,setIsValid}) => {

  const [gastado, setGastado] = useState(0);

  const [restante, setRestante] = useState(presupuesto);

  const [porcentaje, setPorcentaje] = useState(0);

  const handleReset = () => {
    setPresupuesto(0);
    setRestante(0);
    setPorcentaje(0);
    setGastado(0);
    setIsValid(false);
  }

  useEffect(() => {
    const Gastado = gastos.reduce((total, suma) => total + suma.cantidad, 0);

    setGastado(Gastado);

    const PresupestoRestante = presupuesto - Gastado;

    setRestante(PresupestoRestante);

    // calcular porcentaje //
    const calcularPorcentaje = (((presupuesto - PresupestoRestante) / presupuesto) * 100).toFixed(2);

    setTimeout(() => {
      setPorcentaje(calcularPorcentaje);
    }, 1000);

  }, [gastos])

  return (
    <div className='mt-10'>
      <div className='flex justify-around items-center shadow-md w-2/3 mx-auto py-4 px-8'>
        <CircularProgressbar
          value={porcentaje}
          className='w-60'
          text={`${porcentaje}%`}
          styles={buildStyles({
            pathColor: porcentaje > 100 ? '#ee1b1b' : '#3D82f6',
            trailColor: '#ccc',
            textColor: '#2462cc',
            textSize: '10px',
          })}
        />

        <div>
          <div>
            <button onClick={handleReset} className='py-3 text-white bg-rose-600 hover:bg-rose-800 w-full mb-4 text-lg font-bold uppercase rounded-md'>Reset App</button>
          </div>
          <h3 className='text-2xl font-bold mb-1 text-indigo-500'>Presupuesto: <span className='font-semibold text-gray-500'>${presupuesto}</span></h3>
          <h3 className='text-2xl font-bold mb-1 text-indigo-500'>Gastado: <span className='font-semibold text-gray-500'>${gastado}</span></h3>
          <h3 className={restante < 0 ? 'text-red-500 text-2xl font-bold' : 'text-2xl font-bold text-indigo-500'}>Disponible: <span className='font-semibold text-gray-500'>${restante}</span></h3>
        </div>
      </div>
    </div>
  )
}

export default Control