import {URL_API} from "../config";
import axios from "axios";
import {setEditBtnLoadingAction, updateOperationsAction} from "../reducers/operationReducer";
import Operation from "../adapters/Operation";

export const updateOperation = (id) => {
  return (dispatch) => {
    dispatch(setEditBtnLoadingAction({id, flag: true}))
    axios.patch(`${URL_API}api/operation/item/id`, {data: {id}})
      .then(res => {
        dispatch(updateOperationsAction(Operation.getAdoptedList(res.data.operations)))
      })
      .catch(e => {
        dispatch(setEditBtnLoadingAction({id, flag: false}))
        console.log('error', e)
      })
  }
}