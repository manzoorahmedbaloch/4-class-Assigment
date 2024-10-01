import React from "react";
import { ButtonProps } from "../types";

const Button = (props: ButtonProps) => {
    return (
        <button 
            type="button" 
            className="bg-blue-400 rounded-md text-xl p-2 mt-3"
        >
            {props.btnText}
        </button>
    );
};

export default Button;
