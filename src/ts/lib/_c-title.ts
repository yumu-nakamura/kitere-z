import { CHARS_TIMEOUT } from "./_c-copy";

export function appearBottomLine() {
  const line = document.querySelector<HTMLElement>(".c-copy__line");
  setTimeout(() => {
    line!.classList.add("is-animated");
  }, CHARS_TIMEOUT);
}

export function fadeInTitleChars() {
  const chars = document.querySelectorAll<HTMLElement>(".c-title__char");
  setTimeout(() => {
    chars.forEach((char) => {
      char.classList.add("is-animated");
    });
  }, 50);
}

export function addTitleAnimationClass() {
  const title = document.querySelector<HTMLElement>(".c-title");

  title!.classList.add("is-animated");
}
