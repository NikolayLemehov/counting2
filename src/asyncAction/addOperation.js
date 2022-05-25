import {URL_API} from "../config";
import axios from "axios";
import {updateOperationAction} from "../reducers/operationReducer";
import Operation from "../adapters/Operation";

export const addOperation = (data) => {
  console.log(data)
  return (dispatch) => {
    axios.post(`${URL_API}api/operation/item`, Operation.getRawItem(data))
      .then(res => dispatch(updateOperationAction(Operation.getAdoptedList(res.data.operations))))
      .catch(e => console.log('error', e))
  }
}