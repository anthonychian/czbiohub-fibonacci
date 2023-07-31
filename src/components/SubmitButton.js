import { Link } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';

export default function SubmitButton({ input }) {
    return (
        // redirect user to the next page with input as URL parameter
        <>
            <Link to={`/results/${input}`}>
                <Button variant="contained">Submit</Button>
            </Link>
        </>
    )
}
