/* LOADING HTML INTO A PAGE WITH JQUERY */
// LOADING CONTENT
$('.tab-item a').on('click', function(e) { // User clicks nav link
    e.preventDefault(); // Stop loading new link
    var url = this.href; // Get value of href

    $('.tab-item a.main-current').removeClass('main-current'); // Clear current indicator
    $(this).addClass('main-current'); // New current indicator

    $('#main-contented').remove(); // Remove old content
    $('#main-content').load(url + ' #main-content ').hide().fadeIn(2000); // New content
});