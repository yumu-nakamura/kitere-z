export function userJs() {
  $(function () {
    // 00: システムページ内にタイトル文字を入力
    $("#sysMain").append("<div class='clearfix'></div>");
    $("#sysFormConfirm #sysMain").prepend(
      "<div class='ttl_cmn_wrap'><h1 class='ttl_cmn'>入力内容確認</h1></div>",
    );
    $("#sysMemberRegisterConfirm #sysMain").prepend(
      "<div class='ttl_cmn_wrap'><h1 class='ttl_cmn'>入力内容確認</h1></div>",
    );
    $("#sysBasket #sysMain").prepend(
      "<div class='ttl_cmn_wrap'><h1 class='ttl_cmn'>カート情報</h1></div>",
    );
    $("#sysMemberRegisterIndex #sysMain").prepend(
      "<div class='ttl_cmn_wrap'><h1 class='ttl_cmn'>新規会員登録</h1></div>",
    );
    // $("#sysMypageLogin #sysMain").prepend("<div class='ttl_cmn_wrap'><h1 class='ttl_cmn'><span class='ttl_cmn_en'>LOG IN</span><span class='ttl_cmn_line'><span>マ</span></span>イページ</h1></div>");
    $("#sysMypageLogout #sysMain").prepend(
      "<div class='ttl_cmn_wrap'><h1 class='ttl_cmn'>ログアウト</h1></div>",
    );
    $("#sysDestination #sysMain").prepend(
      "<div class='ttl_cmn_wrap'><h1 class='ttl_cmn'>配送先の選択</h1></div>",
    );
    // $("#sysMypageIndex #sysMain").prepend("<div class='ttl_cmn_wrap'><h1 class='ttl_cmn'><span class='ttl_cmn_en'>MY PAGE</span><span class='ttl_cmn_line'><span>マ</span></span>イページ</h1></div>");
    $(".sysMypage #sysMain").prepend(
      "<div class='ttl_cmn_wrap'><h1 class='ttl_cmn'>マイページ</h1></div>",
    );

    $("#sysMemberRegisterRegister #sysMain").prepend(
      "<div class='ttl_cmn_wrap'><h1 class='ttl_cmn'>新規登録完了</h1></div>",
    );
    $(".form-inquiry #sysMain").prepend(
      "<div class='ttl_cmn_wrap'><h1 class='ttl_cmn'>お問い合わせ</h1></div>",
    );
    $(".form-mailmag #sysMain").prepend(
      "<div class='ttl_cmn_wrap'><h1 class='ttl_cmn'>メールマガジン</h1></div>",
    );
    $(".form-catalog #sysMain").prepend(
      "<div class='ttl_cmn_wrap'><h1 class='ttl_cmn'>カタログ請求フォーム</h1></div>",
    );
    // $("#sysFormThanks #sysMain").prepend("<div class='ttl_cmn_wrap'><h1 class='ttl_cmn'>送信完了</h1></div>");
    // $("#sysRegi #sysMain").prepend("<div class='ttl_cmn_wrap'><h1 class='ttl_cmn'><span class='ttl_cmn_en'>LOG IN</span><span class='ttl_cmn_line'><span>ロ</span></span>グイン</h1></div>");

    //03カート情報のポップアップ
    //カートアイコンに商品数表示
    function cartInfo(target) {
      function rootUrl() {
        if ("ssl.aispr.jp" === document.location.hostname) {
          var u = document.location.pathname.split("/")[1];
          return document.location.origin + "/" + u;
        }
        return document.location.origin;
      }
      function headerInfo() {
        $(".c_count").appendTo($(".p_header .cart,.p_header_reink .cart"));
      }

      function init() {
        var site_url = rootUrl();
        $("<p>", {
          class: "cartTxt",
          html: '<button id="itemCount" class="itemCount">2</button>',
        }).appendTo($(".p_header .cart,.p_header_reink .cart"));
        headerInfo($(".c_count"));
      }
      init();
    }
    cartInfo($(".h_cart"));

    //06 ページロード時にカート内の商品数を取得して表示する処理
    function itemCount(target) {
      var numberBox;
      var itemNumber;
      var items;

      //カート内の商品数が0でなければ、ポップアップと商品数を表示
      function count() {
        numberBox = $(".sysCartInfoItemCount dd span");
        itemNumber = numberBox.text();
        items = Number(itemNumber);

        if (items != 0 && items != undefined) {
          // target.css({ 'display': 'inline-block'});
          $(".cartTxt .itemCount").addClass("is_active").addClass("is_move");
          target.text(items);
        }
      }

      function init() {
        //商品詳細ページからカートに商品を追加した場合に、商品数表示を更新
        $("#sysItemDetail .sysCartButton").on({
          click: function () {
            setTimeout(count, 3000);
          },
        });

        //商品カテゴリーページからカートに商品を追加した場合に、商品数表示を更新
        $("#sysItemCategory .sysCartButton").on({
          click: function () {
            setTimeout(count, 3000);
          },
        });

        count();
      }

      init();
    }

    //itemCount(ポップアップアイコン)をターゲットとしてitemCount関数を呼び出し
    itemCount($("#itemCount"));
    //PCとSPでパーツが違うのでトリガーを各々準備
    itemCount($("#itemCount2"));

    //07 商品リストの高さ揃え
    (function ($) {
      $.fn.tile = function (columns) {
        var tiles,
          $tile,
          max,
          c,
          h,
          last = this.length - 1,
          s,
          method;
        if (!columns) columns = this.length;
        this.each(function () {
          s = this.style;
          if (s.removeProperty) s.removeProperty("height");
          else if (s.removeAttribute) s.removeAttribute("height");
        });

        return this.each(function (i) {
          c = i % columns;
          if (c == 0) tiles = [];
          $tile = tiles[c] = $(this);
          method =
            $tile.css("box-sizing") == "border-box"
              ? $.fn.outerHeight
              : $.fn.innerHeight;
          h = method.apply($tile);
          if (c == 0 || h > max) max = h;
          if (i == last || c == columns - 1) {
            $.each(tiles, function () {
              method.apply(this, [max]);
            });
          }
        });
      };
    })(jQuery);

    var object = $(".sysItemList li .sysItemName");
    var target = object.parent("div");
    target.addClass("itemDetailWrap");

    $(window).load(function () {
      target.tile();
    });

    $(window).resize(function () {
      target.tile();
    });
  });

  $(function () {
    /***************************************************************************
     *
     * 全体共通
     *
     ****************************************************************************/

    /**
     * ログイン時、ログインテキストをマイページに変更
     */
    const loginFlagFunc = () => {
      //ログイン時の属性「data-member-login」を取得
      const loginFlag = $("body").attr("data-member-login");
      //ログイン時の場合
      if (loginFlag === "true") {
        //ログインテキストをマイページに変更
        $(".header_ico .login").find("p").text("MY PAGE");
      }
    };
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
    $(window).on("scroll", function () {
      //class名「fade」に反応
      $(".fade").each(function () {
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
    $(window).on("load", () => {
      /**
       * @param {string} fixedBtn
       */
      const fixedBtnFunc = (fixedBtn) => {
        //TOPへ戻るボタンを取得
        const pagetop = $(fixedBtn);
        //#sysMainまでの高さを取得
        const sysMainOffset = $("#sysMain").offset().top;
        //スクロール時
        $(window).scroll(function () {
          //sysMainを超えると
          if ($(this).scrollTop() > sysMainOffset) {
            //フェードイン
            pagetop.fadeIn();
          } else {
            //フェードアウト
            pagetop.fadeOut();
          }
        });
      };
      fixedBtnFunc(".p_fixed_btn");
      fixedBtnFunc(".p_fixed_btn_reink");
    });

    /***************************************************************************
     *
     * レイアウト共通
     *
     ****************************************************************************/

    /*
     * 【テンプレート】TOPページ用（2カラム)
     */

    /*************************
     * ヘッダー検索移動
     **************************/
    const hSearch = () => {
      const headerSearch = $("#sysHeader .s_search");
      const headerSearchPlace = $(".header_search");
      headerSearchPlace.append(headerSearch);
    };

    /*************************
     * カテゴリ PC/SP間の移動設定
     **************************/
    const catSwitchInit = () => {
      const drawerPrice = $(".c_price");
      const drawerPricePlace = $(".drawer_price");

      const drawerScene = $(".c_scene,.c_scene_txt");
      const drawerScenePlace = $(".drawer_scene");

      const drawerRelation = $(".c_relation");
      const drawerRelationPlace = $(".drawer_relation");

      const drawerCat = $(".c_cat_txt");
      const drawerCatPlace = $(".drawer_cate");

      const catFunc = (catPlace, catElm) => {
        catPlace.append(catElm);
      };
      $(window).on("load resize", () => {
        //スマホ時はサイドカテゴリはドロワー内に表示
        if (window.matchMedia("(max-width: 1160px)").matches) {
          catFunc(drawerPricePlace, drawerPrice);
          catFunc(drawerScenePlace, drawerScene);
          catFunc(drawerRelationPlace, drawerRelation);
          catFunc(drawerCatPlace, drawerCat);
          //pc時はサイドに表示
        } else {
          $("#sysAside")
            .append(drawerPrice)
            .append(drawerScene)
            .append(drawerCat)
            .append(drawerRelation);
        }
      });
    };

    /**************************************************
     * ドロワー/SP ナビゲーション処理
     **************************************************/
    const navFixedInit = () => {
      //ドロワーのボタンをクリック時対応
      $("#drawerClose,#drawerBtn").click(() => {
        $(".p_drawer").removeClass("open");
        $("#drawerMenu").removeClass("is_active");
        $("#drawerSearchMenu").removeClass("is_active");

        $("#menu").find("p").text("MENU");
        $("#search").find("p").text("SEARCH");
        $("#menu,#search").removeClass("is_active");
      });

      //SP 下部ナビゲーション 表示設定
      const drawerSearchSwitch = (searchElm, searchPlace) => {
        const drawerSearch = $(searchElm);
        const drawerSearchPlace = $(searchPlace);
        drawerSearchPlace.append(drawerSearch);
      };
      drawerSearchSwitch("#sysFooter .s_search", ".drawer_search");

      const navFixedFunc = (navElm, drawerElm) => {
        //SP時フッターのメニュー/検索をクリックしたら
        $(navElm).click(() => {
          const isOpen = $(navElm).hasClass("is_active");
          //class「is_active」を削除
          $("#menu,#search").removeClass("is_active");

          //初期の文言を設定
          $("#menu").find("p").text("MENU");
          $("#search").find("p").text("SEARCH");
          //閉じた状態
          if (!isOpen) {
            //CLOSE文言に変更
            $(navElm).find("p").text("CLOSE");
            $("#drawerMenu").removeClass("is_active");
            $("#drawerSearchMenu").removeClass("is_active");
            //menu、searchにthisでclass「is_active」を付与
            $(navElm).addClass("is_active");
            //ドロワーにclass「is_active」が付与されて表示状態に
            $(drawerElm).addClass("is_active");
            //ドロワーにclass「open」が付与されて表示状態に
            $(".p_drawer").addClass("open");
            //もしmenuドロワーにclass「is_active」があれば
            if ($("#drawerMenu").hasClass("is_active")) {
              //関数drawerSearchSwitchが作動して、カテゴリが移動する
              drawerSearchSwitch("#sysFooter .s_search", ".drawer_search");
              //もし検索ドロワーにclass「is_active」があれば
            } else if ($("#drawerSearchMenu").hasClass("is_active")) {
              //関数drawerSearchSwitchが作動して、カテゴリが移動する
              drawerSearchSwitch("#sysFooter .s_search", ".drawer_search02");
            }
            //開いた状態
          } else {
            //開く文言に変更
            $("#menu").find("p").text("MENU");
            $("#search").find("p").text("SEARCH");
            $(".p_drawer").removeClass("open");
            $("#drawerMenu").removeClass("is_active");
            $("#drawerSearchMenu").removeClass("is_active");
            //menu、searchにthisでclass「is_active」を付与
            $(navElm).removeClass("is_active");
            //ドロワーにclass「is_active」が付与されて表示状態に
            $(drawerElm).removeClass("is_active");
            //ドロワーにclass「open」が付与されて表示状態に
            $(".p_drawer").removeClass("open");
            //もしmenuドロワーにclass「is_active」があれば
            if ($("#drawerMenu").hasClass("is_active")) {
              //関数drawerSearchSwitchが作動して、カテゴリが移動する
              drawerSearchSwitch("#sysFooter .s_search", ".drawer_search");
              //もし検索ドロワーにclass「is_active」があれば
            } else if ($("#drawerSearchMenu").hasClass("is_active")) {
              //関数drawerSearchSwitchが作動して、カテゴリが移動する
              drawerSearchSwitch("#sysFooter .s_search", ".drawer_search02");
            }
          }
        });
      };
      navFixedFunc("#menu", "#drawerMenu");
      navFixedFunc("#search", "#drawerSearchMenu");
    };

    /*************************
     * カートアイコン処理
     **************************/
    const cartIconFunc = () => {
      $(window).load(function () {
        let cartIconTxt = $(".c_count .sysCartInfoItemCount dd span").text();
        cartIconTxt = Number(cartIconTxt);
        if (cartIconTxt > 0) {
          $(".cartTxt .itemCount").removeClass("is_move");
          $(".cartTxt .itemCount").addClass("is_active");
        }
      });
    };

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
      const requiredFunc = (requiredIndex, requiredClass, requiredAttr) => {
        //bodyのIDを取得(カートページの場合Class)
        const bodyForm = $("body").attr(requiredAttr);
        //お問い合わせ/新規会員登録/マイページ/カートの場合「必須」を「*」に変更
        bodyForm === requiredIndex
          ? $(requiredClass).each(function () {
              $(this).text("*");
            })
          : null;
      };
      /**
       * お問い合わせ/新規会員登録/マイページの引数
       */
      const formRequire = () => {
        //お問い合わせページ
        requiredFunc("sysFormIndex", ".sysRequired", "id");
        //新規会員登録ページ
        requiredFunc("sysMemberRegisterIndex", ".sysRequired", "id");
        //マイページページ
        requiredFunc("sysMypageEditMember", ".sysRequired", "id");
        requiredFunc("sysMypageEditDelivery", ".sysRequired", "id");
        requiredFunc("sysMypageEditDeliveryinput", ".sysRequired", "id");
        requiredFunc("sysMypageMessageCard", ".sysRequired", "id");
        requiredFunc("sysSocialGiftBody", ".sysRequired", "class");
      };
      formRequire();
      /**
       * カートページの引数
       */
      const cartRequire = () => {
        //カートページ
        requiredFunc("sysOpcBody", ".opcCommonRequireLabel", "class");
      };
      cartRequire();
    };
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
      if (bodyRegist === "sysMemberRegisterIndex") {
        /*
         * 項目の説明文挿入
         */
        //お名前
        $(".sysFormItem.sysName .sysFormField").prepend("<p>例: 山田 愛子</p>");
        //お名前 フリガナ
        $(".sysFormItem.sysNameKana .sysFormField").prepend(
          "<p>例: ヤマダ アイコ</p>",
        );
        //郵便番号
        $(".sysFormItem.sysZipcode .sysFormField").prepend(
          "<p>1040061 ※半角数字</p>",
        );
        //都道府県
        $(".sysFormItem.sysPrefStateId .sysFormField").prepend(
          "<p>都道府県を選択してください。</p>",
        );
        //群市区
        $(".sysFormItem.sysAddress1 .sysFormField").prepend(
          "<p>例: 中央区</p>",
        );
        //それ以降の住所(番地、部屋番号まで正確に)
        $(".sysFormItem.sysAddress2 .sysFormField").prepend(
          "<p>例: 銀座4丁目1-2 レジデンス銀座101</p>",
        );
        //電話番号(半角数字ハイフンなし)
        $(".sysFormItem.sysTel .sysFormField").prepend(
          "<p>例: 09012345678 ※半角数字</p>",
        );
        //メールアドレス
        $(".sysFormItem.sysMailaddress .sysFormField").prepend(
          "<p>例: aiko-yamada@example.com ※半角英数字</p>",
        );
        //会員パスワード(半角英数6文字以上)
        $(
          ".sysFormItem.sysMemberPassword .sysFormField:nth-of-type(1)",
        ).prepend("<p>※半角英数6文字以上</p>");
        //会員パスワード(半角英数6文字以上) 確認用
        $(
          ".sysFormItem.sysMemberPassword .sysFormField:nth-of-type(2)",
        ).prepend("<p>確認のためもう一度ご入力ください。</p>");
        //生年月日(半角数字)
        $(".sysFormItem.sysBirthday .sysFormField").prepend(
          "<p>※半角英数字</p>",
        );
        //性別
        $(".sysFormItem.sys1 .sysFormField").prepend(
          "<p>性別を選択してください。</p>",
        );
        //メルマガ購読
        $(".sysFormItem.sysAcceptMailmagazine .sysFormField").prepend(
          "<p>メルマガ購読ご希望の方はチェックをつけてください。</p>",
        );

        /**
         * 必須項目をラベルの横に移動する
         * @param {string} formLabel
         * @param {string} formRequired
         */
        const separateRequiredFunc = (formLabel, formRequired) => {
          //必須項目をラベルの横に移動する
          $(formLabel).append(formRequired);
        };
        separateRequiredFunc(
          ".sysFormItem.sys5 .sysFormLabel",
          $(".sysFormItem.sys5 .sysRequired"),
        );

        /*
         * 会員規約をボタンの上に移動
         */
        $("div#sysMain h2 + div").addClass("agreeItem");
        $("div#sysMain h2 + .sysErrorMessage + div").addClass("agreeItem");
        $(".sysNextSubmit").before($(".agreeItem"));
      }
    };
    formRegistFunc();

    /***************************************************************************
     *
     * カタログページ
     *
     ****************************************************************************/
    const catalogFunc = () => {
      //bodyのClass名を取得
      const bodyCatalog = $("body").attr("class");
      //カタログページの場合
      if (bodyCatalog === "form-catalog") {
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
        （4）当社の個人情報の取り扱い詳細ならびに開示等の請求につきましては、<span class="txt_red">「当社が保有する個人情報の取扱いに関する事項」（<a href='https://tou-gift.com/privacypolicy' target='_blank'>https://tou-gift.com/privacypolicy</a>）</span>の■個人情報の開示について、■個人情報の訂正、追加又は削除、利用の停止、消去及び第三者への提供の停止の請求、■苦情及び相談窓口をご確認ください。<br>
        （5）委託については、<span class="txt_red">「当社が保有する個人情報の取扱いに関する事項」（<a href='https://tou-gift.com/privacypolicy' target='_blank'>https://tou-gift.com/privacypolicy</a>）</span>の■個人情報の外部委託をご確認ください。
        </p>
        <p>
        株式会社　大進本店 　TEL:082-221-4111<br>
        個人情報保護管理者　管理部情報システム課課長</p>
        </div>
        `);
      }
    };
    catalogFunc();

    /***************************************************************************
     *
     * 会員情報編集
     *
     ****************************************************************************/
    const formMyEditFunc = () => {
      const bodyForm = $("body").attr("id");
      if (bodyForm === "sysMypageEditConfirm") {
        $(".sysFormLabel").each(function () {
          let labelsTxt = $(this).text();
          $(this).text(labelsTxt.replace(/■/g, ""));
        });
      }
    };
    formMyEditFunc();
  });
}
