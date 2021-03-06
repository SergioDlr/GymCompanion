import axios from "axios";
import path from "./path";
const direccionDeConexion = path;
const configDuck = {
  entrenamientosRealizados: [{}],
  entrenamientoActual: {},
  estaEntrenando: false,
};
const CARGAR_ENTRENAMIENTOS = " CARGAR_ENTRENAMIENTOS";
export default function reducerEntrenamiento(state = configDuck, action) {
  switch (action.type) {
    case CARGAR_ENTRENAMIENTOS:
      return { ...state, entrenamientosRealizados: action.payload };
    default:
      return state;
  }
}

export const cargarEntrenamientos =
  (permisions, setCargando) => async (dispatch) => {
    const data = await axios.get(direccionDeConexion + "/api/training", {
      headers: { "auth-token": permisions },
    });

    if (data.status == 200) {
      dispatch({ type: CARGAR_ENTRENAMIENTOS, payload: data.data.result });
      setCargando(false);
    }
  };
