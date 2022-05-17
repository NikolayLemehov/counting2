import {URL_API} from "../config";
import axios from "axios";
import {delOperationAction} from "../reducers/operationReducer";

export const delOperation = (id) => {
  return (dispatch) => {
    axios.delete(`${URL_API}api/auth/request/id`, {data: {id}})
      .then(res => dispatch(delOperationAction(res.data.operation._id)))
      .catch(e => console.log('error', e))
  }
}