let  fname=$('#fname'),
    mailMe=$('#mailMe'),
    pnumb=$('#pnumb'),
    pword = $('#pword'),
    updateContainerForm = $('#updateContainerForm'),
    finisher=$('#finisher');
let  userIndex,
    user = [];
let prouctIpAdd = "http://159.65.21.42:9000";


updateContainerForm.hide()
GetUserData();
finisher.on('click', function () {
    let dataobj = {
        "name": fname.val(),
        "phone": pnumb.val(),
        "email": mailMe.val(),
        "password": pword.val()
    };
    console.log(dataobj);

    if (userIndex == null) {
        $.ajax({
            type: 'POST',
            url: `${prouctIpAdd}/register`,
            data: dataobj,
            success: function (response) {
                console.log(response)
                if(response.error){
                    alert(`Registration failed, ${response.error}`);
                } else {
                    alert(`Registration successful, welcome ${response.name}`);
                    window.location.href = 'all-users.html'
                }
            },
            error: function (err) {
                console.log(err);
            },
        })
    } else {
        
        let updateId = user[userIndex]['_id'];
        $.ajax({
            type: 'PUT',
            url: `${prouctIpAdd}/user/${updateId}`,
            data: dataobj,
            success: function (response) {
                if (response.error) {
                    alert(`Registration failed ${response.error}`);
                } else {
                    alert(`Update Successfull, for ${response.name}`);
                    GetUserData();
                }
            },
            error: function (err) {
                alert(err.statusText);
                console.log(err);
            },
        });
        userIndex = null;
        finisher.html('Add Data')
    }

    clearform();
    GetUserData();

});

// adding function to my edit and delete btn

$('#tbody').on('click', '.editbtn', function () {
    updateContainerForm.show()
    userIndex = $(this).attr('indexData');

    fname.val(user[userIndex]['name']);
    pword.val(user[userIndex]['password']);
    mailMe.val(user[userIndex]['email']);
    pnumb.val(user[userIndex]['phone']);
    finisher.html('Update Data');

});

$('#tbody').on('click', '.deletebtn', function () {
    let wantToDelete = confirm('Would you like to delete this record?');
    if (wantToDelete) {
        let deleteIndex = $(this).attr('indexData');

        let deleteId = user[deleteIndex]['_id'];
    

        $.ajax({
            type: 'DELETE',
            url: `${prouctIpAdd}/user/${deleteId}`,
            success: function (response) {
                console.log(response);
                alert('User Deleted');
                GetUserData();
            },
            error: function (err) {
                console.log(err.statusText);
            },
        });
    }

})




function GetUserData() {
    $.ajax({
        type: 'GET',
        url: `${prouctIpAdd}/users`,
        success: function (response) {
            user = response;
            let joe = '';

            for (let index = 0; index < user.length; index++) {
                joe+=`<tr>
                            <td>${index+1}</td>
                            <td>${user[index]["name"]}</td>
                            <td>${user[index]["email"]}</td>
                            <td>${user[index]["phone"]}</td>
                            <td>${user[index]["password"]}</td>
                            <td><a href="#" class="editbtn" indexData="${index}">Edit</a> | <a href="#" class="deletebtn" indexData="${index}">Delete</a></td>
                        </tr>`
            }
            $('#tbody').html(joe)
        },
        error: function (err) {
            console.log(err);
        },
        
   }) 
}

function clearform() {
    updateContainerForm.hide()
    fname.val('');
    pnumb.val('');
    pword.val('');
    mailMe.val('');
}