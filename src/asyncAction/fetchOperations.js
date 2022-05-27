import {URL_API} from "../config";
import axios from "axios";
import {setListLoading, updateOperationsAction} from "../reducers/operationReducer";
import Operation from "../adapters/Operation";

export const fetchOperations = () => {
  return (dispatch) => {
    dispatch(setListLoading(true))
    axios.get(`${URL_API}api/operation/list`)
      .then(res => {
        dispatch(updateOperationsAction(Operation.getAdoptedList(res.data.operations)))
      })
      .catch(e => {
        dispatch(setListLoading(false))
        console.log('error', e)
      })
  }
}