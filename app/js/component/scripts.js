(function ($, window, document) {
  $(() => {
    //show content after loaded page
    $("body").css("opacity", "1");
    // activate lazy load

    $(".lazy").Lazy({
      threshold: 100,
    });
  });
})(window.jQuery, window, document);
