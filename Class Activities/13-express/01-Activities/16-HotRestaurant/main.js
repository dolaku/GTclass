

let resList = [];
let waitList = [];


$('#res-form-submit').on('click', (e) => {
    e.preventDefault();
    
    let name = $('#input-name').val().trim();
    let phone = $('#input-phone').val().trim();
    let email = $('#input-email').val().trim();
    let id = $('#input-id').val().trim();
    
    
    // Takes up to 5 tables
    // Waitlist after 5 are reserved
    if (resList.length < 5) {
        resList.push({
            name,
            phone,
            email,
            id
        });
    } else {
        waitList.push({
            name,
            phone,
            email,
            id
        });
    }

    
    $('#input-name').val('');
    $('#input-phone').val('');
    $('#input-email').val('');
    $('#input-id').val('');
    
});
