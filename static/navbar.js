const nav_expand = document.querySelector(".nav-expand-button");
const navbar = document.querySelector(".navbar")
const nav_collapsable_content = document.querySelectorAll(".nav-collapsing-content");
let navbar_classes = navbar.classList;


getWindowWidthEms = () => {
    // Get window width in ems.
    // Thanks to Stackoverflow user: https://stackoverflow.com/users/362536/brad
    // Answer: https://stackoverflow.com/a/42061290/15777014
    
    let fontSize = window.innerWidth / parseFloat (
        getComputedStyle(
            document.querySelector('html')
        )['font-size']
    )

    return fontSize;
}

toggleNavbarExpand = () => {
    navbar_classes.toggle("navbar-expanded");
    nav_collapsable_content.forEach((item) => {
        classes = item.classList;
        classes.toggle("navbar-expanded");
    });
};

collapseNavbar = () => {
    if (getWindowWidthEms() >= 30) {
        if (navbar_classes.contains("navbar-expanded"))
        {
            toggleNavbarExpand();
        }
    }
}


manageNavbarMargin = () => {
    let nav = document.querySelector(".navbar");
    let body = document.querySelector("body");
    let nav_height = nav.clientHeight;
    body.style.marginTop = `${nav_height}px`;
}


nav_expand.addEventListener("click", () => {
    toggleNavbarExpand();
});



manageNavbarMargin();
window.onresize = collapseNavbar;
