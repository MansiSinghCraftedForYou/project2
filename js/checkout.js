const firebaseConfig = {
    apiKey: "AIzaSyDz-g_UffLq6snl85ZPkvzsizRtswsiB38",
    authDomain: "contactform-17cc2.firebaseapp.com",
    databaseURL: "https://contactform-17cc2-default-rtdb.firebaseio.com",
    projectId: "contactform-17cc2",
    storageBucket: "contactform-17cc2.appspot.com",
    messagingSenderId: "158251856481",
    appId: "1:158251856481:web:e969b1361ba64932187020",
    measurementId: "G-DX83Q1C85M"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
// Firebase database reference
var contactformDB = firebase.database().ref("contactForm");

// Function to handle form submission
function submitForm(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Get values from form fields
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var confirmEmail = getElementVal("confirmEmail");
    var streetAddress = getElementVal("streetAddress");
    // var country = getElementVal("country");
    var state = getElementVal("state");
    var zip = getElementVal("zip");
    var paymentMode = getElementVal("paymentMode");

    // Validate email confirmation
    if (emailid !== confirmEmail) {
        alert("Emails do not match!");
        return;
    }

    // Save form data to Firebase database
    saveOrderDetails(name, emailid, streetAddress, state, zip, paymentMode);

    // Display success message
    displaySuccessMessage();

    // Reset the form
    resetForm();
}

// Function to save order details to Firebase database
function saveOrderDetails(name, emailid, streetAddress, state, zip, paymentMode) {
    var newOrder = contactformDB.push();

    newOrder.set({
        name: name,
        emailid: emailid,
        streetAddress: streetAddress,

        state: state,
        zip: zip,
        paymentMode: paymentMode
    });
}

// Function to display success message
function displaySuccessMessage() {
    var alertDiv = document.querySelector(".alert");
    alertDiv.style.display = "block";

    // Remove the alert after 3 seconds
    setTimeout(function() {
        alertDiv.style.display = "none";
    }, 3000);
}

// Function to reset the form
function resetForm() {
    document.getElementById("contactform").reset();
}

// Function to get value of an element by ID
function getElementVal(id) {
    return document.getElementById(id).value;
}

// Attach event listener to form submission
document.getElementById("contactform").addEventListener("submit", submitForm);