import React from 'react';
import Button from "../Button";
import {Display} from "./Display";
import css from './Counter.module.css'

type CounterPropsType = {
    value: number
    incCounterValue: () => void
    resetCounterValue: () => void
    error: string
    counterStyle: string
    counterValue: number
    maxCounterValue: number
    startCounterValue: number
    disabledIncBtn: boolean
    disabledResetBtn: boolean
}


export const Counter = (props: CounterPropsType) => {


    return (
        <div className={css.counter_wrapper}>
            <div className={css.display_wrapper}>
                <Display
                    value={props.value}
                    counterStyle={props.counterStyle}
                    error={props.error}
                />
            </div>
            <div>
                <Button
                    name={'inc'}
                    onClick={props.incCounterValue}
                    disabled={props.disabledIncBtn}
                />
                <Button
                    name={'reset'}
                    onClick={props.resetCounterValue}
                    disabled={props.disabledResetBtn}
                />
            </div>

        </div>
    );
};
