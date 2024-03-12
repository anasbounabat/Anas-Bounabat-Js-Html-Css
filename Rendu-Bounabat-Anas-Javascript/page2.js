

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mon-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
    },
  });

  const lightbox = new SimpleLightbox(".card a");

  const options = {
    gutterPixels: 50,
  };

  const filterizr = new Filterizr(".portfolio-elements", options);

  let filtersList = document.querySelectorAll(".filters li");
  filtersList.forEach(function (filterItem) {
    filterItem.addEventListener("click", function () {
      document.querySelector(".filters .active").classList.remove("active");
      this.classList.add("active");
    });
  });

  let accordions = document.querySelectorAll(".accordeon");
  console.log(accordions);
  accordions.forEach(function (accordion) {
    accordion.addEventListener("click", function () {
      console.log("Marche pas ù");
    });
  });
});

// Première utilisation pour simplement afficher les éléments dans la console
let accordionsDisplay = document.querySelectorAll(".accordeon");
accordionsDisplay.forEach(function (item) {
  item.addEventListener("click", function () {
    console.log(item);
  });
});

// Deuxième utilisation pour ajouter ou retirer la classe "open" au clic
let accordionsToggle = document.querySelectorAll(".accordeon");
accordionsToggle.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.toggle("open");
  });
});