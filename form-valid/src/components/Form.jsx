import React, { useReducer, useState } from "react";

const initialForm = {
    firstName: ['', false],
    lastName: ['', false],
    email: ['', false]
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

const Form = (props) => {
    const [state, dispatch] = useReducer(reducer, initialForm);

    function handleName(e){
        const {name, value} = e.target;
        let isValid = true;
        if(value.length < 2){
            isValid = false;
        }
        console.log(name, value)
        dispatch({
            type: name,
            payload: [value, isValid]
        });
        return isValid;
    }

    function handleEmail(e){
        const {name, value} = e.target;
        let isValid = false;
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
            isValid = true;
        }
        console.log(name, value)
        dispatch({
            type: name,
            payload: [value, isValid]
        });
        return isValid;
    }

    return (
        <div>
            <form action="">
                <label htmlFor="firstname">First Name:</label>
                <input type="text" name='firstName' value={state.firstName[0]} onChange={handleName} style={{border : state.firstName[1]? '1px solid black' : '1px solid red'}}/>
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" name='lastName' value={state.lastName[0]} onChange={handleName} style={{border : state.lastName[1]? '1px solid black' : '1px solid red'}}/>
                <label htmlFor="email">Email:</label>
                <input type="email" name='email' value={state.email[0]} onChange={handleEmail} style={{border : state.email[1]? '1px solid black' : '1px solid red'}}/>
            </form>
        </div>
    )
}

export default Form;