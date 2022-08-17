

//Jquery
$('#boton').click(()=>{                    // capturamos el boton  y le seteamos un event 
    let lista = $(`#lista`)                 // id de mi listas
    lista.empty();                          // limpiar la lista 
    $.get(`http://localhost:5000/amigos`,response =>{            // utilizamos el metodo HTTP - Get pasamos por parametro la url , segundo parametro que se va aejecutar una vez el servidor me conteste
   for (let i = 0; i < response.length; i++) {
    let li = `<li>${response[i].name}</li>`;
        lista.append(li)                                         // es como el push para ponerlo adentro de la listas en hmtl
   }                                     
  })
})          

$('#search').click(() => {
  let inputValue = $('#input').val();                            // con val('') se limpia el input
  $.get(`http://localhost:5000/amigos/${inputValue}`,response => {
    $('#amigo').text(response.name)
  })
})

$('#delete').click(()=>{
  let inputValue =$('#inputDelete').val(''); 
  $.ajax({                                            //$delete no existe
     url:`http://localhost:5000/amigos/${inputValue}`,
     type: 'DELETE',
     success: ()=>{                                   //funcion que se ejecutaria en el caso que me conteto el servidor
      $('#success').text('El amigo fue borrado exitosamente')
     }
  })                             
})
