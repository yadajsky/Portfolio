let linkedInButton = document.getElementById('linkedIn');
let projectCard1 = document.getElementById('project-card1');
let projectCard2 = document.getElementById('project-card2');
let projectCard3 = document.getElementById('project-card3');
let currentPath = window.location.pathname;
let isInsidePagesFolder = currentPath.includes("/pages/");
let homeButton = document.getElementById('homeButton');
let nextButton = document.getElementById('nextButton');
let previousButton = document.getElementById('previousButton');

document.querySelectorAll(".nav-bar-link").forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});

if(projectCard1){
    projectCard1.addEventListener("click", () => {
        window.location.href = "./pages/project1.html";
    }, false);
}

if(projectCard2){
    projectCard2.addEventListener('click', () => {
        window.location.href = "./pages/project2.html";
    }, false);
}

if(projectCard3){
    projectCard3.addEventListener('click', () => {
        window.location.href = "./pages/project3.html";
    }, false);
}

linkedInButton.addEventListener('mouseover', ()=>{
    if (isInsidePagesFolder) {
        linkedIn.src = "../assets/images/icons/linkedin-2.png";
      } else {
        linkedIn.src = "./assets/images/icons/linkedin-2.png";
      }
}, false);

linkedInButton.addEventListener('mouseout', () => {
    if (isInsidePagesFolder) {
        linkedIn.src = "../assets/images/icons/linkedin-4.png";
      } else {
        linkedIn.src = "./assets/images/icons/linkedin-4.png";
      }
}, false);

if(homeButton){
    homeButton.addEventListener('mouseover', () => {
        homeButton.src = "../assets/images/icons/home-2.png";
    });

    homeButton.addEventListener('mouseleave', () => {
        homeButton.src = "../assets/images/icons/home.png";
    });

    homeButton.addEventListener('click', () => {
        window.location.href = '../index.html';
    });
}

if (nextButton) {
    nextButton.addEventListener('mouseover', () => {
        nextButton.src = "../assets/images/icons/next-button.png";
    });

    nextButton.addEventListener('mouseout', () => {
        nextButton.src = "../assets/images/icons/arrow-right.png";
    });

    nextButton.addEventListener('click', () => {
        const currentLocation = window.location.href;
        const targetLocation =
            currentLocation.endsWith("project1.html")
                ? "./project2.html"
                : currentLocation.endsWith("project2.html")
                    ? "./project3.html"
                    : ""; 
        if (targetLocation) {
            window.location.href = targetLocation;
        }
    });
}

if (previousButton) {
    previousButton.addEventListener('mouseover', () => {
        previousButton.src = "../assets/images/icons/previous-button.png";
    });

    previousButton.addEventListener('mouseout', () => {
        previousButton.src = "../assets/images/icons/arrow-left.png";
    });

    previousButton.addEventListener('click', () => {
        const currentLocation = window.location.href;
        const targetLocation =
            currentLocation.endsWith("project3.html")
                ? "./project2.html"
                : currentLocation.endsWith("project2.html")
                    ? "./project1.html"
                    : ""; 
        if (targetLocation) {
            window.location.href = targetLocation;
        }
    });
}