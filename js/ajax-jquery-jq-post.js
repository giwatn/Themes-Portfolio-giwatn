$('#contact').on('submit', function(e) { // When form is submitted
    e.preventDefault(); // Prevent it being sent
    var details = $('#contact').serialize(); // Serialize form data
    $.post('https://gmail.com', details, function(data) { // Use $.post() to send it
        $('#contact').html(data); // Where to display result
    });
});