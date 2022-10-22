import {ChangeEvent} from "react";
import {Dispatch} from "redux";
import {AppRootStateType} from "./store";


export type initialStateType = {
    startCounterValue: number
    maxCounterValue: number
    counterValue: number
    error: string
}

const initialState = {
    startCounterValue: 0,
    maxCounterValue: 0,
    counterValue: 0,
    error: 'enter values and press \'set\''
}

export const counterReducer = (state: initialStateType = initialState, action: allActionsType): initialStateType => {
    switch(action.type) {
        case 'APPLY-SETTINGS':
            return {...state, error: '', counterValue: state.startCounterValue}
        case 'INC-COUNTER-VALUE':
            return { ...state, counterValue: state.counterValue +1 }
        case 'RESET-COUNTER-VALUE':
            return { ...state, counterValue: state.startCounterValue }
        case 'CHANGE-START-COUNTER-VALUE-FROM-SETTINGS':
            let newStartValue = +action.payload.event.currentTarget.value
            return { ...state, startCounterValue: newStartValue, error: 'enter values and press \'set\'' }
        case 'CHANGE-MAX-COUNTER-VALUE-FROM-SETTINGS':
            let newMaxValue = +action.payload.event.currentTarget.value
            return { ...state, maxCounterValue: newMaxValue, error: 'enter values and press \'set\'' }
        case 'SET-ERROR' :
            let message = 'enter values and press \'set\''
            if (state.startCounterValue === state.maxCounterValue) {
                message ='This shit shouldn\'t be equal!'
            } else if (state.maxCounterValue < state.startCounterValue) {
                message = 'Oh, no, max value should be bigger!'
            } else if (state.startCounterValue === -1) {
                message ='This shit should be bigger than 0!'
            }
            return { ...state, error: message }

        default: return state
    }

}


type allActionsType =
    applySettingsACType |
    incCounterValueACType |
    resetCounterValueACType |
    onChangeStartCounterValueACType |
    onChangeMaxCounterValueACType |
    setErrorACType

type applySettingsACType = ReturnType<typeof applySettingsAC>
type incCounterValueACType = ReturnType<typeof incCounterValueAC>
type resetCounterValueACType = ReturnType<typeof resetCounterValueAC>
type onChangeStartCounterValueACType = ReturnType<typeof onChangeStartCounterValueAC>
type onChangeMaxCounterValueACType = ReturnType<typeof onChangeMaxCounterValueAC>
type setErrorACType = ReturnType<typeof setErrorAC>

export const applySettingsAC = () => {
    return {
        type: 'APPLY-SETTINGS'
    } as const
}
export const incCounterValueAC = () => {
    return {
        type: 'INC-COUNTER-VALUE'
    } as const
}
export const resetCounterValueAC = () => {
    return {
        type: 'RESET-COUNTER-VALUE'
    } as const
}

export const onChangeStartCounterValueAC = (event: ChangeEvent<HTMLInputElement>) => {
    return {
        type: 'CHANGE-START-COUNTER-VALUE-FROM-SETTINGS',
        payload: {
            event
        }
    } as const
}

export const onChangeMaxCounterValueAC = (event: ChangeEvent<HTMLInputElement>) => {
    return {
        type: 'CHANGE-MAX-COUNTER-VALUE-FROM-SETTINGS',
        payload: {
            event
        }
    } as const
}

export const setErrorAC = () => {
    return {
        type: 'SET-ERROR',
    } as const
}


//-------------------------------------------

/*
export const incCounterValueTC = () =>  (dispatch: Dispatch, getState: () => AppRootStateType) => {

    let currentValue = getState().counterState.counterValue

    localStorage.setItem('value', JSON.stringify(currentValue + 1))
    dispatch(incCounterValueAC())

}*/
