const navToggleBtn = document.querySelector('.navbar-toggler');
const navCollapseDiv = document.querySelector('.navbar-collapse');


navToggleBtn.addEventListener('click', () => {
    navCollapseDiv.classList.toggle('showNavbar');
    navToggleBtn.classList.toggle('showNavbar-toggler');
});

let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

let width = screen.width;

if (width > 992){
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }
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
    }
    emailjs.send("service_qrj6ggp", "template_2bbd5jv", params).then(function (res) {
      popup.showModal()
    })
}

let popup = document.getElementById("popup")


$('#form').on('submit',function (e) {
    e.preventDefault();
    SendMail()
    document.getElementById("form").reset();

    console.log('done')
 
 }

)


// Function to set the theme preference as a cookie
function setThemePreference(theme) {
    document.cookie = `theme=${theme}; path=/;`;
  }
  
  // Function to toggle the theme
  function setThemePreference(theme) {
    document.cookie = `theme=${theme}; path=/;`;
  }
  
  // Function to toggle the theme
  function toggleTheme() {
    const body = document.body;
    const textBtn = document.getElementById("text-btn");
  
    body.classList.toggle('dark-theme');
  
    // Update the text based on the theme
    if (body.classList.contains('dark-theme')) {
      textBtn.textContent = "Too Boring?";
      setThemePreference('dark');
    } else {
      textBtn.textContent = "Too Bright?";
      setThemePreference('bright');
    }
  }
  
  // Function to retrieve the theme preference from the cookie
  function getThemePreference() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'theme') {
        return value;
      }
    }
    return null;
  }
  
  // Check if the theme preference is already set in the cookie
  const storedTheme = getThemePreference();
  if (storedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    document.getElementById("text-btn").textContent = "Too Boring?";
  }
  
  // Toggle theme and update text when the checkbox is clicked
  const themeSwitch = document.getElementById('checkbox');
  themeSwitch.addEventListener('change', toggleTheme);
  

  function addDashPhone() {
    var inputValue = document.getElementById("phone").value;
    var inputValueLength = inputValue.length;
    if (inputValueLength == 3 || inputValueLength == 7) {
      document.getElementById("phone").value = inputValue + "-";
    }
  }