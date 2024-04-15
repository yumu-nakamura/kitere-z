export function splitSectionTitleEnText() {
  const sectionTitles =
    document.querySelectorAll<HTMLElement>(".c-section-title");

  sectionTitles.forEach((title) => {
    const titleEn = title.querySelector<HTMLElement>(".c-section-title__en");
    const textEnArr = titleEn!.textContent!.split("");

    titleEn!.textContent = "";

    textEnArr.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;

      if (char !== " ") {
        span.classList.add("js-animate-section-title");
      }

      titleEn!.appendChild(span);
    });
  });
}

export function addTransitionDelayForJa() {
  const sectionTitles =
    document.querySelectorAll<HTMLElement>(".c-section-title");

  sectionTitles.forEach((title) => {
    const titleEn = title.querySelector<HTMLElement>(".c-section-title__en");
    const titleJa = title.querySelector<HTMLElement>(".c-section-title__ja");
    const textEnArr = titleEn!.textContent!.split("");
    titleJa!.style.transitionDelay = `${50 * textEnArr.length + 100}ms`;
  });
}
