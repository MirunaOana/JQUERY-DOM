function fieldsCheck() {

    let firstName = [document.getElementById('first-name'), document.getElementById('first-name').value];

    let lastName = [document.getElementById('last-name'), document.getElementById('last-name').value];

    const gender = document.getElementById('gender-span');

    let textArea = document.getElementById('message');

    if (/^[a-zA-Z]+$/.test(firstName[1])) {

        if (firstName[0].classList.contains('error-border')) {

            firstName[0].classList.remove('error-border');
        }

        if (/^[a-zA-Z]+$/.test(lastName[1])) {
    
            if (lastName[0].classList.contains('error-border')) {

                lastName[0].classList.remove('error-border');
            }

            if (document.getElementById('genderF').checked || document.getElementById('genderM').checked) {
            
                if (gender.classList.contains('error-text')) { 
        
                    gender.classList.remove('error-text');
        
                    document.getElementById('label-m').classList.remove('error-text');
        
                    document.getElementById('label-f').classList.remove('error-text');
                }

                if (textArea.value.length) {
            
                    if (textArea.classList.contains('error-border')) {
            
                        textArea.classList.remove('error-border');
                    }

                    document.getElementById('successMessage').classList.add('success');

                    document.getElementById('successMessage').innerHTML = '<span id="checkMark">&#10004</span> Thank you for contacting us, ' + firstName[1] + '<input type="button" value="&#10006" id="btnSuccessMsg">';

                    console.log('First name = ' + firstName[1]);

                    console.log('Lastt name = ' + lastName[1]);

                    if (document.getElementById('genderF').checked) {

                        
                        console.log('Gender = female');

                    } else {

                        if (document.getElementById('genderM').checked) {

                            console.log('Gender = male');
                        }
                    }

                    console.log('Text Area = ' + textArea.value);

                    const xBtn = document.getElementById('btnSuccessMsg');

                    xBtn.addEventListener('click', removeSuccess);

                } else {

                    textArea.classList.add('error-border');

                    document.getElementById('successMessage').classList.remove('success');

                    document.getElementById('successMessage').innerHTML = '';
                }

            } else {

                gender.classList.add('error-text');

                document.getElementById('label-m').classList.add('error-text');

                document.getElementById('label-f').classList.add('error-text');

                document.getElementById('successMessage').classList.remove('success');

                document.getElementById('successMessage').innerHTML = '';

                if (textArea.value.length) {
            
                    if (textArea.classList.contains('error-border')) {
            
                        textArea.classList.remove('error-border');
                    }

                } else {

                    textArea.classList.add('error-border');

                    document.getElementById('successMessage').classList.remove('success');

                    document.getElementById('successMessage').innerHTML = '';
                }
            }

        } else {

            lastName[0].classList.add('error-border');

            document.getElementById('successMessage').classList.remove('success');

            document.getElementById('successMessage').innerHTML = '';

            if (document.getElementById('genderF').checked || document.getElementById('genderM').checked) {
            
                if (gender.classList.contains('error-text')) { 
        
                    gender.classList.remove('error-text');
        
                    document.getElementById('label-m').classList.remove('error-text');
        
                    document.getElementById('label-f').classList.remove('error-text');
                }

                if (textArea.value.length) {
            
                    if (textArea.classList.contains('error-border')) {
            
                        textArea.classList.remove('error-border');
                    }  
            
                } else {

                    textArea.classList.add('error-border');

                    document.getElementById('successMessage').classList.remove('success');

                    document.getElementById('successMessage').innerHTML = '';
                }

            } else { 

                gender.classList.add('error-text');

                document.getElementById('label-m').classList.add('error-text');

                document.getElementById('label-f').classList.add('error-text');

                document.getElementById('successMessage').classList.remove('success');

                document.getElementById('successMessage').innerHTML = '';

                if (textArea.value.length) {
            
                    if (textArea.classList.contains('error-border')) {
            
                        textArea.classList.remove('error-border');
                    }  
            
                } else {

                    textArea.classList.add('error-border');

                    document.getElementById('successMessage').classList.remove('success');

                    document.getElementById('successMessage').innerHTML = '';
                }
            }
        }

    } else {

        firstName[0].classList.add('error-border');

        document.getElementById('successMessage').classList.remove('success');

        document.getElementById('successMessage').innerHTML = '';

        if (/^[a-zA-Z]+$/.test(lastName[1])) {
    
            if (lastName[0].classList.contains('error-border')) {

                lastName[0].classList.remove('error-border');
            }

            if (document.getElementById('genderF').checked || document.getElementById('genderM').checked) {
            
                if (gender.classList.contains('error-text')) { 
        
                    gender.classList.remove('error-text');
        
                    document.getElementById('label-m').classList.remove('error-text');
        
                    document.getElementById('label-f').classList.remove('error-text');
                }

                if (textArea.value.length) {
            
                    if (textArea.classList.contains('error-border')) {
            
                        textArea.classList.remove('error-border');
                    }

                } else {

                    textArea.classList.add('error-border');

                    document.getElementById('successMessage').classList.remove('success');

                    document.getElementById('successMessage').innerHTML = '';
                }

            } else {

                if (document.getElementById('genderF').checked || document.getElementById('genderM').checked) {
            
                    if (gender.classList.contains('error-text')) { 
            
                        gender.classList.remove('error-text');
            
                        document.getElementById('label-m').classList.remove('error-text');
            
                        document.getElementById('label-f').classList.remove('error-text');
                    }
    
                    if (textArea.value.length) {
                
                        if (textArea.classList.contains('error-border')) {
                
                            textArea.classList.remove('error-border');
                        }

                    } else {

                        textArea.classList.add('error-border');

                        document.getElementById('successMessage').classList.remove('success');

                        document.getElementById('successMessage').innerHTML = '';
                    }

                } else {

                    gender.classList.add('error-text');

                    document.getElementById('label-m').classList.add('error-text');

                    document.getElementById('label-f').classList.add('error-text');

                    document.getElementById('successMessage').classList.remove('success');

                    document.getElementById('successMessage').innerHTML = '';

                    if (textArea.value.length) {
                
                        if (textArea.classList.contains('error-border')) {
                
                            textArea.classList.remove('error-border');
                        }

                    } else {

                        textArea.classList.add('error-border');

                        document.getElementById('successMessage').classList.remove('success');

                        document.getElementById('successMessage').innerHTML = '';
                    }
                }
            }

        } else {

            lastName[0].classList.add('error-border');

            document.getElementById('successMessage').classList.remove('success');

            document.getElementById('successMessage').innerHTML = '';

            if (document.getElementById('genderF').checked || document.getElementById('genderM').checked) {
            
                if (gender.classList.contains('error-text')) { 
        
                    gender.classList.remove('error-text');
        
                    document.getElementById('label-m').classList.remove('error-text');
        
                    document.getElementById('label-f').classList.remove('error-text');
                }

                if (textArea.value.length) {
            
                    if (textArea.classList.contains('error-border')) {
            
                        textArea.classList.remove('error-border');
                    }  
            
                } else {

                    textArea.classList.add('error-border');

                    document.getElementById('successMessage').classList.remove('success');

                    document.getElementById('successMessage').innerHTML = '';
                }

            } else { 

                gender.classList.add('error-text');

                document.getElementById('label-m').classList.add('error-text');

                document.getElementById('label-f').classList.add('error-text');

                document.getElementById('successMessage').classList.remove('success');

                document.getElementById('successMessage').innerHTML = '';

                if (textArea.value.length) {
            
                    if (textArea.classList.contains('error-border')) {
            
                        textArea.classList.remove('error-border');
                    }  
            
                } else {

                    textArea.classList.add('error-border');

                    document.getElementById('successMessage').classList.remove('success');

                    document.getElementById('successMessage').innerHTML = '';
                }
            }
        }
    }
}

function removeSuccess() {
    
    document.getElementById('successMessage').classList.remove('success');

    document.getElementById('successMessage').innerHTML = '';
}