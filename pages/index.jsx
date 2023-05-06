import Control from "@/components/Control";
import Filtros from "@/components/Filtros";
import Gastos from "@/components/Gastos";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import Presupuesto from "@/components/Presupuesto";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [presupuesto, setPresupuesto] = useState(0);

  const [error, setError] = useState(false);

  const [isValid, setIsValid] = useState(false);

  const [modal, setModal] = useState(false);

  const [gastos, setGastos] = useState([]);

  const [gastoEditar, setGastoEditar] = useState({});

  const [filtros, setFiltros] = useState('');

  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(() => {
    if(filtros){
      const gastrosfiltrados = gastos.filter(gasto => gasto.filtro === filtros)

      setGastosFiltrados(gastrosfiltrados);
    }
  }, [filtros])

  const handleDelete = (id) => {
    const deleteId = gastos.filter(gasto => gasto.id !== id);

    setGastos(deleteId);
  }

  const handleModal = () => {
    setModal(true);
  }

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);
    }
  }, [gastoEditar])

  return (
    <Layout
      title='Presupuesto'
      description='Control de presupuesto'
    >

      {
        isValid ?
          <>
            <Control
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              gastos={gastos}
              setIsValid={setIsValid}
            />

            <Image onClick={handleModal} className="w-14 absolute bottom-2 right-2 cursor-pointer" src='/img/add.png' width={100} height={100} alt="abrir" />

            <Filtros 
              filtros={filtros}
              setFiltros={setFiltros}
            />

            {
              modal &&
              <Modal
                setModal={setModal}
                setError={setError}
                error={error}
                gastos={gastos}
                setGastos={setGastos}
                gastoEditar={gastoEditar}
                setGastoEditar={setGastoEditar}
              />
            }

            {
              gastos.length > 0 &&
              <Gastos 
                gastos={gastos}
                handleDelete={handleDelete}
                setGastoEditar={setGastoEditar}
                filtros={filtros}
                gastosFiltrados={gastosFiltrados}
              />
            }
          </>

          :
          <Presupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            error={error}
            setError={setError}
            setIsValid={setIsValid}
          />
      }

    </Layout>
  )
}
