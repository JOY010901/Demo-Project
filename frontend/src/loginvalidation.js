function Validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    if (values.email === "") {
        error.email = "name should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "email is not valid"
    } else {
        error.email = ""
    }
    
    if (values.password === "") {
        error.password = "password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "password is not valid"
    } else {
        error.password = ""
    }
    return error;
}

export default Validation;