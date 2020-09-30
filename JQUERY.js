$(function() {

    trigger();
});

function trigger() {
    $('#btn').on('click', inputCheck);
}

function inputCheck() {

    let firstName = [$('#first-name'), $('#first-name').val()];

    let lastName = [$('#last-name'), $('#last-name').val()];

    let arrValid = [];

    const gender = $('#gender-span');

    let textArea = $('#message');

    let i = 0;

    if (/^[a-zA-Z]+$/.test(firstName[1])) {

        if (firstName[0].hasClass('error-border')) {

            firstName[0].removeClass('error-border');
        }

        if (/^[a-zA-Z]+$/.test(lastName[1])) {
    
            if (lastName[0].hasClass('error-border')) {

                lastName[0].removeClass('error-border');
            }

            if ($('#genderF').prop('checked') || $('#genderM').prop('checked')) {
            
                if (gender.hasClass('error-text')) { 
        
                    gender.removeClass('error-text');
        
                   $('#label-m').removeClass('error-text');
        
                    $('#label-f').removeClass('error-text');
                }

                if (textArea.val().length) {
            
                    if (textArea.hasClass('error-border')) {
            
                        textArea.removeClass('error-border');
                    }

                    $('#successMessage').addClass('success');

                    $('#successMessage').html('<span id="checkMark">&#10004</span> Thank you for contacting us, ' + firstName[1] + '<input type="button" value="&#10006" id="btnSuccessMsg">');

                    console.log('First name = ' + firstName[1]);

                    console.log('Lastt name = ' + lastName[1]);

                    if ($('#genderF').prop('checked')) {

                        
                        console.log('Gender = female');

                    } else {

                        if ($('#genderM').prop('checked')) {

                            console.log('Gender = male');
                        }
                    }

                    console.log('Text Area = ' + textArea.val());

                    const xBtn = $('#btnSuccessMsg');

                    xBtn.on('click', removeSuccess);

                } else {

                    textArea.addClass('error-border');

                    $('#successMessage').removeClass('success');

                    $('#successMessage').html('');
                }

            } else {

                gender.addClass('error-text');

               $('#label-m').addClass('error-text');

                $('#label-f').addClass('error-text');

                $('#successMessage').removeClass('success');

                $('#successMessage').html('');

                if (textArea.val().length) {
            
                    if (textArea.hasClass('error-border')) {
            
                        textArea.removeClass('error-border');
                    }

                } else {

                    textArea.addClass('error-border');

                    $('#successMessage').removeClass('success');

                    $('#successMessage').html('');
                }
            }

        } else {

            lastName[0].addClass('error-border');

            $('#successMessage').removeClass('success');

            $('#successMessage').html('');

            if ($('#genderF').prop('checked') || $('#genderM').prop('checked')) {
            
                if (gender.hasClass('error-text')) { 
        
                    gender.removeClass('error-text');
        
                   $('#label-m').removeClass('error-text');
        
                    $('#label-f').removeClass('error-text');
                }

                if (textArea.val().length) {
            
                    if (textArea.hasClass('error-border')) {
            
                        textArea.removeClass('error-border');
                    }  
            
                } else {

                    textArea.addClass('error-border');

                    $('#successMessage').removeClass('success');

                    $('#successMessage').html('');
                }

            } else { 

                gender.addClass('error-text');

               $('#label-m').addClass('error-text');

                $('#label-f').addClass('error-text');

                $('#successMessage').removeClass('success');

                $('#successMessage').html('');

                if (textArea.val().length) {
            
                    if (textArea.hasClass('error-border')) {
            
                        textArea.removeClass('error-border');
                    }  
            
                } else {

                    textArea.addClass('error-border');

                    $('#successMessage').removeClass('success');

                    $('#successMessage').html('');
                }
            }
        }

    } else {

        firstName[0].addClass('error-border');

        $('#successMessage').removeClass('success');

        $('#successMessage').html('');

        if (/^[a-zA-Z]+$/.test(lastName[1])) {
    
            if (lastName[0].hasClass('error-border')) {

                lastName[0].removeClass('error-border');
            }

            if ($('#genderF').prop('checked') || $('#genderM').prop('checked')) {
            
                if (gender.hasClass('error-text')) { 
        
                    gender.removeClass('error-text');
        
                   $('#label-m').removeClass('error-text');
        
                    $('#label-f').removeClass('error-text');
                }

                if (textArea.val().length) {
            
                    if (textArea.hasClass('error-border')) {
            
                        textArea.removeClass('error-border');
                    }

                } else {

                    textArea.addClass('error-border');

                    $('#successMessage').removeClass('success');

                    $('#successMessage').html('');
                }

            } else {

                if ($('#genderF').prop('checked') || $('#genderM').prop('checked')) {
            
                    if (gender.hasClass('error-text')) { 
            
                        gender.removeClass('error-text');
            
                       $('#label-m').removeClass('error-text');
            
                        $('#label-f').removeClass('error-text');
                    }
    
                    if (textArea.val().length) {
                
                        if (textArea.hasClass('error-border')) {
                
                            textArea.removeClass('error-border');
                        }

                    } else {

                        textArea.addClass('error-border');

                        $('#successMessage').removeClass('success');

                        $('#successMessage').html('');
                    }

                } else {

                    gender.addClass('error-text');

                   $('#label-m').addClass('error-text');

                    $('#label-f').addClass('error-text');

                    $('#successMessage').removeClass('success');

                    $('#successMessage').html('');

                    if (textArea.val().length) {
                
                        if (textArea.hasClass('error-border')) {
                
                            textArea.removeClass('error-border');
                        }

                    } else {

                        textArea.addClass('error-border');

                        $('#successMessage').removeClass('success');

                        $('#successMessage').html('');
                    }
                }
            }

        } else {

            lastName[0].addClass('error-border');

            $('#successMessage').removeClass('success');

            $('#successMessage').html('');

            if ($('#genderF').prop('checked') || $('#genderM').prop('checked')) {
            
                if (gender.hasClass('error-text')) { 
        
                    gender.removeClass('error-text');
        
                   $('#label-m').removeClass('error-text');
        
                    $('#label-f').removeClass('error-text');
                }

                if (textArea.val().length) {
            
                    if (textArea.hasClass('error-border')) {
            
                        textArea.removeClass('error-border');
                    }  
            
                } else {

                    textArea.addClass('error-border');

                    $('#successMessage').removeClass('success');

                    $('#successMessage').html('');
                }

            } else { 

                gender.addClass('error-text');

               $('#label-m').addClass('error-text');

                $('#label-f').addClass('error-text');

                $('#successMessage').removeClass('success');

                $('#successMessage').html('');

                if (textArea.val().length) {
            
                    if (textArea.hasClass('error-border')) {
            
                        textArea.removeClass('error-border');
                    }  
            
                } else {

                    textArea.addClass('error-border');

                    $('#successMessage').removeClass('success');

                    $('#successMessage').html('');
                }
            }
        }
    }
}

function removeSuccess() {
    
    $('#successMessage').removeClass('success');

    $('#successMessage').html('');
}