import React, { useEffect } from 'react'


const Home = () => {

    const [skill, setSkill] = React.useState([])
    const [users, setUsers] = React.useState([])

    const datos = [
        {id: 1, name: 'React'},
        {id: 2, name: 'Vuejs'},
        {id: 3, name: 'Angular'},
    ]


    const obtenerDatos = async() => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const dataUssrs = await data.json()
        setUsers(dataUssrs)
        console.log(users)
    }
    
    


    useEffect( ()  => {
        setSkill(datos)  
        // console.log(skill)
        obtenerDatos()

        // eslint-disable-next-line
    }, []) 

    return (
    
        <main>
            
            <div className='container pt-5'>
                <div className='row'>
                    <div className="col-6 text-left">
                        <h1>Skills:</h1>
                    </div>
                    <div className="col-6 text-left">
                        <h2>Users:</h2>
                    </div>
                </div>

                <div className="row pt-5">
                    <div className="col-6">
                        <ul>
                            {
                                skill.map( (item) => (
                                    <li key={item.id}>{item.name}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="col-6">
                        <ul>
                            {
                                users.map( (usr) => (
                                <li key={usr.id}>{usr.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </main>

    )
}

export default Home