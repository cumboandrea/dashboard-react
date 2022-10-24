import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { ObjectoContext } from '../context/ObjectProvider'

const Facturas = () => {

    const {facturas, setFacturas} = useContext(ObjectoContext)

    return (
        <Fragment>

            <div className="container">
                <div className="row py-5">
                    <div className="col-12 col-md-12 offset-md-0">
                        <div className='tituloOpera'>
                            <h4 className="m-0">FACTURAS</h4><button className='ms-3'><i className="bi bi-plus-circle"></i></button>{}
                        </div>
                        
                        <hr />
                        
                        <div className='content-group'>
                        
                            {
                                facturas.map( (factura) => (
                                    <div className="card text-start mb-2 card-pagada" key={factura.id}>
                                        <div className="card-body">
                                            <div>
                                                <h5 className="card-title">{factura.numFactura}</h5>
                                                <small>{factura.title}</small>
                                                {/* <p className="card-text">{factura.fechaFactura}</p> */}
                                            </div>
                                            <div className="right-corner">
                                                { (factura.facturaPagada) ? (
                                                    <div className='ms-3'><span className="badge text-bg-success">Pagada</span></div>
                                                ) : (
                                                    <div className='ms-3'><span className="badge text-bg-danger">Retraso</span></div>
                                                ) }
                                                <div className='ms-3'>{factura.numFactura}</div>
                                                <div className='ms-3'>{factura.fechaFactura}</div>
                                                <div className='ms-3'><strong>{factura.importeFactura + ( (factura.iva) ? (factura.importeFactura*0,21) : '') - ( (factura.irpf) ? (factura.importeFactura*0,15) : '') } €</strong></div>
                                                <div className='ms-5'><Link to={`/factura/${factura.id}`}><i className="bi bi-chevron-right"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        
                        </div>
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
}

export default Facturas