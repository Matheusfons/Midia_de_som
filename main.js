
//teste de comunicação 
alert ("ta funcionando")



function tocar_som(id_audio)
{
    const elemento = document.querySelector(id_audio)

    if (elemento != null && elemento.localName === 'audio') 
    {
        elemento.play()       
          
    }
    else
    {
        console.log("elemento não encontrado ou seletor invalido")
    }

}

const lista_de_teclas = document.querySelectorAll('.tecla')



for (let contador = 0;contador < lista_de_teclas.length;contador++)
{

    const teclas_contador = lista_de_teclas[contador]

    const instrumento =teclas_contador.classList[1]

    const id_audio = `#som_${instrumento}`

    //console.log(id_audio)
    teclas_contador.onclick = function() 
    {
        tocar_som(id_audio)
    } 
    //console.log(contador)

    teclas_contador.onkeydown = function(e)
    {
        //console.log(e.code)

        if (e.code === 'Space' || e.code === 'Enter') 
        {

            teclas_contador.classList.add('ativa')

        }
        
    }
    teclas_contador.onkeyup = function()
    {
        teclas_contador.classList.remove('ativa')
    }


}

