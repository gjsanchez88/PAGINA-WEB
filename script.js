//ver como puedo conectar el mail del formulario con este 



let email = "*******@*****.com"

//para validar un mail me fijo que tiene @

for (let i=0; i<email.length;i++){
    if(email[i]=='@'){
        console.log("mail valido")
        break
    }
}

if (email.includes('@')){
    console.log("mail valido con includes")
}else{
    alert("mail invalido")
}