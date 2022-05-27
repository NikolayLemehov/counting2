import {URL_API} from "../config";
import axios from "axios";
import {updateOperationsAction} from "../reducers/operationReducer";
import Operation from "../adapters/Operation";

export const updateOperation = (id) => {
  return (dispatch) => {
    axios.patch(`${URL_API}api/operation/item/id`, {data: {id}})
      .then(res => {
        console.log(res.data.operations)
        dispatch(updateOperationsAction(Operation.getAdoptedList(res.data.operations)))
      })
      .catch(e => console.log('error', e))
  }
}