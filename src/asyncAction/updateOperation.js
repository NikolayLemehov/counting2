import {URL_API} from "../config";
import axios from "axios";
import {setEditBtnLoading, updateOperationsAction} from "../reducers/operationReducer";
import Operation from "../adapters/Operation";

export const updateOperation = (id) => {
  return (dispatch) => {
    dispatch(setEditBtnLoading({id, flag: true}))
    axios.patch(`${URL_API}api/operation/item/id`, {data: {id}})
      .then(res => {
        dispatch(updateOperationsAction(Operation.getAdoptedList(res.data.operations)))
      })
      .catch(e => {
        dispatch(setEditBtnLoading({id, flag: false}))
        console.log('error', e)
      })
  }
}