import React from "react";
import { useState } from "react";


export const Text = () => {
    const [text, setText] = useState('');

    const textValue = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <input onChange={ textValue } />
            <h1>{text}</h1>
        </div>
    );
}

