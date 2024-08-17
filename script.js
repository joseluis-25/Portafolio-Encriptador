var textArea = document.querySelector(".text-area");
var mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"
var texto = textArea.value;
function esTextoValido(texto) 
{
  // Verifica si la cadena solo contiene letras minúsculas
  return /^[a-z]+$/.test(texto);
}

function encriptar(stringEncriptada)
  {
    let matrizCodigo= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase()

      for(let i=0;i<matrizCodigo.length;i++)
      {
          if(stringEncriptada.includes(matrizCodigo[i][0]))
              {
                  stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]) 
              }
      }
    return stringEncriptada
  }

function btnEncriptar()
  {
    var texto = textArea.value;
      if (esTextoValido(texto)) 
        {
        var textoEncriptado = encriptar (texto)
        mensaje.value = textoEncriptado;
        textArea.value="";
        mensaje.style.backgroundImage ="none";  
        }
        else 
        {
          textArea.value ="El texto solo debe contener letras minúsculas.";
          return;
        }

  }
  
function desencriptar(stringDesencriptada)
{
  let matrizCodigo= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringDesencriptada=stringDesencriptada.toLowerCase()

    for(let i=0;i<matrizCodigo.length;i++)
    {
        if(stringDesencriptada.includes(matrizCodigo[i][1]))
            {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]) 
            }
    }
  return stringDesencriptada
}

function btnDesencriptar()
 {
   var textoDesencriptado = desencriptar (textArea.value)
   mensaje.value = textoDesencriptado;
   textArea.value="";  
 }

function btnCopiar()
{
    textArea.value = mensaje.value
}

var imagenReinicio = document.getElementById('imagenReinicio');
// Añade un evento de clic a la imagen
imagenReinicio.addEventListener('click', function() {
// Acción a realizar cuando la imagen es clicada
textArea.value = "";
mensaje.value = "";
mensaje.style.backgroundImage = "url('Muñeco.png')";

})