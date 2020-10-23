import * as ActionTypes from './actionTypes'

export const increaseCounter = () => ({
    type: ActionTypes.INCREASE_COUNTER,
    payload: 1
})

export const descreaceCounter = () => ({
    type: ActionTypes.DECREASE_COUNTER,
    payload: 1
})

export const increaseByTwoCounter = () => ({
  type: ActionTypes.INCREASE_BY_TWO_COUNTER,
  payload: 2
})