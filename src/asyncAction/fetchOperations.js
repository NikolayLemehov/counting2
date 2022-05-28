import {URL_API} from "../config";
import axios from "axios";
import {setListLoadingAction, updateOperationsAction} from "../reducers/operationReducer";
import Operation from "../adapters/Operation";

export const fetchOperations = () => {
  return (dispatch) => {
    dispatch(setListLoadingAction(true))
    axios.get(`${URL_API}api/operation/list`)
      .then(res => {
        dispatch(updateOperationsAction(Operation.getAdoptedList(res.data.operations)))
      })
      .catch(e => {
        dispatch(setListLoadingAction(false))
        console.log('error', e)
      })
  }
}