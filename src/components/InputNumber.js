import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function InputNumber({ setInput }) {
    // set state to the user input
    function handleInput(value) {
        setInput(value)
    }

    return (
        //input can only be a number
        <>
            <TextField
                onChange={(e) => {
                    handleInput(e.target.value);
                }}
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </>
    );
}
