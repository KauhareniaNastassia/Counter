import React, {ChangeEvent} from 'react';
import Button from "../Button";
import css from './Settings.module.css'


type SettingsPropsType = {
    startCounterValue: number
    maxCounterValue: number
    applySettings: () => void
    setStartCounterValue: (startCounterValue: number) => void
    setMaxCounterValue: (maxCounterValue: number) => void
    setError: (error: string) => void
    disabledSetBtn: boolean
    setDisabledSetBtn: (disabledSetBtn: boolean) => void
    disabledIncBtn: boolean
    setDisabledIncBtn: (disabledIncBtn: boolean) => void
    disabledResetBtn: boolean
    setDisabledResetBtn: (disabledResetBtn: boolean) => void
}


export const Settings = (props: SettingsPropsType) => {

    const onChangeStartCounterHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setDisabledSetBtn(false)
        props.setDisabledIncBtn(true)
        props.setDisabledResetBtn(true)
        let newStartValue = +event.currentTarget.value
        props.setStartCounterValue(newStartValue)
        props.setError('enter values and press \'set\'')
    }

    const onChangeMaxCounterHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setDisabledSetBtn(false)
        props.setDisabledResetBtn(true)
        props.setDisabledIncBtn(true)
        let newMaxValue = +event.currentTarget.value
        props.setMaxCounterValue(newMaxValue)
        props.setError('enter values and press \'set\'')
    }


    return (
        <div className={css.settings_wrapper}>
            <div>
                max value: <input
                type='number'
                value={props.maxCounterValue}
                onChange={onChangeMaxCounterHandler}

            />
            </div>
            <div>
                start value: <input
                type='number'
                value={props.startCounterValue}
                onChange={onChangeStartCounterHandler}

            />
            </div>
            <Button
                name={'set'}
                onClick={props.applySettings}
                disabled={props.disabledSetBtn}
            />

        </div>
    );
};

