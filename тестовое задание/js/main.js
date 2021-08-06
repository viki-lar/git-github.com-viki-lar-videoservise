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

    var modalButton = $("[data-togle=modal]");
    var closemodalButton = $("[data-togle=close-modal]");
    modalButton.on("click", openModal);
    closemodalButton.on("click", closeModal);

    function openModal() {
        var modalOverlay = $(".modal-overlay");
        var modalDialog = $(".modal-dialog");
        modalOverlay.addClass("modal-overlay-visible");
        modalDialog.addClass("modal-dialog-visible");
    };
    function closeModal(event) {
        event.preventDefault();
        var modalOverlay = $(".modal-overlay");
        var modalDialog = $(".modal-dialog");
        modalOverlay.removeClass("modal-overlay-visible");
        modalDialog.removeClass("modal-dialog-visible");
    }
});