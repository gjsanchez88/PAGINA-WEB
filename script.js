//ver como puedo conectar el mail del formulario con este 

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	universidad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
}


const campos = {
	nombre: false,
	apellido: false,
	email: false,
	universidad: false,
	
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__nombre i').classList.remove('fa-times-circle');
                document.querySelector('#grupo__nombre i').classList.add('fa-check-circle');
                document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo')
            }    else{
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto')
                document.getElementById('grupo__nombre').classList.remove('formulario__grupo-correcto')
                document.querySelector('#grupo__nombre i').classList.add('fa-times-circle');
                document.querySelector('#grupo__nombre i').classList.remove('fa-check-circle');
                document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo')
            }





			
		break;
		case "apellido":

            if(expresiones.apellido.test(e.target.value)){
                document.getElementById('grupo__apellido').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__apellido').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__apellido i').classList.remove('fa-times-circle');
                document.querySelector('#grupo__apellido i').classList.add('fa-check-circle');
                document.querySelector('#grupo__apellido .formulario__input-error').classList.remove('formulario__input-error-activo')
            }    else{
                document.getElementById('grupo__apellido').classList.add('formulario__grupo-incorrecto')
                document.getElementById('grupo__apellido').classList.remove('formulario__grupo-correcto')
                document.querySelector('#grupo__apellido i').classList.add('fa-times-circle');
                document.querySelector('#grupo__apellido i').classList.remove('fa-check-circle');
                document.querySelector('#grupo__apellido .formulario__input-error').classList.add('formulario__input-error-activo')
            }


			
		break;
		
		case "email":
			if(expresiones.email.test(e.target.value)){
                document.getElementById('grupo__email').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__email').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__email i').classList.remove('fa-times-circle');
                document.querySelector('#grupo__email i').classList.add('fa-check-circle');
                document.querySelector('#grupo__email .formulario__input-error').classList.remove('formulario__input-error-activo')
            }    else{
                document.getElementById('grupo__email').classList.add('formulario__grupo-incorrecto')
                document.getElementById('grupo__email').classList.remove('formulario__grupo-correcto')
                document.querySelector('#grupo__email i').classList.add('fa-times-circle');
                document.querySelector('#grupo__email i').classList.remove('fa-check-circle');
                document.querySelector('#grupo__email .formulario__input-error').classList.add('formulario__input-error-activo')
            }
		break;
		case "universidad":
			if(expresiones.universidad.test(e.target.value)){
                document.getElementById('grupo__universidad').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__universidad').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__universidad i').classList.remove('fa-times-circle');
                document.querySelector('#grupo__universidad i').classList.add('fa-check-circle');
                document.querySelector('#grupo__universidad .formulario__input-error').classList.remove('formulario__input-error-activo')
            }    else{
                document.getElementById('grupo__universidad').classList.add('formulario__grupo-incorrecto')
                document.getElementById('grupo__universidad').classList.remove('formulario__grupo-correcto')
                document.querySelector('#grupo__universidad i').classList.add('fa-times-circle');
                document.querySelector('#grupo__universidad i').classList.remove('fa-check-circle');
                document.querySelector('#grupo__universidad .formulario__input-error').classList.add('formulario__input-error-activo')
            }
		break;
	}
}  



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});



