document.addEventListener('DOMContentLoaded', function (){
    let contentBox = document.getElementById("content");
    let hiddenAttr = document.getElementById("form").attributes.getNamedItem("hidden");


    let nameScreenContent = `
        <header class="text js-h-text">Under Construction</header>
        <p class="text js-p-text">Test</p>
    `;
    let contactContent = `<header class="text js-h-text">Contact Me</header>`;
    let aboutMeContent = `
        <header class="text js-h-text">About Me</header>
        <p class="text js-p-text">
            I am a ` + age() + ` years old Computer Science student studying at the University
            of West of England (UWE Bristol) looking to go into a field in the tech sector.
            <br><br>
            I am looking to go on a 1-year placement before I do my final year of university, if you are affiliated
            with a company which does these placements in or near Bristol, please go to the contact section or alternatively email: 
            <a href="mailto:contact@josephaines.com">contact@josephaines.com</a>
            <br><br>
            I have done a few personal projects to show my skills in my applicable technologies and languages which
            can be viewed on my <a href="https://github.com/bushycargo">GitHub</a>, or some are displayed on the home
            screen of this site. The main language I use is Java and have experience in Spring. I have also done some full
            stack website development, using Spring as the backend such as this website.
        </p>
    `;
    contentBox.innerHTML = nameScreenContent;

    // If buttons clicked
    document.getElementById("name-header").addEventListener('click', function (event) {
        if (contentBox.innerHTML === nameScreenContent) return;
        $("form").fadeOut(200);
        $("#content").fadeOut(200, function (){
            contentBox.innerHTML = nameScreenContent;
            $("#content").fadeIn(200);
        });
    });
    document.getElementById("about-me-header").addEventListener('click', function (event) {
        if (contentBox.innerHTML === aboutMeContent) return;
        $("form").fadeOut(200);
        $("#content").fadeOut(200, function (){
            contentBox.innerHTML = aboutMeContent;
            $("#content").fadeIn(200);
        });
    });
    document.getElementById("contact-header").addEventListener('click', function (event) {
        if (contentBox.innerHTML === contactContent) return;
        $("form").fadeOut(200);
        $("#content").fadeOut(200, function (){
            $("form").fadeIn(200);
            contentBox.innerHTML = contactContent;
            $("#content").fadeIn(200);
        });
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

    // If form submit button hovered
    document.getElementById("submit-button").addEventListener('mouseenter', function (event) {
        event.target.style.backgroundColor = "#be9afc";
    });
    document.getElementById("submit-button").addEventListener('mouseout', function (event) {
        event.target.style.backgroundColor = "";
    });
});

function age(){
    let currentDate = new Date(Date.now())
    let age = currentDate.getFullYear() - 2003;
    if (currentDate.getMonth() < 5){
        age = age - 1;
    }
    if (currentDate.getMonth() === 5){
        if (currentDate.getDate() < 21){
            age = age - 1
        }
    }
    return age;
}