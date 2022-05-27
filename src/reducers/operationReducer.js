const ADD_OPERATION = 'ADD_OPERATION'
const DEL_OPERATION = 'DEL_OPERATION'
const UPDATE_OPERATIONS = 'UPDATE_OPERATIONS'

const defaultState = {
  operations: [],
  hasLoading: false,
}

export default function operationReducer (state = defaultState, action) {
  switch (action.type) {
    case ADD_OPERATION:
      return {...state, operations: [...state.operations, action.payload]}
    case DEL_OPERATION:
      return {...state, operations: state.operations.filter(it => it._id !== action.payload)}
    case UPDATE_OPERATIONS:
      return {...state, operations: [...action.payload]}
    default: return state
  }
}

export const addOperationAction = (payload) => ({type: ADD_OPERATION, payload})
export const delOperationAction = (payload) => ({type: DEL_OPERATION, payload})
export const updateOperationsAction = (payload) => ({type: UPDATE_OPERATIONS, payload})
