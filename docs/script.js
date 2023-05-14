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



function SendMail() {
    var params = {
        from_name: document.getElementById("from_name").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value,
        phone: document.getElementById("phone").value,
        web_url: document.getElementById("web_url").value,

        web_creation: document.getElementById("web_creation").checked,
        seo: document.getElementById("seo").checked,
        marketing: document.getElementById("marketing").checked,
    }
    emailjs.send("service_qrj6ggp", "template_2bbd5jv", params).then(function (res) {
       openPopup()
    })
}

let popup = document.getElementById("popup")

function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}


$('#form').on('submit',function (e) {
    e.preventDefault();
    SendMail()
    console.log('done')
 
 }

)