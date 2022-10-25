import React, { Fragment, useContext, useState } from 'react'
import { ObjectoContext } from '../context/ObjectProvider'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { loginUser, setUser, user } = useContext(ObjectoContext)

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log('procesando form...', email, password )
        try {
            await loginUser(email, password)
            alert("Login Ok")
            setUser(true)
        } catch (error) {
            console.log(error.code);
            alert('Error Code: ' + error.code)
        }
    }


  return (
    <>
        <div className="container">
            <div className="row py-5">
                <div className="col-12">
                    <h1>Login</h1>
                    
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
                        <button type="submit">Login</button>
                    </form>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Login