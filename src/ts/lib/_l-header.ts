export function ctrlHamMenu() {
  const hamMenu = document.querySelector<HTMLElement>(".l-header__ham-menu");
  const hamButton = document.querySelector<HTMLElement>(
    ".l-header__ham-button",
  );

  hamButton!.addEventListener("click", (e) => {
    e.preventDefault();

    hamButton!.classList.toggle("is-open");
    hamMenu!.classList.toggle("is-open");
  });

  hamMenu!.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;

    if (
      !target.closest(".l-header__ham-contents") ||
      target.classList.contains("l-header__ham-anchor")
    ) {
      e.preventDefault();
      hamButton!.classList.remove("is-open");
      hamMenu!.classList.remove("is-open");
    }
  });
}
