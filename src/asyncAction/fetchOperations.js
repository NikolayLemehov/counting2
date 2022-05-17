import {URL_API} from "../config";
import axios from "axios";
import {updateOperationAction} from "../reducers/operationReducer";

export const fetchOperations = () => {
  return (dispatch) => {
    axios.get(`${URL_API}api/auth/request`)
      .then(res => dispatch(updateOperationAction(res.data.operations)))
      .catch(e => console.log('error', e))
  }
}