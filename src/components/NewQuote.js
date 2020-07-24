import React, {useState} from 'react';
import {useGlobalState} from '../config/store'

function NewQuote(props) {
   const {dispatch} = useGlobalState();
   const {history, nextId} = props
    //styling
    const divStyles = {
       display: 'grid',
       width: '100vw',
   }
   const inputStyles = {
       width: '70vw',
       margin: '0.5em'
   }
   const labelStyles = {
       fontSize: '1.2em'
   }
   const textAreaStyles = {
       height: '200px',
       margin: '0.5em',
       width: '70vw'
   }

   //state 
    const initalFormState = {
        name: "",
        phone: "",
        message: ""
    }
    const [formState, setFormState] = useState(initalFormState);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({...formState, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newQuote = {
            _id: nextId,
            name: formState.name,
            phone: formState.phone,
            message: formState.message,
            modified_date: new Date()
        }
        dispatch({type: "addQuote", data: newQuote})
        history.push('/')
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <div style={divStyles}>
                <label style={labelStyles}>Name</label>
                <input style={inputStyles} required type="text" name="name" placeholder="Name" onChange ={handleChange}/>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Phone</label>
                <input style={inputStyles}  type="text" name="phone" onChange={handleChange}/>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Message</label>
                <textarea style={textAreaStyles} type="text" name="message" placeholder="Message" onChange={handleChange} />
            </div>
            <input type='submit' value='Add a Post'></input>
        </form>
    )
}

export default NewQuote;
