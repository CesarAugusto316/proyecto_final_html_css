const btnToggle = document.querySelector(".btn--toggle");
const drawer = document.querySelector(".drawer");

btnToggle?.addEventListener("click", () => {
  drawer?.classList.add("slide-in-right");
  drawer?.classList.remove("slide-out-right");
  drawer?.classList.remove("hidden");
});

drawer?.addEventListener("mouseleave", () => {
  drawer?.classList.add("slide-out-right");
  drawer?.classList.remove("slide-in-right");
});

/**
 *
 * TODO: Implement fade-out in footer and header navbars
 * with the Intersection Observer API.
 */
