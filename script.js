var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//   Menu

var sidemeu = document.getElementById("sidemenu");

function openmenu() {
  sidemeu.style.right = "0px";
}

function closemenu() {
  sidemeu.style.right = "-200px";
}

var typed = new Typed(".autotype", {
  strings: ["Amey Pendhari", "from India"],
  typespeed: 200,
  backspeed: 200,
  loop: true,
  // loopCount: Infinity, // Loop indefinitely
  loopDelay: 500,
});

function fun1(event) {
  event.preventDefault(); // Prevent the default behavior of the anchor element

  let seeMorebtn = document.querySelector("#seemore");
  let currentitem = 3;

  let boxes = [...document.querySelectorAll(".container .work-list .work")];
  for (let i = currentitem; i < currentitem + 3; i++) {
    if (boxes[i]) {
      boxes[i].style.display = "inline-block";
    }
  }
  currentitem += 3;

  if (currentitem >= boxes.length) {
    seeMorebtn.style.display = "none";
  }
}

document.getElementById('seemore').addEventListener('click', fun1);

// Form

// function sendEmail() {
//     Email.send({
//       Host: "smtp.gmail.com",
//       Username: "thomastaker1426@gmail.com",
//       Password: "Amey@1426",
//       To: "ameypendhari2310@gmail.com",
//       From: document.getElementById("emaili").value,
//       Subject: "New Contact Form Enquiry",
//       Body: "Name: " + document.getElementById("name").value +
//       "<br> Email: " + document.getElementById("emaili").value
//       + "<br> Message : " + document.getElementById("message").value

//     }).then((message) => alert("Messsage Sent Successfully"));
//   }
