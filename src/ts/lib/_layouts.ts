/**
 * 特定の要素群の min-height を、その中で最も大きい高さに指定する
 * @param parentElemSelector 高さを揃えたい要素群をグルーピングする要素のセレクタ
 * @param targetElemsSelector 高さを揃えたい要素を指定するセレクタ
 * @param resize リサイズ時に再計算するか
 * @default true
 */
export function equalizeHeight(
  parentElemSelector: string,
  targetElemsSelector: string,
  resize = true,
) {
  const parent = document.querySelector<HTMLElement>(parentElemSelector);

  if (!parent) {
    throw new Error("[equalizeHeight] parentElen is not found.");
  }

  const targets = parent.querySelectorAll<HTMLElement>(targetElemsSelector);

  const setMinHeightStyle = () => {
    let maxHeight = 0;

    // maxHeight を決定する
    targets.forEach((target) => {
      target.style.minHeight = "";
      const targetHeight = target.getBoundingClientRect().height;

      if (targetHeight > maxHeight) {
        maxHeight = targetHeight;
      }
    });

    // min-height を指定
    targets.forEach((target) => {
      target.style.minHeight = `${maxHeight}px`;
    });
  };

  setMinHeightStyle();

  if (resize) {
    window.addEventListener("resize", setMinHeightStyle);
  }
}
