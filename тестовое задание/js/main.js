$(document).ready(function () {
    var tabsItem = $(".tabs-item");
    var contentItem = $(".content-item");

    tabsItem.on("click", function (event) {
        var activeContent = $(this).attr("data-target");
        tabsItem.removeClass("tabs-item-active");
        contentItem.removeClass("content-item-active");
        $(activeContent).addClass("content-item-active");
        $(this).addClass("tabs-item-active");
    });
});