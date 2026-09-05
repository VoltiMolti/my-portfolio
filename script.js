const menuButton =
  document.getElementById("menu-button");

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
   MENU BUTTON
========================= */

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


/* =========================
   CLOSE WHEN CLICKING LINK
========================= */

menuLinks.forEach(
  link => {

    link.addEventListener(
      "click",
      closeMenu
    );

  }
);


/* =========================
   CLOSE OVERLAY
========================= */

menuOverlay.addEventListener(
  "click",
  closeMenu
);


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeMenu();

    }

  }
);


/* =========================
   COPY EMAIL
========================= */

function copyText(id) {

  const element =
    document.getElementById(id);

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