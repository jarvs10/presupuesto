import React from 'react'
import ListGastos from './ListGastos'

const Gastos = ({ gastos, handleDelete, setGastoEditar, gastosFiltrados, filtros }) => {
  return (
    <div className='listado-gastos contenedor'>
      {
        filtros ?

          gastosFiltrados.map((gasto) => {
            return (
              <ListGastos
                key={gasto.id}
                gasto={gasto}
                handleDelete={handleDelete}
                setGastoEditar={setGastoEditar}
              />
            )
          }) :

          gastos.map((gasto) => {
            return (
              <ListGastos
                key={gasto.id}
                gasto={gasto}
                handleDelete={handleDelete}
                setGastoEditar={setGastoEditar}
              />
            )
          })
      }
    </div>
  )
}

export default Gastos