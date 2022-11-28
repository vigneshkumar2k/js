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
    formData["fullName"] = document.getElementById("fullName").value;
    formData["Age"] = document.getElementById("Age").value;
    formData["Height"] = document.getElementById("Height").value;
    formData["Weight"] = document.getElementById("Weight").value;
    // console.log(formData); 
    return formData;
    
}

function insertNewRecord(data) {

    var height=document.getElementById("Height").value;
    var weight=document.getElementById("Weight").value;
    var bmi=weight/(height*height)*10000;
    console.log(bmi);
    // var bmi= formData["Weight"] / formData["Height"] / formData["Height"] * 10000;


    var table = document.getElementById("UserList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Age;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Height;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Weight;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML= bmi;
    cell5 = newRow.insertCell(5); 
    cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("Height").value = "";
    document.getElementById("Weight").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Age").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Height").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Weight").value = selectedRow.cells[3].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.Age;
    selectedRow.cells[2].innerHTML = formData.Height;
    selectedRow.cells[3].innerHTML = formData.Weight;
    var height=document.getElementById("Height").value;
    var weight=document.getElementById("Weight").value;
    var bmi=weight/(height*height)*10000;
    selectedRow.cells[4].innerHTML = bmi;
}

function onDelete(td) {
        row = td.parentElement.parentElement;
        document.getElementById("UserList").deleteRow(row.rowIndex);
        resetForm();
        
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
    
}



    
    

