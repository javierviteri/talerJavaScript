document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('inputname').value;
    var edad = document.getElementById('inputAge').value;
    if(nombre.length == 0) {
        nombre = 'El usuario'
      }
    if(edad.length == 0) {
      alert('No has escrito nada en el campo edad');
      return;
    }
    else{
        if (edad<18){
               alert(nombre+" es menor de edad.")
               document.fvalida.edad.focus()
               return 0;
        }
        else{
            alert(nombre+" es mayor de edad.")
            return 0;
        }
    }
    this.submit();
  }
  
