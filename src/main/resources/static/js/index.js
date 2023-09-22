document.addEventListener('DOMContentLoaded', function (){
    let contentBox = document.getElementById("content-box");

    let nameScreenContent = `
        <header class="text js-h-text">Main Screen</header>
        <p class="text js-p-text">Test p</p>
    `;
    let aboutMeContent = `<p class="text js-p-text">About me or something</p>`;
    let contactContent = `<p class="text js-p-text">Contact me brrrr</p>`;

    contentBox.innerHTML = nameScreenContent;

    // If buttons clicked
    document.getElementById("name-header").addEventListener('click', function (event) {
        contentBox.innerHTML = nameScreenContent;
    });
    document.getElementById("about-me-header").addEventListener('click', function (event) {
        contentBox.innerHTML = aboutMeContent;
    });
    document.getElementById("contact-header").addEventListener('click', function (event) {
        contentBox.innerHTML = contactContent;
    });

    // If buttons hovered
    console.log("JS loaded");
    document.getElementById("contact-header").addEventListener('mouseenter', function (event) {
        event.target.style.color = "#be9afc";
    });
    document.getElementById("contact-header").addEventListener('mouseout', function (event) {
        event.target.style.color = "";
    });
    document.getElementById("about-me-header").addEventListener('mouseenter', function (event) {
        event.target.style.color = "#be9afc";
    });
    document.getElementById("about-me-header").addEventListener('mouseout', function (event) {
        event.target.style.color = "";
    });

});
