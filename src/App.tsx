import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {

    const initialValue = localStorage.getItem('value')
    const initialStartValue = localStorage.getItem('startCounterValue')
    const initialMaxValue = localStorage.getItem('maxCounterValue')

    const [startCounterValue, setStartCounterValue] = useState(initialStartValue !== null ? +initialStartValue : 0)
    const [maxCounterValue, setMaxCounterValue] = useState(initialMaxValue !== null ? +initialMaxValue : 0)
    const [counterValue, setCounterValue] = useState(initialValue !== null ? +initialValue : 0)
    const [error, setError] = useState('')
   /* const [disabledSetBtn, setDisabledSetBtn] = useState(true)
    const [disabledIncBtn, setDisabledIncBtn] = useState(initialValue !== null ? false : true)
    const [disabledResetBtn, setDisabledResetBtn] = useState(true)*/


    // useEffect(() => {
    //     localStorage.setItem('value', JSON.stringify(counterValue))
    // }, [counterValue])
   /* let disSet

   if (startCounterValue === maxCounterValue) {
   disSet = true
   setError('This shit shouldn\'t be equal!')
   }
   if (maxCounterValue < startCounterValue) {
   disSet = true
   setError('Oh, no, max value should be bigger!')
   }
   if (startCounterValue === -1) {
   disSet = true
   setError('This shit should be bigger than 0!')
   } else {
   disSet = false

    */
    /*useEffect(() => {
        if (startCounterValue === maxCounterValue) {
            setError('This shit shouldn\'t be equal!') //покрасить красным инпуты
            setDisabledSetBtn(true)
        }
        if (maxCounterValue < startCounterValue) {
            setError('Oh, no, max value should be bigger!')
            setDisabledSetBtn(true)
        }
        if (startCounterValue < 0) {
            setError('This shit should be bigger than 0!')
            setStartCounterValue(-1) //добавить стиль, чтоб красным ругнулось
             setDisabledSetBtn(true)
        }
    }, [startCounterValue, maxCounterValue])*/
    /*useEffect(() => {
        if (counterValue === maxCounterValue && counterValue>0) {
            setDisabledIncBtn(true)
            setDisabledResetBtn(false)
        }
    }, [initialValue, initialMaxValue])*/
    /*let disSet;

        if (error || startCounterValue === maxCounterValue) {
            disSet = true
           setError('This shit shouldn\'t be equal!')
        }
        if (error || maxCounterValue < startCounterValue) {
            disSet = true
            setError('Oh, no, max value should be bigger!')
        }
        if (error || startCounterValue === -1) {
            disSet = true
            setError('This shit should be bigger than 0!')
        } else {
            disSet = false
        }*/

    const counterStyle = counterValue === maxCounterValue ? 'error' : ''



    const applySettings = () => {
        setError('')
        setCounterValue(startCounterValue)
        /*setDisabledIncBtn(false)
        setDisabledSetBtn(true)*/
        localStorage.setItem('startCounterValue', JSON.stringify(startCounterValue))
        localStorage.setItem('maxCounterValue', JSON.stringify(maxCounterValue))
    }

    const incCounterValue = () => {
        /*setDisabledResetBtn(false)*/
        setCounterValue(counterValue + 1)
        localStorage.setItem('value', JSON.stringify(counterValue + 1))
    }

    const resetCounterValue = () => {
        /*setDisabledIncBtn(false)
        setDisabledResetBtn(true)*/
        setCounterValue(startCounterValue)
    }

    return (
        <div className="App">
            <Settings
                startCounterValue={startCounterValue}
                maxCounterValue={maxCounterValue}
                setStartCounterValue={setStartCounterValue}
                setMaxCounterValue={setMaxCounterValue}
                applySettings={applySettings}
                setError={setError}
               /* setDisabledSetBtn={setDisabledSetBtn}
                disabledSetBtn={disabledSetBtn}
                setDisabledIncBtn={setDisabledIncBtn}
                disabledIncBtn={disabledIncBtn}
                setDisabledResetBtn={setDisabledResetBtn}
                disabledResetBtn={disabledResetBtn}*/
                error= {error}
            />

            <Counter
                value={counterValue}
                incCounterValue={incCounterValue}
                resetCounterValue={resetCounterValue}
                error={error}
                counterStyle={counterStyle}
                maxCounterValue={maxCounterValue}
                startCounterValue={startCounterValue}

            />
        </div>
    );
}

export default App;
