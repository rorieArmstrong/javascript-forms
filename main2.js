$(document).ready(function() {
    $('#card').hide();
    $( "form" ).submit(function( event ) { 
        event.preventDefault() 
        $( "#writing" ).hide('slow');  
        $( "#card" ).show();
        var grt = $("#greet").val();
        var msg = $("#msg").val();
        console.log(msg)
        $( "greet" ).html(grt);
        $( "mess" ).html(msg);
    }); 
});