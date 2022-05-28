import {URL_API} from "../config";
import axios from "axios";
import {delOperationAction, setDeleteBtnLoadingAction} from "../reducers/operationReducer";

export const delOperation = (id) => {
  return (dispatch) => {
    dispatch(setDeleteBtnLoadingAction({id, flag: true}))
    axios.delete(`${URL_API}api/operation/id`, {data: {id}})
      .then(res => dispatch(delOperationAction(res.data.operation._id)))
      .catch(e => {
        dispatch(setDeleteBtnLoadingAction({id, flag: false}))
        console.log('error', e)
      })
  }
}