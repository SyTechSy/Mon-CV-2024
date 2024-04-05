document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    pages[0].style.display = "block"; // Afficher la première page (Accueil) au chargement

    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const index = parseInt(this.getAttribute("data-index")); // Récupérer l'index du lien cliqué
            pages.forEach((page, pageIndex) => {
                if (pageIndex === index) {
                    page.style.display = "block"; // Afficher la page correspondante
                    links.forEach(link => link.classList.remove("nav-active")); // Retirer la classe des autres liens
                    this.classList.add("nav-active"); // Ajouter la classe pour le lien actif
                } else {
                    page.style.display = "none"; // Masquer les autres pages
                }
            });
        });
    });
});

// menu responsive et nav topggle

const nemuGlobalTimes = document.getElementById('menu_global_times');
const navToggle = document.getElementById('nav_toggle');
const navClose = document.getElementById('nav_close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        nemuGlobalTimes.classList.add('show_active');
        navToggle.style.display = 'none';
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        nemuGlobalTimes.classList.remove('show_active');
        navToggle.style.display = 'block';
    })
}

// cacher mon nav lorsqu'il cliqui un lien a de mon nav


const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('menu_global_times')
    // Lorsque nous cliquons sur chaque nav__link, nous supprimons le show-menu
    navMenu.classList.remove('show_active')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// lien click qui va donnée le color

for (let link = 0; link < navLink.length; link++) {
    navLink[link].addEventListener('click', function () {
        for (let linkk = 0; linkk < navLink.length; linkk++) {
            navLink[linkk].classList.remove("nav-active");

        }
        this.classList.add("nav-active");
        navToggle.style.display = "block"
    });
}


/* ================ CHANGE BACKGROUND HEADER ==================*/

const scrollHeader = () => {
    const header = document.getElementById('nav')
    // Lorsque le défilement est supérieur à 50 de hauteur de fenêtre, ajoutez la classe d'en-tête de défilement
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)



///////////////////////  cacher tolle_container 
/* ================ cacher tolle_container  ==================*/

/*
const navigation = document.querySelector('.navigationc');
const links = document.querySelectorAll('.navigationn a');

let isHidden = false;

function toggleNavigation() {
    if (isHidden) {
        navigation.classList.remove('hidden');
        isHidden = false;
    } else {
        navigation.classList.add('hidden');
        isHidden = true;
    }
}

function shouldHideNavigation() {
    return window.matchMedia("(max-width: 776px)").matches;
}

document.addEventListener('click', function (event) {
    const clickedElement = event.target;

    if (shouldHideNavigation()) {
        return; // Si la largeur de l'écran est inférieure à 700px, ne rien faire pour cacher la barre de navigation
    }

    if (clickedElement.tagName === 'A') {
        return; // Si un lien est cliqué, ne rien faire pour cacher la barre de navigation
    }

    toggleNavigation();
});

setInterval(function () {
    if (!isHidden && !shouldHideNavigation()) {
        toggleNavigation();
    }
}, 30000);

*/

/* ============================ POUR SLIDER PORTFOLIO ====================== */

// côté de mon projet 

document.querySelectorAll('.button_projet_img').forEach(button => {
    button.onclick = () => {
        const overlay = document.querySelector('.overlay');
        const loader = document.querySelector('.loader');

        overlay.style.display = 'block';
        loader.style.display = 'block';

        const start = performance.now();
        const tempImage = new Image();

        tempImage.onload = () => {
            const end = performance.now();
            const loadingTime = end - start;

            const imageSrc = button.parentElement.parentElement.querySelector('img').getAttribute('src');

            document.querySelector('.interface-image').style.display = 'block';
            document.querySelector('.interface-image img').src = imageSrc;

            setTimeout(() => {
                overlay.style.display = 'none';
                loader.style.display = 'none';
            }, Math.max(0, 2000 - loadingTime)); // 2 secondes de chargement par défaut, ajustées en fonction du temps de chargement
        };

        const imageSrc = button.parentElement.parentElement.querySelector('img').getAttribute('src');
        tempImage.src = imageSrc;
    };
});


document.querySelector('.interface-image span').onclick = () => {
    document.querySelector('.interface-image').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.loader').style.display = 'none';
};


/******************************************* SEND EMAIL */

function sendEmail() {
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email').value;
    var description = document.getElementById('description').value;

    Email.send({
        Host: "smtp.yourhost.com",
        Username: "Diakaridia",
        Password: "Aminata78djiguiba20@",
        To: 'sydiakaridia38@gmail.com',
        From: email,
        Subject: 'Nouveau message de ' + nom + ' ' + prenom,
        Body: 'Nom: ' + nom + '<br>Prénom: ' + prenom + '<br>Email: ' + email + '<br>Message: ' + description
    }).then(function () {
        alert("Email envoyé avec succès!");
        document.getElementById('nom').value = '';
        document.getElementById('prenom').value = '';
        document.getElementById('email').value = '';
        document.getElementById('description').value = '';
    }).catch(function(error) {
        alert("Erreur lors de l'envoi de l'email: " + error);
    });
}


/********************** icon et loading pour le telachargement */

$(document).ready(function () {
    $("#download-icon").click(function (event) {
        // Empêcher le comportement par défaut du lien
        event.preventDefault();

        // Afficher l'icône de chargement
        $("#download-icon").hide();
        $("#loading-icon").show();

        // Créer un lien dynamique
        var downloadLink = document.createElement('a');
        downloadLink.href = "pdf/cv_en_pdf.pdf";
        downloadLink.download = "CV_Diakaridia_Koureissi_SY.pdf";

        // Ajouter le lien à la page (il n'est pas visible)
        document.body.appendChild(downloadLink);

        // Déclencher le clic sur le lien
        downloadLink.click();

        // Supprimer le lien après le clic et après un délai de 3 secondes
        setTimeout(function () {
            // Cacher l'icône de chargement
            $("#loading-icon").hide();
            // Réafficher l'icône de téléchargement
            $("#download-icon").show();
            document.body.removeChild(downloadLink);
        }, 1000);
    });
});