import React, { useState, useId} from 'react'
import userList from "../assets/utils/user.json"
import Card from './Card';

const UserView = () => {
    //const users = userList.usuarios;  
    const id = useId();
    const [users, setUsers] = useState([userList.usuarios]); /*Pongo la lista de usuarios dentro de un estado*/

    const deleteUser = (id) => {  
    const nuevoUsuario = users.filter((user) => user.id !== id);
    setUsers(nuevoUsuario);


    };    

    return (
        <div>
            { users.map((user) => {
                return <Card key={`${user.id}-${id}`} nombre={user.nombre} apellido={user.apellido} deleteUser={deleteUser}/> /* la key es una prop obligatoria, siempre es el id y si no se pasa tira un error en consola*/
            })}
        </div>
    );

}

export default UserView;

