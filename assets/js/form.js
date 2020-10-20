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
createForm.setAttribute("action", "//formspree.io/jyyam1999@gmail.com"); // Setting Action Attribute on Form
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
phoneElement.setAttribute("type", "text");
phoneElement.setAttribute("placeholder", "Phone");
phoneElement.setAttribute("name", "phone");
createForm.appendChild(phoneElement);

var phoneBreak = document.createElement('br');
createForm.appendChild(phoneBreak);

var checkboxLabel = document.createElement('h3'); //Create Label for Checkbox Field
checkboxLabel.innerHTML = "Category(s) of services you wish to know  : "
createForm.appendChild(checkboxLabel);

var checkboxElementLOTL = document.createElement('input'); //Lay of the Land Checkbox
checkboxElementLOTL.className = "checkboxElementLOTL";
checkboxElementLOTL.setAttribute("type", "checkbox");
checkboxElementLOTL.setAttribute("name", "lay-of-the-land");
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
checkboxElementDD.className = "checkboxElementDD";
checkboxElementDD.setAttribute("type", "checkbox");
checkboxElementDD.setAttribute("name", "due-diligence");
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
checkboxElementDR.className = "checkboxElementDR";
checkboxElementDR.setAttribute("type", "checkbox");
checkboxElementDR.setAttribute("name", "dispute-resolution");
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

var texareaElement = document.createElement('textarea');
texareaElement.setAttribute("placeholder", "Message");
texareaElement.setAttribute("name", "message");
createForm.appendChild(texareaElement);

var messageBreak = document.createElement('br');
createForm.appendChild(messageBreak);

var submitElement = document.createElement('input'); // Append Submit Button
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