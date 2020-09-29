"use strict";

if ('objectFit' in document.documentElement.style === false) {
  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function (image) {
      (image.runtimeStyle || image.style).background = 'url("' + image.src + '") no-repeat 50%/' + (image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'));
      image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';
    });
  });
}

(function ($, window, document) {
  $("body").on("click", ".js_scroll", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault(); //забираем идентификатор бока с атрибута href

    var id = $(this).attr("href"),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top; //анимируем переход на расстояние - top за 1500 мс

    $("body,html").animate({
      scrollTop: top
    }, 700);
  });
  $(function () {});
})(window.jQuery, window, document);

(function ($, window, document) {
  var catalogCls = {
    btn: $(".js_catalog-btn"),
    btn_daily: $(".js_catalog_main-daily--btn"),
    btn_erotic: $(".js_catalog_main-erotic--btn"),
    section_daily: $(".js_catalog_main-daily"),
    section_erotic: $(".js_catalog_main-erotic"),
    btn_size: $(".js_catalog_card-sizes li"),
    btn_color: $(".js_catalog_card-colors li")
  };

  function catalog() {
    catalogCls.btn.click(function () {
      var $this = $(this);

      if ($this.is(".js_catalog_main-daily--btn")) {
        catalogCls.btn_erotic.removeClass("js_active");
        catalogCls.btn_daily.addClass("js_active");
        $(".js_catalog_main-daily").removeClass("js_hidden");
        $(".js_catalog_main-erotic").addClass("js_hidden");
      } else {
        catalogCls.btn_daily.removeClass("js_active");
        catalogCls.btn_erotic.addClass("js_active");
        $(".js_catalog_main-daily").addClass("js_hidden");
        $(".js_catalog_main-erotic").removeClass("js_hidden");
      }
    });
  }

  function catalogSize() {
    catalogCls.btn_size.click(function () {
      var $this = $(this);

      if (!$this.is(".js_Unavailable")) {
        catalogCls.btn_size.removeClass("js_active");
        $this.addClass("js_active");
      }
    });
  }

  function catalogColor() {
    catalogCls.btn_color.click(function () {
      var $this = $(this);
      catalogCls.btn_color.removeClass("js_active");
      $this.addClass("js_active");
    });
  }

  function catalogOrder() {
    $(".js_card-order").click(function () {
      var $this = $(this);
      var size = $this.closest(".js_catalog_card").find(".js_catalog_card-sizes li.js_active").text();
      var title = $this.closest(".js_catalog_card").find(".js_catalog_card-title").text();
      var color = $this.closest(".js_catalog_card").find(".js_catalog_card-colors li.js_active").length;
      var img = $this.closest(".js_catalog_card").find(".js_catalog_card-img").attr("src");
      var cost_old = $this.closest(".js_catalog_card").find(".js_catalog_card-costs strike").text();
      var cost_new = $this.closest(".js_catalog_card").find(".js_catalog_card-costs strong").text();

      if (size !== "" && color) {
        $.fancybox.open($("#popup"), {
          touch: false
        });
      }

      $(".js_popup_media-img")[0].setAttribute("src", img);
      $(".js_popup-cost p").html("<strike>" + cost_old + "</strike> <strong>" + cost_new + "</strong>");
      $(".js_popup-size li").text(size);
      $(".js_popup-title").text(title);
    });
  }

  $(function () {
    catalog();
    catalogSize();
    catalogColor();
    catalogOrder();
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  $(function () {
    $("head").prepend('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />');
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  $(function () {
    //show content after loaded page
    $("body").css("opacity", "1"); // activate lazy load

    $(".lazy").Lazy({
      threshold: 100
    });
  });
})(window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map
