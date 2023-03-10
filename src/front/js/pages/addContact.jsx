import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const AddContact = () => {
    const { store, actions } = useContext(Context);
    const full_name_ref = useRef();
    const email_ref = useRef();
    const phone_ref = useRef();
    const address_ref = useRef();

    const registerContact = (e) => {
        e.preventDefault();
        const newContact = {
            full_name: full_name_ref.current.value,
            email: email_ref.current.value,
            phone: phone_ref.current.value,
            address: address_ref.current.value,
            agenda_slug: "agenda_de_Alonso",
        };
        actions.addContact(newContact);
        e.target.reset();
    };

    return (
        <div>
            Aquí debería agregar contactos nuevos
            <br />
            <Link to="/">Regresar a lista de contactos</Link>
            <br />
            <form onSubmit={registerContact}>
                <input type="text" placeholder="FULL NAME" ref={full_name_ref}></input>
                <input type="text" placeholder="EMAIL" ref={email_ref}></input>
                <input type="text" placeholder="PHONE" ref={phone_ref}></input>
                <input type="text" placeholder="ADDRESS" ref={address_ref}></input>
                <button type="submit">Enviar Contacto</button>
            </form>
        </div>
    );
};

export default AddContact;