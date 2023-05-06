import React from 'react'
import Alert from './Alert';

const Presupuesto = ({presupuesto, setPresupuesto, error, setError,setIsValid}) => {

  const handleSubmit = e => {
    e.preventDefault();

    if(isNaN(presupuesto) || presupuesto <= 0) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);

      return;
    }

    setIsValid(true);
  }

  return (
    <form onSubmit={handleSubmit} className="shadow-md border-black w-2/5 mx-auto mt-10">
      <div className="py-8 px-4 text-center">
        <label className="block uppercase mb-4 font-bold text-3xl" htmlFor="gastos">Presupuesto: </label>
        <input value={presupuesto} onChange={(e) => setPresupuesto(e.target.value)} className="w-full py-2 rounded-md px-2 border border-slate-300 text-center mb-6" type="number" id="gastos" placeholder="Presupuesto" />

        <button className="bg-indigo-600 hover:bg-indigo-800 text-white py-3 w-full font-bold rounded-md uppercase">Agregar</button>

        {
          error && <Alert>El presupuesto no es valido</Alert>
        }
      </div>
    </form>
  )
}

export default Presupuesto