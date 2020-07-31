import React, {useState} from 'react';
import {useGlobalState} from '../config/store'
import api from '../config/api'

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
    //Axios
    const handleSubmit = (event) => {
        event.preventDefault()
        const newQuote = {
            name: formState.name,
            phone: formState.phone,
            message: formState.message,
            date: new Date()
        }
        api.post("/quotes",newQuote).then(response=>{
            console.log(response.data)
            dispatch({type: "addQuote", data: newQuote})
            history.push('/')
        }).catch(error=>console.log(error.message))
        
        
    }
   
    return (
        // data-cy"" for cypress testing! dont delete
        <form data-cy="addQuoteForm" onSubmit={handleSubmit}>
            <div style={divStyles}>
                <label style={labelStyles}>Name</label>
                <input style={inputStyles} data-cy="name" required type="text" name="name" placeholder="Name" onChange ={handleChange}/>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Phone</label>
                <input style={inputStyles}  data-cy="phone" type="text" name="phone" onChange={handleChange}/>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Message</label>
                <textarea style={textAreaStyles} data-cy="message" type="text" name="message" placeholder="Message" onChange={handleChange} />
            </div>

            <input type='submit' data-cy="addQuoteButton" value='Add a Post'></input>

        </form>
    )
}

export default NewQuote;
