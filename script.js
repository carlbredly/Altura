let buthome=document.getElementById("home");
let butinformation=document.getElementById("information");
let butcontact=document.getElementById("contact");

function scrollToSection(sectionClassName) {
    var section = document.querySelector("." + sectionClassName); // Ajouter "." pour sélectionner par classe
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    } else {
        console.error("Section non trouvée : " + sectionClassName);
    }
}

buthome.addEventListener("click", function(){
    scrollToSection("section1");
})

butinformation.addEventListener("click", function(){
    scrollToSection("information");
})

butcontact.addEventListener("click", function(){
    scrollToSection("contactform");
})
window.addEventListener("scroll", function() {
    const headernav= this.document.querySelector("header");
    if (window.scrollY > 100) {
       headernav.style.position="fixed";
       headernav.style.backgroundColor= "rgb(24 23 23)";
   
       const mainsec=this.document.querySelector("main");
       mainsec.style.marginTop="78px";
    } else {
        headernav.style.position="relative"
        headernav.style.backgroundColor= "rgb(24 23 23)";
        const mainsec=this.document.querySelector("main");
        mainsec.style.marginTop="0px";
    }
});

document.getElementById('menu-icon').addEventListener('click', function() {
    this.classList.toggle('active'); // Toggle the menu icon animation
    var linkContainer = document.querySelector('.link');
    linkContainer.classList.toggle('active'); // Toggle the menu visibility
});

// Sélectionner tous les éléments de menu dans .link
document.querySelectorAll('.link a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('menu-icon').classList.remove('active'); // Désactiver l'icône du menu
        document.querySelector('.link').classList.remove('active'); // Masquer le menu
    });
});
