function reply_click(clicked_id) {
    // Exibir mensagem: cadastro a pessoa de:
    // Nome:
    // CPF: 
    // Data de nascimento: 
    // Cidade: 

    var form = document.getElementById('formulario');
    var name = document.getElementById('name');
    var date = document.getElementById('bornDate');
    var city = document.getElementById('city');
    form.addEventListener('submit', function(e) {
        var nameValue = name.value;
        var dateValue = date.value;
        var cityValue = city.value;
        alert(nameValue + dateValue + cityValue);
        e.preventDefault();
    });


}