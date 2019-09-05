import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const Form = props => {
   // const classes = useStyles();
    return (
        <form onSubmit={props.getUsers}>
       
        <input name="name" placeholder="Enter Name" />
        <button>Get User</button>
  
        </form>
    )
    
}
export default Form;
