import React, { Component } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function NotFound(){
    const [txt, setTxt] = useState('');
        return(
            <ComponentNotFound className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>Greška!</h1>
                            <h2>ERROR 404</h2>
                            <div className="error-details">
                                Kliknite na dugme ispod za vise detalja!
                            </div>
                            <div>
                                <p>{txt}</p>
                                <button onClick={() => setTxt(txt + '*Detalji greske: 404 greška je HTTP statusni kod, koji znači da stranica putem koje želite da pristupite web sajtu nije pronađena na serveru. Molimo Vas vratite se na pocetnu stranu sajta.')}>Više detalja</button>
                            </div>
                            <br></br>
                            <div className="error-actions">
                                <Link className="btn btn-outline-primary btn-lg" to="/">
                                    Vrati se na početnu stranicu
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </ComponentNotFound>
        );
    }


export default NotFound;

const ComponentNotFound = styled.div`
    .error-template {
        padding: 40px 15px;
        text-align: center;
    }

    .error-actionss {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .btn {
        margin-right: 10px;
    }

`;

