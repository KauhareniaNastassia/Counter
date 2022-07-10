import React, {ButtonHTMLAttributes} from 'react';

type ButtonPropsType = {
    name: string
}


export const Button = ({name, ...props}: ButtonPropsType & ButtonHTMLAttributes<any>) => {
    return (
            <button {...props}> {name} </button>
    );
};

export default Button;