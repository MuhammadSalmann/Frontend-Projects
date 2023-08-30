let banner = document.querySelector(".advertisements");
let bulletOne = document.getElementById("bullet-1");
let bulletTwo = document.getElementById("bullet-2");
let bulletThree = document.getElementById("bullet-3");
let heading = document.querySelectorAll(".adv-box h1");
let content = document.querySelector(".adv-box p");
let btn = document.querySelector(".adv-box button");
// *******************************************
const menuTab = document.querySelector('.lower-nav .menu-tab');
const dropdownMenu = document.querySelector('.dropdown-menu');

function setBannerContent(imageUrl, mainHeading, subHeading, contentText, buttonText) {
    banner.style.backgroundImage = `url('${imageUrl}')`;
    heading[0].innerHTML = mainHeading;
    heading[1].innerHTML = subHeading;
    content.innerHTML = contentText;
    btn.innerHTML = buttonText;
}

function removeActiveClassFromAll() {
    bulletOne.classList.remove('active');
    bulletTwo.classList.remove('active');
    bulletThree.classList.remove('active');
}

bulletOne.addEventListener("click", (event) => {
    setBannerContent(
        "imgs/adv-1.png",
        "It's Crispy, It's Juicy,",
        "It's Chicken Tenders!",
        "Enjoy our all new Chicken Tenders today!",
        "Order Now"
    );
    removeActiveClassFromAll();
    bulletOne.classList.add('active');
});

bulletTwo.addEventListener("click", (event) => {
    banner.style.backgroundImage = "url('imgs/adv-2.png')";
    heading[0].innerHTML = "Register!!!";
    heading[1].innerHTML = " ";
    content.innerHTML = "Wait is Over";
    btn.innerHTML = "Learn More";
    removeActiveClassFromAll();
    bulletTwo.classList.add('active');
})

bulletThree.addEventListener("click", (event) => {
    banner.style.backgroundImage = "url('imgs/adv-3.png')";
    heading[0].innerHTML = "Come Fall in love!";
    heading[1].innerHTML = " ";
    content.innerHTML = "Grab our Spicy McCrispy now";
    btn.innerHTML = "Order Now";
    removeActiveClassFromAll();
    bulletThree.classList.add('active');
})


menuTab.addEventListener('mouseenter', () => {
    menuTab.innerHTML = "Our Menu <i class='fa-solid fa-angle-up fa-xs'></i>";
    dropdownMenu.style.display = 'block';
});

dropdownMenu.addEventListener('mouseenter', () => {
    menuTab.innerHTML = "Our Menu <i class='fa-solid fa-angle-up fa-xs'></i>";
    dropdownMenu.style.display = 'block';
});

menuTab.addEventListener('mouseleave', () => {
    menuTab.innerHTML = "Our Menu <i class='fa-solid fa-chevron-down fa-2xs'></i>";
    dropdownMenu.style.display = 'none';
});

dropdownMenu.addEventListener('mouseleave', () => {
    menuTab.innerHTML = "Our Menu <i class='fa-solid fa-chevron-down fa-2xs'></i>";
    dropdownMenu.style.display = 'none';
});
