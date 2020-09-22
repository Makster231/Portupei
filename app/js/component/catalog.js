(function ($, window, document) {
  let catalogCls = {
    btn: $(".js_catalog-btn"),
    btn_daily: $(".js_catalog_main-daily--btn"),
    btn_erotic: $(".js_catalog_main-erotic--btn"),

    section_daily: $(".js_catalog_main-daily"),
    section_erotic: $(".js_catalog_main-erotic"),

    btn_size: $(".js_catalog_card-sizes li"),
    btn_color: $(".js_catalog_card-colors li"),
  };

  function catalog() {
    catalogCls.btn.click(function () {
      let $this = $(this);
      if ($this.is(".js_catalog_main-daily--btn")) {
        catalogCls.btn_erotic.removeClass("js_active");
        catalogCls.btn_daily.addClass("js_active");

        $(".js_catalog_main-daily").removeClass("js_hidden");
        $(".js_catalog_main-erotic").addClass("js_hidden");
      }
       else {
        catalogCls.btn_daily.removeClass("js_active");
        catalogCls.btn_erotic.addClass("js_active");

        $(".js_catalog_main-daily").addClass("js_hidden");
        $(".js_catalog_main-erotic").removeClass("js_hidden");
      }
    });
  }

  function catalogSize() {
    catalogCls.btn_size.click(function () {
      let $this = $(this);

      if (!$this.is(".js_Unavailable")) {
        catalogCls.btn_size.removeClass("js_active");
        $this.addClass("js_active");
      }
    });
  }

  function catalogColor() {
    catalogCls.btn_color.click(function () {
      let $this = $(this);

      catalogCls.btn_color.removeClass("js_active");
      $this.addClass("js_active");
    });
  }

  $(() => {
    catalog();
    catalogSize();
    catalogColor();
  });
})(window.jQuery, window, document);
