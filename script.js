const menuButton =
  document.getElementById("menu-button");

const menuClose =
  document.getElementById("menu-close");

const sideMenu =
  document.getElementById("side-menu");

const menuOverlay =
  document.getElementById("menu-overlay");

const menuLinks =
  document.querySelectorAll(".menu-links a");


/* =========================
   OPEN MENU
========================= */

function openMenu() {

  sideMenu.classList.add("active");

  menuOverlay.classList.add("active");

  menuButton.classList.add("active");

  menuButton.setAttribute(
    "aria-expanded",
    "true"
  );

}


/* =========================
   CLOSE MENU
========================= */

function closeMenu() {

  sideMenu.classList.remove("active");

  menuOverlay.classList.remove("active");

  menuButton.classList.remove("active");

  menuButton.setAttribute(
    "aria-expanded",
    "false"
  );

}


/* =========================
   MENU WIRING
   (nur ausführen, wenn das Menü auf
   der aktuellen Seite existiert)
========================= */

if (
  menuButton &&
  menuClose &&
  sideMenu &&
  menuOverlay
) {

  menuButton.addEventListener(
    "click",
    () => {

      if (
        sideMenu.classList.contains("active")
      ) {

        closeMenu();

      } else {

        openMenu();

      }

    }
  );


  menuClose.addEventListener(
    "click",
    closeMenu
  );


  menuLinks.forEach(
    link => {

      link.addEventListener(
        "click",
        closeMenu
      );

    }
  );


  menuOverlay.addEventListener(
    "click",
    closeMenu
  );


  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {

        closeMenu();

      }

    }
  );

}


/* =========================
   COPY EMAIL
========================= */

function copyText(id) {

  const element =
    document.getElementById(id);

  if (!element) {
    return;
  }

  const text =
    element.innerText;


  navigator.clipboard
    .writeText(text)

    .then(() => {

      const originalText =
        element.innerText;


      element.innerText =
        "Copied!";


      setTimeout(
        () => {

          element.innerText =
            originalText;

        },
        1500
      );

    })


    .catch(() => {

      alert(
        "Could not copy the email address."
      );

    });

}


/* =========================
   IMAGE ZOOM (Click-to-enlarge)
   Gilt für Hero-Bild (Project 1),
   die 3-Bilder-Reihe (Project 1)
   und die Project-2-Galerie.
========================= */

const zoomableImages = document.querySelectorAll(
  ".project-featured-image, .project-gallery-row img, .project2-gallery-item img"
);

if (zoomableImages.length > 0) {

  // Overlay-Element einmal erzeugen und ans Ende von <body> hängen

  const overlay = document.createElement("div");
  overlay.className = "img-zoom-overlay";

  const overlayImg = document.createElement("img");
  overlay.appendChild(overlayImg);

  document.body.appendChild(overlay);


  function openZoom(src, alt) {

    overlayImg.src = src;
    overlayImg.alt = alt || "";

    overlay.classList.add("active");

  }


  function closeZoom() {

    overlay.classList.remove("active");

  }


  zoomableImages.forEach(img => {

    img.addEventListener("click", () => {

      openZoom(img.src, img.alt);

    });

  });


  // Klick auf das vergrößerte Bild oder den Hintergrund schließt wieder

  overlay.addEventListener("click", closeZoom);


  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      closeZoom();

    }

  });

}