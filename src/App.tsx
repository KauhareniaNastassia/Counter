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


    const counterStyle = counterValue === maxCounterValue ? 'error' : ''

    const applySettings = () => {
        setError('')
        setCounterValue(startCounterValue)
        localStorage.setItem('startCounterValue', JSON.stringify(startCounterValue))
        localStorage.setItem('maxCounterValue', JSON.stringify(maxCounterValue))

    }

    const incCounterValue = () => {
        setCounterValue(counterValue + 1)
        localStorage.setItem('value', JSON.stringify(counterValue + 1))
    }

    const resetCounterValue = () => {
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
                error= {error}
                value={counterValue}
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
