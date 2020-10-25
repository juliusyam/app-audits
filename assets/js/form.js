function validateInput(name, email, message) {
    var success = false;
    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
        // do error message

    } else if (name.length < 3) {
        // do error message

    } else if (message.length < 10) {
        // do error message

    } else {
        success = true;
    }

    return success;
}

function sendData(data) {
    // TODO: send data
    localStorage.setItem('FormSubmission', JSON.stringify(data));
}

function wrapCheckbox(checkbox, label) {
    const wrapper = document.createElement('div'); // Append Submit Button
    wrapper.className = "container-div";

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    return wrapper;
}

function createCheckbox(elementName, value) {
    const checkbox = document.createElement('input'); //Lay of the Land Checkbox
    let className = "checkboxElement" + elementName;
    checkbox.className = className;
    checkbox.setAttribute("id", className);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "typeOfService");
    checkbox.setAttribute("value", value);

    const label = document.createElement('label');
    label.className = "checkboxLabelLOTL";
    label.innerHTML = value;

    return wrapCheckbox(checkbox, label);
}

function prepareServices() {
    const checkboxDiv = document.createElement('div');
    checkboxDiv.className = "checkbox-div";

    for (var i = 0; i < arguments.length; i++) {
        var object = arguments[i]
        checkboxDiv.appendChild(createCheckbox(object.shortName, object.longName));
    }

    return checkboxDiv;
}


//Form Pop Up
const BG_MODAL = document.getElementById('contact_modal');
const CLOSE_SELECTED = document.getElementById('close');
const BG_MODAL_SELECTED = document.getElementsByClassName('bg-modal-selected');

CLOSE_SELECTED.addEventListener('click', function () {
    BG_MODAL.style.display = 'none';
});

for (var i = 0; i < BG_MODAL_SELECTED.length; i++) {
    BG_MODAL_SELECTED[i].addEventListener('click', function () {
        BG_MODAL.style.display = 'flex';
    });
}

//Form Content

const formHolder = document.getElementById('contact_form');

const createForm = document.createElement('form'); // Create New Element Form
createForm.className = "form";
createForm.setAttribute("method", "post"); // Setting Method Attribute on Form
createForm.setAttribute("enctype", "text/plain");
createForm.setAttribute("name", "submissionForm");

const heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = "Contact Form ";
createForm.appendChild(heading);

const line = document.createElement('hr'); // Giving Horizontal Row After Heading
createForm.appendChild(line);

const lineBreak = document.createElement('br');
createForm.appendChild(lineBreak);


const nameElement = document.createElement('input'); // Create Input Field for Name
nameElement.setAttribute("id", "name");
nameElement.setAttribute("type", "text");
nameElement.setAttribute("placeholder", "Name");
nameElement.setAttribute("name", "name");
createForm.appendChild(nameElement);

createForm.appendChild(lineBreak);

const emailElement = document.createElement('input'); // Create Input Field for E-mail
emailElement.setAttribute("id", "email");
emailElement.setAttribute("type", "text");
emailElement.setAttribute("placeholder", "Email Address");
emailElement.setAttribute("name", "email");
createForm.appendChild(emailElement);

createForm.appendChild(lineBreak);

const phoneElement = document.createElement('input');
phoneElement.setAttribute("id", "phone");
phoneElement.setAttribute("type", "text");
phoneElement.setAttribute("placeholder", "Phone");
phoneElement.setAttribute("name", "phone");
createForm.appendChild(phoneElement);

createForm.appendChild(lineBreak);

const checkboxLabel = document.createElement('h3'); //Create Label for Checkbox Field
checkboxLabel.innerHTML = "Service(s) you would like to discuss: "
createForm.appendChild(checkboxLabel);


createForm.appendChild(prepareServices(
    {shortName: "LOTL", longName: "Lay of the Land"},
    {shortName: "DD", longName: "Due Diligence"},
    {shortName: "DR", longName: "Dispute Resolution"},
));

createForm.appendChild(lineBreak);

const textareaElement = document.createElement('textarea');
textareaElement.setAttribute("id", "message");
textareaElement.setAttribute("placeholder", "Message");
textareaElement.setAttribute("name", "message");
createForm.appendChild(textareaElement);

createForm.appendChild(lineBreak);

const submitElement = document.createElement('input'); // Append Submit Button
submitElement.setAttribute("id", "submit");
submitElement.setAttribute("type", "submit");
submitElement.setAttribute("name", "submit");
submitElement.setAttribute("value", "Submit");
createForm.appendChild(submitElement);

submitElement.addEventListener('click', function (event) {
    event.preventDefault();

    const services = Array.prototype.map.call(document.querySelectorAll("input[name=typeOfService]:checked"), function (each) {
        return each.value;
    });

    const name = nameElement.value;
    const email = emailElement.value;
    const message = textareaElement.value;
    const phone = phoneElement.value;
    if (validateInput(name, email, message)) {
        sendData({
            date: new Date().toString(),
            name: name,
            email: email,
            services: services,
            message: message,
            phone: phone,
        });
        BG_MODAL.style.display = 'none';

        createForm.reset();
    }
});

formHolder.appendChild(createForm);
