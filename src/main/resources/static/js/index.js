let nameScreenContent = `
    <header class="text js-h-text">Under Construction</header>
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

document.addEventListener('DOMContentLoaded', function (){
    let contentBox = document.getElementById("content");
    contentBox.innerHTML = nameScreenContent;

    // If buttons clicked
    setSidebarListener("name-header", nameScreenContent, false, true);
    setSidebarListener("about-me-header", aboutMeContent);
    setSidebarListener("contact-header", contactContent, true);

    // If buttons hovered
    setHoverListener("contact-header");
    setHoverListener("about-me-header");
    setHoverListener("submit-button", true);
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

function setSidebarListener(elementId, content, isForm = false, isHome = false){
    let contentBox = document.getElementById("content");
    document.getElementById(elementId).addEventListener('click', function (event) {
        if (contentBox.innerHTML === content) return;
        $("form").fadeOut(200);
        $("#content-grid").fadeOut(200);
        $("#content").fadeOut(200, function (){
            contentBox.innerHTML = content;
            $("#content").fadeIn(200);
            if (isForm){
                $("form").fadeIn(200);
            }
            if (isHome){
                $("#content-grid").fadeIn(200);
            }
        });
    });
}

function setHoverListener(elementId, isButton = false){
    document.getElementById(elementId).addEventListener("mouseenter", function (event) {
        if (isButton){
            event.target.style.backgroundColor = "#be9afc";
            return;
        }
        event.target.style.color = "#be9afc";
    });
    document.getElementById(elementId).addEventListener('mouseout', function (event) {
        if (isButton){
            event.target.style.backgroundColor = "";
            return;
        }
        event.target.style.color = "";
    });
}