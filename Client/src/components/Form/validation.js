export default function validation (input){
  //{email:..., password:...}

      const regexEmail=  /\S+@\S+\.\S+/;
      const regexPassword= new RegExp("[0-9]");
      const error={};  //error={email:ERROR}
    

if(!regexEmail.test(input.email)){
   error.email="Debe ser un email válido!";
}
if(!input.email){
    error.email="El nombre es obligatorio";
}
if(!input.email.length > 35){
    error.email="Máximo 35 caracteres!";
}
if(!regexPassword.test(input.password)){
error.password="Al menos un numero!";
}
if(input.password.length>6 || input.password.length <10) {
   error.password="Entre 6 y 10 caracteres!"
}
return error;
}
