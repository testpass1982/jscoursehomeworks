console.log('hello world');

$( document ).ready(function() {
    console.log( "jQ ready!" );

    
    $('#task1_button').click(function(){
        let celsius = $("#celsius_input").val();
        let fahrengeit = (9/5)*celsius+32;
        console.log('converted! '+fahrengeit);
        let result_of_conversion = 'In Fahrengeit it will be '+fahrengeit+' °F';
        $('#task1_result').html(result_of_conversion);
    });


    $('#task2_button').click(function(){
        let name = $("#task2_input").val();
        let admin = '';
        admin = name;
        console.log(admin);
        $("#task2_result").html('Name of admin: '+admin);
    });
    
    $('#task3_button').click(function(){
        let number_input = parseInt($('#task3_number_input').val());
        let string_input = $('#task3_string_input').val();
        let message = '';
        // console.log(typeof(number_input));
        // console.log(typeof(string_input));
        if (isNaN(number_input) || typeof(string_input)!='string') {
            message = 'You passed wrong types to the fields... please input \
            a number to the 1st field, and a string to 2nd field';
        } else {
          message = 'The result is '+number_input+string_input;  
        };
        $('#task3_result').html(message);
    })


});