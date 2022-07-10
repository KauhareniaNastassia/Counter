import React from 'react';
import css from './Display.module.css'

type DisplayPropsType = {
    value: number
    counterStyle: string
    error: string
}

export const Display = (props: DisplayPropsType) => {
    return (
        props.error // если нам в пропсах приходит ошибка, то мы ее же и выводим в дисплей, если нет, то выводим вэлью, т.е по сути ничего не трогаем
            ?   <span>{props.error}</span>
            :   <p className={props.counterStyle ? css.error : ''}>
                {props.value}
            </p>

    );
};
