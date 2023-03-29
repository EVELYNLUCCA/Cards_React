import React from 'react'


/*Como en este caso necesito pasarle como props TODAS las claves del objeto(id, nombre, apellido, función), podría pasarle directamente el objeto entero: const Card = ({ user }) */ 
const Card = ({id, nombre, apellido, deleteUser}) => { 

console.log(id, nombre, apellido)
    return (
    <div
    style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: "300px",
        margin:"15px",
        height: "300px",
        border: "3px solid black",
        borderRadius: "15px", 
        alignItems: "center"
}}

    >

    <h2>{nombre}</h2>
    <h2>{apellido}</h2>
    <button onClick={() => {deleteUser(id)}}>Eliminar</button> 
    </div>
    )
}

export default Card;