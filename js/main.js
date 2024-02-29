
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});


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

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactformDB = firebase.database().ref("contactForm");

document.getElementById("contactform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   reset the form
  document.getElementById("contactform").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactformDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};



