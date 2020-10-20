//Form Pop Up
var BG_MODAL = document.querySelectorAll('.bg-modal');
var CLOSE_SELECTED = document.querySelectorAll('.close-selected');
var BG_MODAL_SELECTED = document.querySelectorAll('.bg-modal-selected');

for (i = 0; i < CLOSE_SELECTED.length; i++) {
    CLOSE_SELECTED[i].addEventListener('click', function() {
        BG_MODAL.forEach(function(BG_MODAL) {
            BG_MODAL.style.display = 'none';
        });
    });
};

for (i = 0; i < BG_MODAL_SELECTED.length; i++) {
    BG_MODAL_SELECTED[i].addEventListener('click', function() {
        BG_MODAL.forEach(function(BG_MODAL) {
            BG_MODAL.style.display = 'flex';
        });
    });
};

//Form Content

var x = document.getElementById('contact_form');
var createForm = document.createElement('form'); // Create New Element Form
createForm.setAttribute("action", "https://formspree.io/jyyam1999@gmail.com"); // Setting Action Attribute on Form
createForm.setAttribute("method", "post"); // Setting Method Attribute on Form
createForm.setAttribute("enctype", "text/plain");
x.appendChild(createForm);

var heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = "Contact Form ";
createForm.appendChild(heading);

var line = document.createElement('hr'); // Giving Horizontal Row After Heading
createForm.appendChild(line);

var lineBreak = document.createElement('br');
createForm.appendChild(lineBreak);

// var nameLabel = document.createElement('label'); // Create Label for Name Field
// nameLabel.innerHTML = "Your Name : "; // Set Field Labels
// createForm.appendChild(nameLabel);

var nameElement = document.createElement('input'); // Create Input Field for Name
nameElement.setAttribute("id", "name");
nameElement.setAttribute("type", "text");
nameElement.setAttribute("placeholder", "Name");
nameElement.setAttribute("name", "name");
createForm.appendChild(nameElement);

var lineBreak = document.createElement('br');
createForm.appendChild(lineBreak);

// var emailLabel = document.createElement('label'); // Create Label for E-mail Field
// emailLabel.innerHTML = "Your Email : ";
// createForm.appendChild(emailLabel);

var emailElement = document.createElement('input'); // Create Input Field for E-mail
emailElement.setAttribute("id", "email");
emailElement.setAttribute("type", "text");
emailElement.setAttribute("placeholder", "Email Address");
emailElement.setAttribute("name", "email");
createForm.appendChild(emailElement);

var emailBreak = document.createElement('br');
createForm.appendChild(emailBreak);

// var phoneLabel = document.createElement('label'); //Create Label for Phone Field
// phoneLabel.innerHTML = "Your Phone Number : ";
// createForm.appendChild(phoneLabel);

var phoneElement = document.createElement('input');
phoneElement.setAttribute("id", "phone");
phoneElement.setAttribute("type", "text");
phoneElement.setAttribute("placeholder", "Phone");
phoneElement.setAttribute("name", "phone");
createForm.appendChild(phoneElement);

var phoneBreak = document.createElement('br');
createForm.appendChild(phoneBreak);

var checkboxLabel = document.createElement('h3'); //Create Label for Checkbox Field
checkboxLabel.innerHTML = "Service(s) you would like to discuss: "
createForm.appendChild(checkboxLabel);

var checkboxElementLOTL = document.createElement('input'); //Lay of the Land Checkbox
checkboxElementLOTL.className = "checkboxElementLOTL  checks";
checkboxElementLOTL.setAttribute("id", "checkboxElementLOTL");
checkboxElementLOTL.setAttribute("type", "checkbox");
checkboxElementLOTL.setAttribute("name", "typeOfService");
checkboxElementLOTL.setAttribute("value", "Lay of the Land");
createForm.appendChild(checkboxElementLOTL);

var checkboxLabelLOTL = document.createElement('label');
checkboxLabelLOTL.className = "checkboxLabelLOTL";
checkboxLabelLOTL.innerHTML = "Lay of the Land";
createForm.appendChild(checkboxLabelLOTL);

var checkboxElementAndLabelLOTL = document.querySelectorAll('.checkboxElementLOTL, .checkboxLabelLOTL');

