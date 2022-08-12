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
    maxCounterValue: number
    startCounterValue: number
}


export const Counter = (props: CounterPropsType) => {
    let disReset;
    if (props.error || props.startCounterValue === props.value) {
        disReset = true
    }else{
        disReset = false
    }

    let disInc;
    if (props.error || props.maxCounterValue === props.value) {
        disInc =true
    } else {
        disInc = false
    }



    return (
        <div className={css.counter_wrapper}>
            <div className={css.display_wrapper}>
                <Display
                    value={props.value}
                    counterStyle={props.counterStyle}
                    error={props.error}
                />
            </div>
            <div className={css.btn_block}>
                <Button
                    className={css.btn}
                    name={'inc'}
                    onClick={props.incCounterValue}
                    disabled={disInc}
                />
                <Button
                    className={css.btn}
                    name={'reset'}
                    onClick={props.resetCounterValue}
                    disabled={disReset}
                />
            </div>

        </div>
    );
};
