var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["mobileNo"] = document.getElementById("mobileNo").value;
    formData["emailId"] = document.getElementById("emailId").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.mobileNo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.emailId;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this), change()">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("mobileNo").value = "";
    document.getElementById("emailId").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("mobileNo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("emailId").value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.mobileNo;
    selectedRow.cells[2].innerHTML = formData.emailId;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;

    if (mobileNo.value.length != 10){
        isValid = false;
    } else {
        isValid = true;

    }
    return isValid;
}

function change() {
    document.getElementById("mybutton").value = "UPDATE";
}

function change2() {
    document.getElementById("mybutton").value = "ADD";
}

var $ConNoRegEx = /^([0-9]{10})$/;
var $FNameLNameRegEx = /^([a-zA-Z]{2,20})$/;
var $EmailIdRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,8}\b$/i;
$(document).ready(function () {

    $("#Name").blur(function () {
        $("#TxtNameValidation").empty();
        if ($(this).val() == "" || $(this).val() == null) {
            $("#TxtNameValidation").html("(*) Firstname required..!!");
        }
        else {
            if (!$(this).val().match($FNameLNameRegEx)) {
                $("#TxtNameValidation").html("(*) Invalid firstname..!!");
            }
        }
    });

    $("#Name").keypress(function (e) {
        var flag = false;
        $("#TxtNameValidation").empty();
        ((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122))
            ? flag = true
            : (flag = false, $("#TxtNameValidation").html("Invalid keypress..!!"))
        return flag;
    });

    $("#mobileNo").blur(function () {
        $("#TxtContactNoValidation").empty();
        if ($(this).val() == "" || $(this).val() == null) {
            $("#TxtContactNoValidation").html("(*) Contact no. required..!!");
        }
        else {
            if (!$(this).val().match($ConNoRegEx)) {
                $("#TxtContactNoValidation").html("(*) Invalid contact no..!!");
            }
        }
    });

    $("#mobileNo").keypress(function (e) {
        var flag = false;
        $("#TxtContactNoValidation").empty();
        (e.which >= 48 && e.which <= 57)
            ? flag = true
            : (flag = false, $("#TxtContactNoValidation").html("Invalid keypress..!!"))
        return flag;
    });

    $("#emailId").blur(function () {
        $("#TxtEmailIdValidation").empty();
        if ($(this).val() == "" || $(this).val() == null) {
            $("#TxtEmailIdValidation").html("(*) Email id required..!!");
        }
        else {
            if (!$(this).val().match($EmailIdRegEx)) {
                $("#TxtEmailIdValidation").html("(*) Invalid email id..!!");
            }
        }
    });
});

$("#mybutton").click(function () {
    $("#TxtNameValidation").empty();
    if ($("#Name").val() == "" || $("#Name").val() == null) {
        $("#TxtNameValidation").html("(*) Firstname required..!!");
        TxtNameFlag = false;
    }
    else {
        if (!$("#Name").val().match($FNameLNameRegEx)) {
            $("#TxtNameValidation").html("(*) Invalid firstname..!!");
            TxtNameFlag = false;
        }
        else {
            TxtNameFlag = true;
        }
    }

    $("#TxtContactNoValidation").empty();
    if ($("#mobileNo").val() == "" || $("#mobileNo").val() == null) {
        $("#TxtContactNoValidation").html("(*) Contact no. required..!!");
        TxtContactNoFlag = false;
    }
    else {
        if (!$("#mobileNo").val().match($ConNoRegEx)) {
            $("#TxtContactNoValidation").html("(*) Invalid contact no..!!");
            TxtContactNoFlag = false;
        }
        else {
            TxtContactNoFlag = true;
        }
    }

    $("#TxtEmailIdValidation").empty();
    if ($("#emailId").val() == "" || $("#emailId").val() == null) {
        $("#TxtEmailIdValidation").html("(*) Email id required..!!");
        TxtEmailIdFlag = false;
    }
    else {
        if (!$("#emailId").val().match($EmailIdRegEx)) {
            $("#TxtEmailIdValidation").html("(*) Invalid email id..!!");
            TxtEmailIdFlag = false;
        }
        else {
            TxtEmailIdFlag = true;
        }
    }
});