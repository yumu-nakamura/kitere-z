/**
 * Store Booth セクションのデータ
 * * ロゴ画像は "logo"フィールドに指定。空文字の場合は 「images/booth/logo_${id}.jpg」 を取得。
 * * メイン画像は "thumb"フィールドに指定。空文字の場合は 「images/booth/img_${id}.jpg」 を取得。
 * ! 原則、上記は空文字として運用。特別にファイル名を変更する場合のみ、上記フィールドに空文字以外を指定する。
 */
module.exports = {
  data: [
    {
      id: 1,
      href: "https://www.shiseido.co.jp/sw/beautyinfo/DB008871/",
      logo: "",
      logo_alt: "SHISEIDO",
      thumb: "",
      thumb_alt: "SHISEIDO",
      title: "",
      detail: `「自分美」発見体験<br>
      【パーソナルカラー診断コース】<br>
      【眉体験コース】<br>
      【香りの癒しコーナー】`,
    },
    {
      id: 2,
      href: "https://hiryo-yasanno-tomato.com/",
      logo: "",
      logo_alt: "ひりょうやさんのトマト",
      thumb: "",
      thumb_alt: "ひりょうやさんのトマト",
      title: "",
      detail: `一度食べると忘れられない「ミニトマト」と「トマトジュース」の試食・販売を行います。皆様のご来場お待ちしております♪`,
    },
    {
      id: 3,
      href: "https://nextbody-gym.com",
      logo: "",
      logo_alt: "NEXT BODY",
      thumb: "",
      thumb_alt: "NEXT BODY",
      title: "",
      detail: `美しく健康的なカラダを手に入れるならNEXT BODY（ネクストボディ）。現在2週間トライアルキャンペーン中！`,
    },
    {
      id: 4,
      href: "https://www.elm-clinic.jp/",
      logo: "",
      logo_alt: "美容皮膚科 エルムクリニック",
      thumb: "",
      thumb_alt: "美容皮膚科 エルムクリニック",
      title: "",
      detail: `美容皮膚科として広島という地で開院して12年のエルムクリニックがイベントに初参加。オリジナル医療化粧品もご紹介します♪`,
    },
  ],
};
