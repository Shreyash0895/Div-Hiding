let button = document.getElementsByClassName('button');
let div = document.getElementsByClassName('div');
console.log(button, div);
function toggle1() {
    // div[0].style.display="none";
    if (div[0].style.display == "none") {
        div[0].style.display = "block";
        displaytext(1, "visible");
    }
    else {
        div[0].style.display = "none";
        displaytext(1, "hidden");
    }
}
function toggle2() {
    // div[0].style.display="none";
    if (div[1].style.display == "none") {
        div[1].style.display = "block";
        displaytext(2, "visible");
    }
    else{
        div[1].style.display = "none";
        displaytext(2, "hidden");
    }

}
function toggle3() {
    // div[0].style.display="none";
    if (div[2].style.display == "none") {
        div[2].style.display = "block";
        displaytext(3, "visible");
    }
    else{
        div[2].style.display = "none";
        displaytext(3, "hidden");
    }
}
function displaytext(div_no, status) {
    let tr = document.createElement('tr');
    let tbody = document.querySelector('tbody');
    tbody.appendChild(tr);
    let td = document.createElement('td');
    tr.appendChild(td);
    let message = document.createTextNode("div " +div_no+" is "+ status);
    td.appendChild(message);

}

