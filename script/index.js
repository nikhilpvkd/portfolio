let tabButton = document.querySelectorAll(".btn");

const btnClicked = (btnName) => {
    console.log(tabButton[0]);
    if (btnName === "all") {
        tabButton[0].classList.add("border-bottom");
        tabButton[1].classList.remove("border-bottom");
    } else if (btnName === "webdev") {
        tabButton[1].classList.add("border-bottom");
        tabButton[0].classList.remove("border-bottom");
    }
};

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Log the form values to the console

    const body = `Name: ${name} <br />Phone:${phone}<br />Email: ${email}<br /> message:${message}`;
    Email.send({
        SecureToken: "52a572e0-d1d3-446e-8b8b-b1c94f1d65ff",
        To: "nikhil.steyp@gmail.com",
        From: "nikhil.steyp@gmail.com",
        Subject: "New lead from web-site",
        Body: body,
    }).then((message) => {
        console.log(message);
        alert(message);
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    });
});

$(document).ready(function () {
    $(".your-class").slick({
        arrows: true, // Show arrows
        autoplay: true,
        prevArrow:
            '<button type="button" class="slick-prev"><iconify-icon icon="ooui:next-rtl"></iconify-icon></button>', // Left arrow element
        nextArrow:
            '<button type="button" class="slick-next"><iconify-icon icon="ooui:previous-rtl"></iconify-icon></button>',
    });
});
