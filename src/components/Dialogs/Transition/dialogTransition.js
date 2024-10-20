
import Slide from '@mui/material/Slide';
import React from 'react';


export const DialogTransition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});