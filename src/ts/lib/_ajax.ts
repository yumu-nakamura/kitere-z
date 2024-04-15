export function ajaxFunc() {
  /***************************************************************************
   *
   * Ajax
   *
   ****************************************************************************/

  /**
   * Touの重要なお知らせ非同期処理
   */
  const touHdrNews = () => {
    window.addEventListener("load", async () => {
      //TOPページ判定
      let loginFlag = document.body;
      let bodyId = loginFlag.id;
      //TOPページの場合
      if (bodyId === "top") {
        //重要なお知らせを取得
        let importantElm = document.querySelector(".p_important")!;
        let importantElmTxt = document.querySelector(".p_important p")!;
        console.log(importantElm);
        try {
          //restを取得
          const res = await fetch(
            "https://tou-gift.com/column/wp-json/wp/v2/posts?categories=2",
          );
          const data = await res.json();
          const newsCount = data.length;
          //重要がなければ、非表示に。
          if (newsCount === 0) {
            importantElm.classList.add("d_block");
          } else {
            for (let i = 0; i < newsCount; i++) {
              //リンクを取得
              let newsUrl = data[i].link;
              //タイトルを取得
              let newTitle = data[i].title.rendered;
              //テキストを入れ替える
              importantElmTxt.innerHTML = `
              <a href="${newsUrl}">
              <img src="http://tou-gift.com/img/layout/common/ico_attention_red.png" alt="">
              ${newTitle}
              </a>
              `;
              //一番最新のものを表示させるため、ループを抜ける
              break;
            }
          }
        } catch (err) {
          console.log("通信失敗…");
        }
      }
    });
  };
  touHdrNews();
}
