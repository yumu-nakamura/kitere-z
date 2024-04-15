export function userJs() {
  //スムーススクロール
  document.addEventListener("DOMContentLoaded", () => {
    //スムーススクロールするボタン
    const actionButton = document.querySelector(".js-action-btn");
    //遷移先
    const targetSection = document.getElementById("body");
    //easing機能
    const easingFunction = (t: number) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    const animateScroll = (target: HTMLElement | null, duration = 500) => {
      const initialPosition = window.pageYOffset;
      const targetPosition =
        target!.getBoundingClientRect().top + initialPosition;
      const animationStart = performance.now();

      const performAnimation = (currentTime: number) => {
        const elapsedTime = currentTime - animationStart;
        const progress = elapsedTime / duration;

        if (progress < 1) {
          const easedProgress = easingFunction(progress);
          const currentPosition =
            initialPosition +
            (targetPosition - initialPosition) * easedProgress;
          window.scrollTo(0, currentPosition);
          requestAnimationFrame(performAnimation);
        } else {
          window.scrollTo(0, targetPosition);
        }
      };

      requestAnimationFrame(performAnimation);
    };

    //スムーススクロールするボタンがある場合
    if (actionButton) {
      //スムーススクロールするボタンをクリック後
      actionButton.addEventListener("click", (event) => {
        event.preventDefault();
        //animateScrollを実行
        animateScroll(targetSection);
      });
    }
  });

  //ドロワー処理
  const drawerFunc = () => {
    const hamMenu = document.getElementById("hamMenu");
    hamMenu!.addEventListener("click", () => {
      hamMenu!.classList.toggle("is_open");
      const drawerMenu = document.getElementById("drawerMenu");
      drawerMenu!.classList.toggle("is_open");
    });
  };
  drawerFunc();
}
