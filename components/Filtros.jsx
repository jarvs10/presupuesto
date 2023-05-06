import { useEffect, useState } from "react"

const Filtros = ({ filtros, setFiltros }) => {

  return (
    <div className="container mx-auto text-center w-1/2 mt-8">
      <form className="shadow-lg py-8 px-8">
        <div className="">
          <label className="block text-3xl font-bold mb-4 text-gray-500" htmlFor="gastos">Filtrar Gastos</label>
          <select
            className="w-full py-3 border border-gray-200 text-center rounded-md"
            value={filtros}
            onChange={e => setFiltros(e.target.value)}
            id="gastos"
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
      </form>
    </div>
  )
}

export default Filtros