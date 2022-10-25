import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export const ObjectoContext = createContext()

const ObjectProvider = ( props ) => {

    const [user, setUser] = useState()
    const [facturas, setFacturas] = useState([])

    const todasFacturas = [
        { id:1, title: 'Factura a Empresa X', numFactura: 'EM-20221021-1', fechaFactura: '2022/10/21', fechaVence: '2022/11/20', corpoFactura: 'text text texto de ejemplo', importeFactura: 100, iva:true, irpf:true, facturaPagada: true, fechaPagamento: "23/10/2022" },
        { id:2, title: 'Segunda factura a Empresa Y', numFactura: 'YY-20221021-2', fechaFactura: '2022/10/18', fechaVence: '2022/11/16', corpoFactura: 'Este es el contenido de ejemplo de la factura', importeFactura: 200, iva:false, irpf:false, facturaPagada: false, fechaPagamento: '' },
        { id:3, title: 'Factura Lorem Ipsum', numFactura: 'EM-20221021-1', fechaFactura: '2022/10/21', fechaVence: '2022/11/20', corpoFactura: 'text text texto de ejemplo', importeFactura: 100, iva:true, irpf:true, facturaPagada: true, fechaPagamento: "23/10/2022" },
        { id:4, title: 'Empresa Y182736', numFactura: 'YY-20221021-2', fechaFactura: '2022/10/18', fechaVence: '2022/11/16', corpoFactura: 'Este es el contenido de ejemplo de la factura', importeFactura: 200, iva:false, irpf:false, facturaPagada: false, fechaPagamento: '' },
        { id:5, title: 'Factura Escondido', numFactura: 'EM-20221021-1', fechaFactura: '2022/10/21', fechaVence: '2022/11/20', corpoFactura: 'text text texto de ejemplo', importeFactura: 100, iva:true, irpf:true, facturaPagada: true, fechaPagamento: "23/10/2022" },
        { id:6, title: 'Esto es un mantenimiento', numFactura: 'YY-20221021-2', fechaFactura: '2022/10/18', fechaVence: '2022/11/16', corpoFactura: 'Este es el contenido de ejemplo de la factura', importeFactura: 200, iva:false, irpf:false, facturaPagada: false, fechaPagamento: '' },
    ]

    useEffect( ()  => {
        setFacturas(todasFacturas)
        // eslint-disable-next-line
    }, []) 


    const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

    return (
        <ObjectoContext.Provider value = {{ user, setUser, facturas, setFacturas, registerUser, loginUser }}>
            {props.children}
        </ObjectoContext.Provider>
    )

}

export default ObjectProvider;