import React, { Fragment, useContext, useState } from 'react'
import { ObjectoContext } from '../context/ObjectProvider'

export const Register = () => {

    const [email, setEmail] = useState('prueba@prueba.com')
    const [password, setPassword] = useState('prueba')

    const { registerUser } = useContext(ObjectoContext) 

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log('procesando form...', email, password )
        try {
            await registerUser(email, password)
            alert("Register Ok")
        } catch (error) {
            console.log(error.code);
            // alert('Error Code: ' + error.code)
        }
    }

    return (
        <>
            <div className="container">
                <div className="row py-5">
                    <div className="col-12">
                        <h1>Register</h1>

                        <form onSubmit={handleSubmit}>
                            <input 
                                type="email" 
                                placeholder="Ingrese su email"
                                value={email}
                                onChange={ e => setEmail(e.target.value)} />
                            <input 
                                type="password" 
                                placeholder="Ingrese su Contraseña" 
                                value={password}
                                onChange={ e => setPassword(e.target.value)} />
                            <button type="submit">Registrarse</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
