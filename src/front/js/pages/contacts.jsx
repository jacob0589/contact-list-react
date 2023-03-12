import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Contactos = () => {
    const { store, actions } = useContext(Context)
const [nombre, setNombre] = useState("")
const [correo, setCorreo] = useState("")
const [telefono, setTelefono] = useState("")
    useEffect(() => { }, [store.listaContactos, nombre, correo, telefono])

    return (<div>
        Contactos
        <br />
        <Link to="/add-contact">Agregar un contacto</Link>
        <br/>
        <input type = "text" placeholder="nombreNuevo" onChange={(e)=> setNombre(e.target.value)}/>
        <input type = "text" placeholder="correoNuevo" onChange={(e)=> setCorreo(e.target.value)}/>
        <input type = "text" placeholder="telefonoNuevo" onChange={(e)=> setTelefono(e.target.value)}/>
        <br />
        <ul>
            {store.listaContactos && store.listaContactos.length > 0 ? <>
                {store.listaContactos.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.full_name} - {item.email} - {item.phone}
                            <button className="btn btn-danger" type="button" onClick={()=>{actions.deleteContact(index)}}>Eliminar Contacto</button>
                            <button className="btn btn-warning" type="button" onClick={()=>{
                                 if (nombre=== "", correo=== "", telefono==="")
                                 {alert("Agregue Datos de contacto");
                                 return
                            }
                                actions.editContact(index,nombre,correo,telefono)}}>Editar Contacto</button>
                        </li>
                    )
                })}
            </> : <>No hay contactos</>}
        </ul>
    </div>)
}

export default Contactos;