import { generarFecha } from '@/utilities';
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css'

import iconoAhorro from '../public/img/icono_ahorro.svg';
import iconoCasa from '../public/img/icono_casa.svg';
import iconoComida from '../public/img/icono_comida.svg';
import iconoGastos from '../public/img/icono_gastos.svg';
import iconoOcio from '../public/img/icono_ocio.svg';
import iconoSalud from '../public/img/icono_salud.svg';
import iconoSuscripciones from '../public/img/icono_suscripciones.svg';
import Image from 'next/image';

const diccionarioIconos = {
  ahorro: iconoAhorro,
  comida: iconoComida,
  casa: iconoCasa,
  varios: iconoGastos,
  ocio: iconoOcio,
  salud: iconoSalud,
  suscripciones: iconoSuscripciones
}

const ListGastos = ({gasto, handleDelete, setGastoEditar}) => {

  const {nombre, cantidad, filtro, fecha, id} = gasto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => handleDelete(id)}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra px-4 py-4 shadow-md">
          <div className="contenido-gasto">
            <Image src={diccionarioIconos[filtro]} width={100} height={100} alt='iconos' />
            <div className="descripcion-gasto">
              <p className="categoria">{filtro}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className="fecha-gasto">
                Agregado el: {''}
                <span>{generarFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">${cantidad}</p>
        </div>
      </SwipeableListItem>

    </SwipeableList>
  )
}

export default ListGastos