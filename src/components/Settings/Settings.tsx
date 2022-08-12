import React, {ChangeEvent} from 'react';
import Button from "../Button";
import css from './Settings.module.css'


type SettingsPropsType = {
    startCounterValue: number
    maxCounterValue: number
    applySettings: () => void
    setStartCounterValue: (startCounterValue: ChangeEvent<HTMLInputElement>) => void
    setMaxCounterValue: (maxCounterValue: ChangeEvent<HTMLInputElement>) => void
    error: string
    setError: () => void
    value: number
}


export const Settings = (props: SettingsPropsType) => {


    /*let disSet;

     if (props.startCounterValue === props.maxCounterValue) {
         disSet = true
         props.setError('This shit shouldn\'t be equal!')
     } else if (props.maxCounterValue < props.startCounterValue) {
         disSet = true
         props.setError('Oh, no, max value should be bigger!')
     } else if (props.startCounterValue === -1) {
         disSet = true
         props.setError('This shit should be bigger than 0!')
     }
     else {
         disSet = false
     }*/

    /*if (props.startCounterValue === props.maxCounterValue) {
        props.setError('This shit shouldn\'t be equal!' )
    } else if (props.maxCounterValue < props.startCounterValue) {
        props.setError('Oh, no, max value should be bigger!')
    } else if (props.startCounterValue === -1) {
        props.setError('This shit should be bigger than 0!')
    }*/

    const onChangeStartCounterHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setStartCounterValue(event)
        props.setError()
    }

    const onChangeMaxCounterHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMaxCounterValue(event)
        props.setError()
    }

    /*const onChangeStartCounterHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let newStartValue = +event.currentTarget.value
        props.setStartCounterValue(newStartValue)
        props.setError('enter values and press \'set\'')
    }*/

    /*const onChangeMaxCounterHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = +event.currentTarget.value
        props.setMaxCounterValue(newMaxValue)
        props.setError('enter values and press \'set\'')
    }*/


    return (
        <div className={css.settings_wrapper}>
            <div className={css.values}>
                <div className={css.value}>
                    <span>max value:</span> <input
                    className={css.input}
                    type='number'
                    value={props.maxCounterValue}
                    onChange={(event) => onChangeMaxCounterHandler(event)}

                />
                </div>
                <div className={css.value}>
                    <span>start value:</span> <input
                    className={css.input}
                    type='number'
                    value={props.startCounterValue}
                    onChange={(event) => onChangeStartCounterHandler(event)}

                />
                </div>
            </div>

            <Button
                className={css.btn}
                name={'set'}
                onClick={props.applySettings}
                disabled={props.error !== 'enter values and press \'set\''}
            />

        </div>
    );
};