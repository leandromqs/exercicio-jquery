$(document).ready(function() {
    $('form').on('submit', function(event){
        event.preventDefault();

        const tarefa = $('form input').val();
        const novaTarefa = $('<li></li>');

        $(`<p>${tarefa}</p>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('form input').val('');
    })

    $('ul').on('click', 'li', function(){
        $(this).find('p').css('text-decoration', 'line-through');
    });

})
