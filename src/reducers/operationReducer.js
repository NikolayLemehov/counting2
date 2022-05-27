const ADD_OPERATION = 'ADD_OPERATION'
const DEL_OPERATION = 'DEL_OPERATION'
const UPDATE_OPERATIONS = 'UPDATE_OPERATIONS'
const SET_LIST_LOADING = 'SET_LIST_LOADING'
const SET_EDIT_BTN_LOADING = 'SET_EDIT_BTN_LOADING'
const SET_DELETE_BTN_LOADING = 'SET_DELETE_BTN_LOADING'

const defaultState = {
  operations: [],
  hasListLoading: true,
}

const setEditBtnLoadingCase = (state, payload) => {
  const newOperations = [...state.operations]
  const operationIndex = newOperations.findIndex(it => it._id === payload.id)
  newOperations[operationIndex].editLoading = payload.flag
  return {...state, operations: newOperations}
}
const setDeleteBtnLoadingCase = (state, payload) => {
  const newOperations = [...state.operations]
  const operationIndex = newOperations.findIndex(it => it._id === payload.id)
  newOperations[operationIndex].deleteLoading = payload.flag
  return {...state, operations: newOperations}
}

export default function operationReducer (state = defaultState, action) {
  switch (action.type) {
    case ADD_OPERATION:
      return {...state, operations: [...state.operations, action.payload]}
    case DEL_OPERATION:
      return {...state, operations: state.operations.filter(it => it._id !== action.payload)}
    case UPDATE_OPERATIONS:
      return {...state, operations: [...action.payload], hasListLoading: false}
    case SET_LIST_LOADING:
      return {...state, hasListLoading: action.payload}
    case SET_EDIT_BTN_LOADING: return setEditBtnLoadingCase(state, action.payload)
    case SET_DELETE_BTN_LOADING: return setDeleteBtnLoadingCase(state, action.payload)
    default: return state
  }
}

export const addOperationAction = (payload) => ({type: ADD_OPERATION, payload})
export const delOperationAction = (payload) => ({type: DEL_OPERATION, payload})
export const updateOperationsAction = (payload) => ({type: UPDATE_OPERATIONS, payload})
export const setListLoading = (payload) => ({type: SET_LIST_LOADING, payload})
export const setEditBtnLoading = (payload) => ({type: SET_EDIT_BTN_LOADING, payload})
export const setDeleteBtnLoading = (payload) => ({type: SET_DELETE_BTN_LOADING, payload})
