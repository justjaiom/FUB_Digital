const navToggleBtn = document.querySelector(".navbar-toggler");
const navCollapseDiv = document.querySelector(".navbar-collapse");

navToggleBtn.addEventListener("click", () => {
  navCollapseDiv.classList.toggle("showNavbar");
  navToggleBtn.classList.toggle("showNavbar-toggler");
});

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

let width = screen.width;

if (width > 992) {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
  };
}

function SendMail() {
  var params = {
    from_name: document.getElementById("from_name").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
    phone: document.getElementById("phone").value,
    web_url: document.getElementById("web_url").value,

    web_creation: document.getElementById("web_creation").checked,
    marketing: document.getElementById("marketing").checked,
  };
  emailjs
    .send("service_qrj6ggp", "template_2bbd5jv", params)
    .then(function (res) {
      popup.showModal();
    });
}

let popup = document.getElementById("popup");

$("#form").on("submit", function (e) {
  e.preventDefault();
  SendMail();
  // Send the form data to the server using fetch API
  fetch(
    "https://script.google.com/macros/s/AKfycbz7qgM_sQvAq0_rlOt5aMhvr69iLS454Kk7VY2t1N7IRDrTf2AeMdP07yXEAYV-5jeBSg/exec",
    {
      method: "POST",
      body: new FormData(document.getElementById("form")),
    }
  )
    .then((response) => {
      if (response.ok) {
        console.log("Success: Message sent");
        // Show the success dialog or perform any other actions
        document.getElementById("popup").showModal();
      } else {
        console.error("Error: Message failed to send");
      }
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
  document.getElementById("form").reset();
});

// Newsletter
document
  .getElementById("newsletter")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const form = event.target;
    const formData = new FormData(form);

    // Clear the form
    form.reset();

    fetch(
      "https://script.google.com/macros/s/AKfycby7zGUaPMbJMejo3jArjsFYQmkM_fE9R-6OqDPVOR48FPHg-tKLYDzpObxkcX5sdICP0g/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then(function (response) {
        if (response.ok) {
          console.log("Success: Message sent");
          // Show the success dialog or perform any other actions
        } else {
          console.error("Error: Message failed to send");
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  });

// Function to set the theme preference as a cookie
function setThemePreference(theme) {
  document.cookie = `theme=${theme}; path=/;`;
}

// Function to toggle the theme
function toggleTheme() {
  const body = document.body;
  const textBtn = document.getElementById("text-btn");
  const themeSwitch = document.getElementById("checkbox");

  if (themeSwitch.checked) {
    body.classList.add("dark-theme");
    textBtn.textContent = "Too Boring?";
    setThemePreference("dark");
  } else {
    body.classList.remove("dark-theme");
    textBtn.textContent = "Too Bright?";
    setThemePreference("bright");
  }
}

// Function to retrieve the theme preference from the cookie
function getThemePreference() {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "theme") {
      return value;
    }
  }
  return null;
}

// Check if the theme preference is already set in the cookie
const storedTheme = getThemePreference();
if (storedTheme === "dark") {
  document.body.classList.add("dark-theme");
  document.getElementById("text-btn").textContent = "Too Boring?";
  document.getElementById("checkbox").checked = true;
}

// Toggle theme and update text when the checkbox is clicked
const themeSwitch = document.getElementById("checkbox");
themeSwitch.addEventListener("change", toggleTheme);

function addDashPhone() {
  var inputValue = document.getElementById("phone").value;
  var inputValueLength = inputValue.length;
  if (inputValueLength == 3 || inputValueLength == 7) {
    document.getElementById("phone").value = inputValue + "-";
  }
}
