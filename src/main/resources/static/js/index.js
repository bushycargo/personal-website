document.addEventListener('DOMContentLoaded', function (){
    let contentBox = document.getElementById("content-box");

    let nameScreenContent = "Main Screen";
    let aboutMeContent = "About me or something";
    let contactContent = "Contact me brrrr";

    contentBox.innerHTML = nameScreenContent;
    document.getElementById("name-header").addEventListener('click', function (event) {
        contentBox.innerHTML = nameScreenContent;
    });
    document.getElementById("about-me-header").addEventListener('click', function (event) {
        contentBox.innerHTML = aboutMeContent;
    });
    document.getElementById("contact-header").addEventListener('click', function (event) {
        contentBox.innerHTML = contactContent;
    });
    console.log("JS loaded");
});
