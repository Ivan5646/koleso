$(document).ready(function(){
    /*  OPEN FORM */
     $('#buyBtnRUR').on('click', function() {
         $('#paymentMethod').fadeOut('100');
         $('#paymentFormRUR').fadeIn('100');
     });
     $('#buyBtnNTZ').on('click', function() {
         $('#paymentMethod').fadeOut('100');
         $('#paymentFormNTZ').fadeIn('100');
     });
 
     /* OPEN METHOD */
     $('#paymentMethodLink').on('click', function() {        
         $('#paymentMethod').fadeIn('100');
         $('#paymentFormRUR').fadeOut('100');
     });
     $('#paymentMethodLink2').on('click', function() {        
         $('#paymentMethod').fadeIn('100');
         $('#paymentFormNTZ').fadeOut('100');
     });
 

    /*  OPEN FORM2 */
    $('#buyBtnRUR2').on('click', function() {
        $('#payment2Method').fadeOut('100');
        $('#payment2FormRUR').fadeIn('100');
    });
    $('#buyBtnNTZ2').on('click', function() {
        $('#payment2Method').fadeOut('100');
        $('#payment2FormNTZ').fadeIn('100');
    });

    /* OPEN METHOD2 */
    $('#payment2MethodLink').on('click', function() {        
        $('#payment2Method').fadeIn('100');
        $('#payment2FormRUR').fadeOut('100');
    });
    $('#payment2MethodLink2').on('click', function() {        
        $('#payment2Method').fadeIn('100');
        $('#payment2FormNTZ').fadeOut('100');
    });


    /*  OPEN FORM3 */
    $('#buyBtnRUR3').on('click', function() {
        $('#payment3Method').fadeOut('100');
        $('#payment3FormRUR').fadeIn('100');
    });
    $('#buyBtnNTZ3').on('click', function() {
        $('#payment3Method').fadeOut('100');
        $('#payment3FormNTZ').fadeIn('100');
    });

    /* OPEN METHOD3 */
    $('#payment3MethodLink').on('click', function() {        
        $('#payment3Method').fadeIn('100');
        $('#payment3FormRUR').fadeOut('100');
    });
    $('#payment3MethodLink2').on('click', function() {        
        $('#payment3Method').fadeIn('100');
        $('#payment3FormNTZ').fadeOut('100');
    });


    /*  OPEN FORM4 */
    $('#buyBtnRUR4').on('click', function() {
        $('#payment4Method').fadeOut('100');
        $('#payment4FormRUR').fadeIn('100');
    });
    $('#buyBtnNTZ4').on('click', function() {
        $('#payment4Method').fadeOut('100');
        $('#payment4FormNTZ').fadeIn('100');
    });

    /* OPEN METHOD4 */
    $('#payment4MethodLink').on('click', function() {        
        $('#payment4Method').fadeIn('100');
        $('#payment4FormRUR').fadeOut('100');
    });
    $('#payment4MethodLink2').on('click', function() {        
        $('#payment4Method').fadeIn('100');
        $('#payment4FormNTZ').fadeOut('100');
    });


     /* FOOTER */
     $("#year").html(new Date().getFullYear());
 })