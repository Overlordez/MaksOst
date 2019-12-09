var $page = $("html, body");
$("a.anchor").click(function () {
    $page.animate(
        {
            scrollTop: $($.attr(this, "href")).offset().top - 80
        },
        500
    );
    return false;
});