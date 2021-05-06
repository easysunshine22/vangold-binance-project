
const toggleMode = document.querySelector('.toggle');

toggleMode.addEventListener("click", () => {
    
    toggleMode.classList.toggle("light-mode");

    var navLink = document.querySelector('.nav-link');
    navLink.classList.toggle("light-mode");

    var navBar = document.querySelector('.navbar');
    navBar.classList.toggle("light-mode");
    
    var heroAreaBg = document.getElementById('hero-area');
    heroAreaBg.classList.toggle("light-mode");

    var tokenomics = document.getElementById('tokenomics');
    tokenomics.classList.toggle("light-mode");

    var about = document.getElementById('about');
    about.classList.toggle("light-mode");

    var features = document.getElementById('features');
    features.classList.toggle("light-mode");

    var roadmap = document.querySelector('.roadmap');
    roadmap.classList.toggle("light-mode");

    var presale = document.getElementById('presale');
    presale.classList.toggle("light-mode");

    var footerDiv = document.getElementById('footer');
    footerDiv.classList.toggle("light-mode");
})