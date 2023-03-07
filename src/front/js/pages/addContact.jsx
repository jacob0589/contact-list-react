import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const AddContact = () => {
    const { store, actions } = useContext(Context)
    let newContact = {
        full_name: "Antonio",
        email: "antonio@antonio.com",
        phone: "2222",
        agenda_slug: "agenda_de_Alonso",
        address: "47568 NW 34ST, 33434 FL, USA",
    }

    const registerContact = (e) => {
        e.preventDefault()
        let data = new FormData(e.target)
        newContact = {
            ...newContact, full_name: data.get("full_name"),
            email: data.get("email"),
            phone: data.get("phone"),
            agenda_slug: "agenda_de_Alonso",
            address: data.get("address"),  };

           console.log(newContact)

    
     

    }

    return (<div>Aquí debería agregar contactos nuevos
        <br />
        <Link to="/">Regresar a lista de contactos</Link>
        <br />
        <form onSubmit={registerContact}>
            <input type="text" placeholder="FULL NAME" name="full_name"></input>
            <input type="text" placeholder="EMAIL" name="email"></input>
            <input type="text" placeholder="PHONE" name="phone"></input>
            <input type="text" placeholder="ADDRESS" name="address"></input>
            <button type="submit">Enviar Contacto</button>
        </form>



    </div>)
}

export default AddContact;