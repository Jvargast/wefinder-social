

const valid = ({startupName, username, email, password, agree}) => {
    const err = {}

    if(!startupName) {
        err.startupName = "Por favor agrega un nombre de tu startup."
    }else if(startupName.length < 3){
        err.fullname = "El nombre del startup debe ser de al menos 3 letras."
    }

    if(!username) {
        err.username = "Por favor agrega un nombre de usuario"
    }else if(username.replace(/ /g, '').length > 25){
        err.username = "El usuario es de hasta 25 caracteres de largo."
    }

    if(!email) {
        err.email = "Por favor agrega un correo"
    }else if(!validateEmail(email)){
        err.email = "El formato es incorrecto"
    }

    if(!password) {
        err.password = "Por favor agrega una contraseña."
    }else if(password.length < 6){
        err.password = "La contraseña debe de ser de al menos 6 caracteres."
    }

    if(!agree){
        err.agree = "Por favor acepta las políticas."
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }
}



function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  
export default valid