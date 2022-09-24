
const Contacto = () =>{
    return(
        <div className="body">
            <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
            <div className="form">
                <p>Correo: </p>
                <input style={{margin:"10px"}} type="text" placeholder="name@example.com" />
                <p>Descripción </p>
                <input className="description" type="text" />
                <br />
                <button style={{margin:"10px"}} > Enviar </button>
            </div>
        </div>
    );
}

export default Contacto;