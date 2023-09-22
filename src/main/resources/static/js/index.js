document.addEventListener('DOMContentLoaded', function (){
    let contentBox = document.getElementById("content");
    let hiddenAttr = document.getElementById("form").attributes.getNamedItem("hidden");

    let nameScreenContent = `
        <header class="text js-h-text">Main Screen</header>
        <p class="text js-p-text">Test p</p>
    `;
    let contactContact = `<p class="text js-h-text">Contact Me</p>`;
    let aboutMeContent = `<p class="text js-p-text">About me or something</p>`;
    contentBox.innerHTML = nameScreenContent;

    // If buttons clicked
    document.getElementById("name-header").addEventListener('click', function (event) {
        document.getElementById("form").attributes.setNamedItem(hiddenAttr);
        contentBox.innerHTML = nameScreenContent;
    });
    document.getElementById("about-me-header").addEventListener('click', function (event) {
        document.getElementById("form").attributes.setNamedItem(hiddenAttr);
        contentBox.innerHTML = aboutMeContent;
    });
    document.getElementById("contact-header").addEventListener('click', function (event) {
        document.getElementById("form").attributes.removeNamedItem("hidden");
        contentBox.innerHTML = contactContact;
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
