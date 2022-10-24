import React, { Fragment, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ObjectoContext } from '../context/ObjectProvider'


const DetalleFactura = () => {

    // console.log(useParams())
    const {id} = useParams()
    const {facturas} = useContext(ObjectoContext)
    // console.log(facturas)

    const arrayResultadoFactura = facturas.filter( item => item.id == id);
    console.log(arrayResultadoFactura)

    return (
        <Fragment>

            <div className="container">
                <div className="row py-5">
                    <div className="col-12">
                        id: { id }
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        {
                            arrayResultadoFactura.map( (item) => (
                                <>
                                    <h1 className="d-inline">{item.title}</h1> { item.facturaPagada ? (<div className='ms-3 d-inline'><span className="badge text-bg-success">Pagada</span></div>) : (<div className='ms-3 d-inline'><span className="badge text-bg-danger">Retraso</span></div>) }
                                    <p>{item.corpoFactura}</p>
                                    <hr/>
                                    Numero Factura: {item.numFactura}<br/>
                                    Fecha: {item.fechaFactura}<br/><br/>
                                    <hr/>

                                    <div className='text-end'>
                                        Base: {item.importeFactura}<br/>
                                        {
                                            item.iva ? (
                                                "IVA 21%: " + (item.importeFactura * 0,21)
                                            ) : (
                                                "IVA 21%: 0"
                                            )
                                        }<br/>
                                        {
                                            item.iva ? (
                                                "Suma: " + (item.importeFactura + (item.importeFactura * 0,21))
                                            ) : (
                                                "Suma: " + item.importeFactura
                                            )
                                        }<br/>
                                        {
                                            item.irpf ? (
                                                "IRPF 15%: " + (item.importeFactura * 0,15)
                                            ) : (
                                                "IRPF 15%: 0" 
                                            )
                                        }<br/>
                                        {
                                            "Total: " + (item.importeFactura + (item.iva ? (item.importeFactura * 0,21) : (0)) - (item.irpf ? (item.importeFactura * 0,15) : (0) ))
                                        }<br/>
                                        {
                                            item.fechaPagamento ? 
                                            ( "Pagada il: " + item.fechaPagamento ) :
                                            ( "" )
                                        }
                                    </div>
                                    
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default DetalleFactura