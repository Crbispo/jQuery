$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();
        
        const taskText = $('#task-input').val();
        $('#task-input').val('');
        
        $('#task-list').append(`<li>${taskText}</li>`);
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    $('#delete').click(function() {
        $('#task-list').empty();
    })
});