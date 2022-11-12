import React from "react";
import {useDispatch} from "react-redux"
import {enviarForm} from "../../redux/actions/actions.js"


const ContactUs = () => {

    const [form, setForm] = React.useState({
      nombre:"",
      email:"",
      asunto:"",
      mensaje:"",
    })

    const dispatch = useDispatch();
    
    function handleInput(e){
      setForm({...form, [e.target.name]: e.target.value});
    }

    function handleSubmit(){
      dispatch(enviarForm(form));
      setForm({
      nombre:"",
      email:"",
      asunto:"",
      mensaje:"",
      })
    }
    
    return (
    <div className="contactBg">
      <input onChange={handleInput} name="nombre"></input>
      <input onChange={handleInput} name="email"></input>
      <input onChange={handleInput} name="asunto"></input>
      <input onChange={handleInput} name="mensaje"></input>
      <button>ENVIAR</button>
    </div>
  );
};

export default ContactUs;
