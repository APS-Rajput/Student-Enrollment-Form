var row = 1;

function displayStudents() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let web = document.getElementById('website').value;
    let image = document.getElementById('image');
    let gender1 = document.getElementById('male');
    let gender2 = document.getElementById('female');

    if (!name || !email || !web || !image) {
        alert("Please fill all the details");
    }

    let display = document.getElementById('displayTable');

    let newRow = display.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    if (gender1.checked == true) {
        var genderVal = gender1.value;
    }
    else if (gender2.checked == true) {
        var genderVal = gender2.value;
    }
    else {
        alert("Please fill all the details");
    }

    var skillVal = [];

    var checkBox = document.getElementsByName('skills');

    for (var i = 0; i < checkBox.length; i++) {
        if (checkBox[i].checked == true) {
            skillVal.push(checkBox[i].value);
        }
    }

    let profile = document.getElementById('image').value;

    cell1.innerHTML = "<img src = '" + profile + "' width= '140px' height ='120px' >"
    cell2.innerHTML = name + "<br>" + genderVal + "<br>" + email + "<br>" + web + "<br>" + skillVal;

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('website').value = '';
    document.getElementById('image').value = '';
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
    document.getElementById('html').checked = false;
    document.getElementById('css').checked = false;
    document.getElementById('js').checked = false;

}