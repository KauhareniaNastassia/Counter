import React, {ChangeEvent} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    applySettingsAC,
    incCounterValueAC,
    onChangeMaxCounterValueAC,
    onChangeStartCounterValueAC,
    resetCounterValueAC,
    setErrorAC
} from "./state/counter-reducer";

function App() {

    /*const initialValue = localStorage.getItem('value')
    const initialStartValue = localStorage.getItem('startCounterValue')
    const initialMaxValue = localStorage.getItem('maxCounterValue')*/


    const startCounterValueFromStore = useSelector<AppRootStateType, number>(state => state.counterState.startCounterValue)
    const maxCounterValueFromStore = useSelector<AppRootStateType, number>(state => state.counterState.maxCounterValue)
    const counterValueFromStore = useSelector<AppRootStateType, number>(state => state.counterState.counterValue)
    const errorFromStore = useSelector<AppRootStateType, string>(state => state.counterState.error)
    //const [startCounterValue, setStartCounterValue] = useState(0)
    //const [maxCounterValue, setMaxCounterValue] = useState(0)
    //const [counterValue, setCounterValue] = useState(0)
    //const [error, setError] = useState('')

    const dispatch = useDispatch()


    const counterStyle = counterValueFromStore === maxCounterValueFromStore ? 'error' : ''

    const applySettings = () => {
        dispatch(applySettingsAC())
        /*setError('')
        setCounterValue(startCounterValue)*/
        /*localStorage.setItem('startCounterValue', JSON.stringify(startCounterValue))
        localStorage.setItem('maxCounterValue', JSON.stringify(maxCounterValue))*/

    }

    const incCounterValue = () => {

        dispatch(incCounterValueAC())
        //setCounterValue(counterValue + 1)
        /*localStorage.setItem('value', JSON.stringify(counterValue + 1))*/
    }

    const resetCounterValue = () => {
        dispatch(resetCounterValueAC())
        //setCounterValue(startCounterValue)
    }

    const setStartCounterValue = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeStartCounterValueAC(event))
    }

    const setMaxCounterValue = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeMaxCounterValueAC(event))
    }

    const setError = () => {
       dispatch(setErrorAC())
    }

    return (
        <div className="App">
            <Settings
                startCounterValue={startCounterValueFromStore}
                maxCounterValue={maxCounterValueFromStore}
                setStartCounterValue={setStartCounterValue}
                setMaxCounterValue={setMaxCounterValue}
                applySettings={applySettings}
                setError={setError}
                error= {errorFromStore}
                value={counterValueFromStore}
            />

            <Counter
                value={counterValueFromStore}
                incCounterValue={incCounterValue}
                resetCounterValue={resetCounterValue}
                error={errorFromStore}
                counterStyle={counterStyle}
                maxCounterValue={maxCounterValueFromStore}
                startCounterValue={startCounterValueFromStore}

            />
        </div>
    );
}

export default App;
