$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btnCancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault()

        const url = $('#urlImg').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${url}"/>`).appendTo(novoItem)
        $(`<div class="overlayImg">
            <a href="${url}" target="_blank" title="Ver imagem em tamanho real"> Ver imagem em tamanho real </a>
            </div>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)

        $('#urlImg').val('')
    })
})