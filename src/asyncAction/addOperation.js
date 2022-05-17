import {URL_API} from "../config";
import axios from "axios";
import {updateOperationAction} from "../reducers/operationReducer";

export const addOperation = (text) => {
  return (dispatch) => {
    axios.post(`${URL_API}api/auth/request`, {text})
      .then(res => dispatch(updateOperationAction(res.data.operations)))
      .catch(e => console.log('error', e))
  }
}