// Array.prototype.forEach.call(document.querySelectorAll('.checkboxElementLOTL, .checkboxLabelLOTL'), function(c) {
//     wrapper.appendChild(c);
// })
// createForm.appendChild(wrapper);

var checkboxElementDD = document.createElement('input'); //Due Diligence Checkbox
checkboxElementDD.className = "checkboxElementDD checks";
checkboxElementDD.setAttribute("id", "checkboxElementDD");
checkboxElementDD.setAttribute("type", "checkbox");
checkboxElementDD.setAttribute("name", "typeOfService");
checkboxElementDD.setAttribute("value", "Due Diligence");
createForm.appendChild(checkboxElementDD);

var checkboxLabelDD = document.createElement('label');
checkboxLabelDD.className = "checkboxLabelDD";
checkboxLabelDD.innerHTML = "Due Diligence";
createForm.appendChild(checkboxLabelDD);

var checkboxElementAndLabelDD = document.querySelectorAll('.checkboxElementDD, .checkboxLabelDD');

// Array.prototype.forEach.call(document.querySelectorAll('.checkboxElementDD, .checkboxLabelDD'), function(c) {
//     wrapper.appendChild(c);
// })
// createForm.appendChild(wrapper);

var checkboxElementDR = document.createElement('input'); //Dispute Resolution Checkbox
checkboxElementDR.className = "checkboxElementDR checks";
checkboxElementDR.setAttribute("id", "checkboxElementDR");
checkboxElementDR.setAttribute("type", "checkbox");
checkboxElementDR.setAttribute("name", "typeOfService");
checkboxElementDR.setAttribute("value", "Dispute Resolution");
createForm.appendChild(checkboxElementDR);

var checkboxLabelDR = document.createElement('label');
checkboxLabelDR.className = "checkboxLabelDR";
checkboxLabelDR.innerHTML = "Dispute Resolution";
createForm.appendChild(checkboxLabelDR);

var checkboxElementAndLabelDR = document.querySelectorAll('.checkboxElementDR, .checkboxLabelDR');

var checkboxBreak = document.createElement('br');
createForm.appendChild(checkboxBreak);

// var messageLabel = document.createElement('label'); // Append Textarea
// messageLabel.innerHTML = "Your Message : ";
// createForm.appendChild(messageLabel);

var textareaElement = document.createElement('textarea');
textareaElement.setAttribute("id", "message");
textareaElement.setAttribute("placeholder", "Message");
textareaElement.setAttribute("name", "message");
createForm.appendChild(textareaElement);

var messageBreak = document.createElement('br');
createForm.appendChild(messageBreak);

var submitElement = document.createElement('input'); // Append Submit Button
submitElement.setAttribute("id", "submit");
submitElement.setAttribute("onclick", "getDateAndValue();return false");
submitElement.setAttribute("type", "submit");
submitElement.setAttribute("name", "submit");
submitElement.setAttribute("value", "Submit");
createForm.appendChild(submitElement);

$(document).ready(function() {
    $(checkboxElementAndLabelLOTL).wrapAll('<div class="container-div"></div>');
    $(checkboxElementAndLabelDD).wrapAll('<div class="container-div"></div>');
    $(checkboxElementAndLabelDR).wrapAll('<div class="container-div"></div>');
    $('.container-div').wrapAll('<div class="checkbox-div"></div>');
});

//get and set the Date and Value of checkBox
var services = '';
var date = '';
var dateInNiceFormat = '';

function getDateAndValue() {

    services = Array.prototype.map.call(document.querySelectorAll("input[name=typeOfService]:checked"), function(each) {
         return each.value; 
    });

    date = new Date();
    dateInNiceFormat = date.toString();

    console.log(services);
    console.log(dateInNiceFormat);
}



//Form make JSON
let forms = [];


const addForm = (ev)=>{
    ev.preventDefault();
    let form = {
        date: dateInNiceFormat,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        // service: ["Lay of the land: " + document.getElementById('checkboxElementLOTL').checked, 
        //     "Due Diligence: " + document.getElementById('checkboxElementDD').checked,
        //     "Dispute Resolution: " + document.getElementById('checkboxElementDR').checked],
        services: services,
        message: document.getElementById('message').value
    }
    forms.push(form);
    document.querySelector('form').reset();

    console.warn('added', {forms} );

    localStorage.setItem('FormSubmission', JSON.stringify(forms) );
};

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('submit').addEventListener('click', addForm);
});

