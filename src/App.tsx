import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {

    const [startCounterValue, setStartCounterValue] = useState(0)
    const [maxCounterValue, setMaxCounterValue] = useState(0)
    const [counterValue, setCounterValue] = useState(0)
    const [error, setError] = useState('')
    const [disabledSetBtn, setDisabledSetBtn] = useState(false)
    const [disabledIncBtn, setDisabledIncBtn] = useState(false)
    const [disabledResetBtn, setDisabledResetBtn] = useState(false)

    useEffect( () => {
        if (startCounterValue < 0) {
            setError('This shit should be bigger than 0!')
            setStartCounterValue(0)
            setDisabledSetBtn(true)
            setDisabledIncBtn(true)
        }
        if (startCounterValue === maxCounterValue) {
            setError('This shit shouldn\'t be equal!')
            setDisabledSetBtn(true)
        }
        if (maxCounterValue < startCounterValue) {
            setError('Oh, no, max value should be bigger!')
            setDisabledSetBtn(true)
        }
        if (maxCounterValue < 0) {
            setError('This shit should be bigger than 0 too!')
            setMaxCounterValue(0)
            setDisabledSetBtn(true)
        }
    }, [startCounterValue, maxCounterValue] )

useEffect( () => {
    setDisabledResetBtn(true)
}, [] )

    useEffect( () => {
        if (counterValue === maxCounterValue) {
            setDisabledIncBtn(true)
        }
    }, [counterValue, maxCounterValue])



    const counterStyle = counterValue === maxCounterValue ? 'error' : ''
    /*const changeStartCounterValue = (newStartValue: number) => {
        setStartCounterValue(newStartValue)
        setError('enter values and press \'set\'')
    }

    const changeMaxCounterValue = (newMaxValue: number) => {
        setMaxCounterValue(newMaxValue)
        setError('enter values and press \'set\'')
    }*/

    const applySettings = () => {
        setError('')
        setCounterValue(startCounterValue)
        setDisabledSetBtn(true)
        setDisabledIncBtn(false)
        setDisabledResetBtn(true)
    }

    const incCounterValue = () => {
        setDisabledResetBtn(false)
            setCounterValue(counterValue + 1)
    } //buttonsCallback

    const resetCounterValue = () => {
        /*setDisabledResetBtn(true)*/
        setDisabledIncBtn(false)
        setDisabledResetBtn(true)
        setCounterValue(startCounterValue)
    }//buttonsCallback

    return (
        <div className="App">
            <Settings
                startCounterValue={startCounterValue}
                maxCounterValue={maxCounterValue}
                setStartCounterValue={setStartCounterValue}
                setMaxCounterValue={setMaxCounterValue}
                applySettings={applySettings}
                setError={setError}
                setDisabledSetBtn={setDisabledSetBtn}
                disabledSetBtn={disabledSetBtn}
                setDisabledIncBtn={setDisabledIncBtn}
                disabledIncBtn={disabledIncBtn}
                setDisabledResetBtn={setDisabledResetBtn}
                disabledResetBtn={disabledResetBtn}

            />

            <Counter
                value={counterValue}
                incCounterValue={incCounterValue}
                resetCounterValue={resetCounterValue}
                error={error}
                counterStyle={counterStyle}
                counterValue={counterValue}
                maxCounterValue={maxCounterValue}
                startCounterValue={startCounterValue}
                disabledIncBtn={disabledIncBtn}
                disabledResetBtn={disabledResetBtn}
            />
        </div>
    );
}

export default App;
