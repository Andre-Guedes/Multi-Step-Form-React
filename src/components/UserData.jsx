import React from "react";

import "./UserData.css"

const UserData = ({data, updateFieldHandler}) => {
    return(
        <div className="userform">
            <div className="title">
                <p>Por favor, informe seus dados para finalizar seu cadastro.</p>
            </div>
        
            <div className="userData">
                <label id="name">
                    <input 
                        type="text" 
                        className="name"
                        value={data.name || ""} 
                        onChange = {(e) => updateFieldHandler("name", e.target.value)} required/>
                    <p>Nome</p>
                </label>
                <label id="email">
                    <input 
                        type="text"
                        className="email"
                        value={data.email || ""}
                        onChange = {(e) => updateFieldHandler("email", e.target.value)} required/>
                    <p>E-mail</p>
                </label>
                <label id="phone">
                    <input 
                        type="text" 
                        className="phone"
                        value={data.phone}
                        onChange={(e) => updateFieldHandler("phone", e.target.value)} required/>
                    <p>Telefone</p>
                </label>
            </div>
        </div>
    )
}

export default UserData;