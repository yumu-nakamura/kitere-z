/***************************************************************************
 * 
 * 全体共通
 * 
****************************************************************************/

$(function(){
  /**
   * ログイン時、ログインテキストをマイページに変更
   */
  const loginFlagFunc = () => {
    //ログイン時の属性「data-member-login」を取得
    const loginFlag = $("body").attr("data-member-login");
    //ログイン時の場合
    if(loginFlag === "true") {
      //ログインテキストをマイページに変更
      $(".header_ico .login").find("p").text("MY PAGE");
    }
  }
  loginFlagFunc();

  /**
   * スムーススクロール設定
   */
  $('a[href^="#"]').click(function () {
    const speed = 400;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  /**
   * フェードイン設定
   */
  $(window).on('scroll', function() {
    //class名「fade」に反応
    $('.fade').each(function() {
    var elemPosition = $(this).offset().top,
      windowHeight = $(window).height(),
      scroll = $(window).scrollTop();
      //画面1/4に入ると発火
      if (scroll > elemPosition - windowHeight + windowHeight / 4) {
        //class名「viewed」が付与
        $(this).addClass("viewed");
      }
    });
  });

  /**
   * TOPへ戻るボタン設定
   */
  $(window).on('load', () => {
    /**
     * @param {string} fixedBtn 
     */
    const fixedBtnFunc = fixedBtn => {
      //TOPへ戻るボタンを取得
      const pagetop = $(fixedBtn);
      //#sysMainまでの高さを取得
      const sysMainOffset = $('#sysMain').offset().top;
      //スクロール時
      $(window).scroll(function () {
        //sysMainを超えると
        if ($(this).scrollTop() > sysMainOffset) {
          //フェードイン
          pagetop.fadeIn();
        }else {
          //フェードアウト
          pagetop.fadeOut();
        }
      });
    }
    fixedBtnFunc(".p_fixed_btn");
    fixedBtnFunc(".p_fixed_btn_reink");
  });

  /***************************************************************************
   * 
   * フォームページ共通
   * 
  ****************************************************************************/
  const formRequiredFunc = () => {
    /**
     * お問い合わせ/新規会員登録/マイページ/カートの「必須」を「*」に変更
     * @param {string} requiredIndex 
     * @param {string} requiredClass 
     * @param {string} requiredAttr 
     */
      const requiredFunc = (requiredIndex,requiredClass,requiredAttr)=> {
        //bodyのIDを取得(カートページの場合Class)
        const bodyForm = $("body").attr(requiredAttr);
        //お問い合わせ/新規会員登録/マイページ/カートの場合「必須」を「*」に変更
        bodyForm === requiredIndex
        ? $(requiredClass).each(function() { 
            $(this).text("*"); 
        })
        : null;
      }
      /**
       * お問い合わせ/新規会員登録/マイページの引数
       */
      const formRequire = ()=> {
          //お問い合わせページ
          requiredFunc("sysFormIndex",".sysRequired","id");
          //新規会員登録ページ
          requiredFunc("sysMemberRegisterIndex",".sysRequired","id");
          //マイページページ
          requiredFunc("sysMypageEditMember",".sysRequired","id");
          requiredFunc("sysMypageEditDelivery",".sysRequired","id");
          requiredFunc("sysMypageEditDeliveryinput",".sysRequired","id");
      }
      formRequire();
      /**
       * カートページの引数
       */
      const cartRequire = ()=> {
          //カートページ
          requiredFunc("sysOpcBody",".opcCommonRequireLabel","class");
      }
      cartRequire();
  } 
  formRequiredFunc();

  /***************************************************************************
   * 
   * 新規会員登録ページ
   * 
  ****************************************************************************/
  const formRegistFunc = () => {
    //bodyのIDを取得
    const bodyRegist = $("body").attr("id");
    //新規会員登録ページの場合
    if(bodyRegist === "sysMemberRegisterIndex") {
      /*
      * 項目の説明文挿入
      */ 
      //お名前
      $(".sysFormItem.sysName .sysFormField").prepend("<p>例: 山田 愛子</p>");
      //お名前 フリガナ
      $(".sysFormItem.sysNameKana .sysFormField").prepend("<p>例: ヤマダ アイコ</p>");
      //郵便番号
      $(".sysFormItem.sysZipcode .sysFormField").prepend("<p>1040061 ※半角数字</p>");
      //都道府県
      $(".sysFormItem.sysPrefStateId .sysFormField").prepend("<p>都道府県を選択してください。</p>");
      //群市区
      $(".sysFormItem.sysAddress1 .sysFormField").prepend("<p>例: 中央区</p>");
      //それ以降の住所(番地、部屋番号まで正確に)
      $(".sysFormItem.sysAddress2 .sysFormField").prepend("<p>例: 銀座4丁目1-2 レジデンス銀座101</p>");
      //電話番号(半角数字ハイフンなし)
      $(".sysFormItem.sysTel .sysFormField").prepend("<p>例: 09012345678 ※半角数字</p>");
      //メールアドレス
      $(".sysFormItem.sysMailaddress .sysFormField").prepend("<p>例: aiko-yamada@example.com ※半角英数字</p>");
      //会員パスワード(半角英数6文字以上)
      $(".sysFormItem.sysMemberPassword .sysFormField:nth-of-type(1)").prepend("<p>※半角英数6文字以上</p>");
      //会員パスワード(半角英数6文字以上) 確認用
      $(".sysFormItem.sysMemberPassword .sysFormField:nth-of-type(2)").prepend("<p>確認のためもう一度ご入力ください。</p>");
      //生年月日(半角数字)
      $(".sysFormItem.sysBirthday .sysFormField").prepend("<p>※半角英数字</p>");
      //性別
      $(".sysFormItem.sys1 .sysFormField").prepend("<p>性別を選択してください。</p>");
      //メルマガ購読
      $(".sysFormItem.sysAcceptMailmagazine .sysFormField").prepend("<p>メルマガ購読ご希望の方はチェックをつけてください。</p>");

      /**
       * 必須項目をラベルの横に移動する
       * @param {string} formLabel 
       * @param {string} formRequired 
       */
      const separateRequiredFunc = (formLabel,formRequired) => {
        //必須項目をラベルの横に移動する
        $(formLabel).append(formRequired);
      }
      separateRequiredFunc(".sysFormItem.sys5 .sysFormLabel",$(".sysFormItem.sys5 .sysRequired"));

      /*
      * 会員規約をボタンの上に移動
      */ 
      $("div#sysMain h2 + div").addClass("agreeItem");
      $("div#sysMain h2 + .sysErrorMessage + div").addClass("agreeItem");
      $(".sysNextSubmit").before($(".agreeItem"));
    }
  }
  formRegistFunc();

  /***************************************************************************
   * 
   * カタログページ
   * 
  ****************************************************************************/
  const catalogFunc = ()=> {
    //bodyのClass名を取得
    const bodyCatalog = $("body").attr("class");
    //カタログページの場合
    if(bodyCatalog === "form-catalog") {
      //住所検索文言を変更
      $(".sysFormItem.sys2 .sysFormField .sysButton").text("住所検索");
      //同意文言を作成
      $(".sysFormItem.sys14 .sysFormField label").prepend(`
      <div class='catalog_agreement'>
      <p>【カタログ請求】（制定：2021年5月27日）<br>
      個人情報の取扱いに関する以下の点にご同意いただき、フォームに必要事項をご記入の上送信して下さい。</p>
      <p>
      （1）取得した個人情報については、カタログ送付およびより良いサービス提供の範囲内で利用します。<br>
      （2）当Webサイトのやり取りで、利用端末のIPアドレスや入力情報をCookieファイルで使用します。<br>
      （3）当カタログ請求フォームの記入は任意です。必須項目に記入がない場合、カタログ送付が受けられない場合があります。<br>
      （4）当社の個人情報の取り扱い詳細ならびに開示等の請求につきましては、<a href='https://www.daishin.gr.jp/corporate/privacy.html' target='_blank'>「当社が保有する個人情報の取扱いに関する事項」（https://www.daishin.gr.jp/corporate/privacy.html）</a>の■個人情報の開示について、■個人情報の訂正、追加又は削除、利用の停止、消去及び第三者への提供の停止の請求、■苦情及び相談窓口をご確認ください。<br>
      （5）委託については、「当社が保有する個人情報の取扱いに関する事項」（https://www.daishin.gr.jp/corporate/privacy.html）の■個人情報の外部委託をご確認ください。
      </p>
      <p>
      株式会社　大進本店 　TEL:082-221-4111<br>
      個人情報保護管理者　管理部情報システム課課長</p>
      </div>
      `)
    } 
  }
  catalogFunc();


});