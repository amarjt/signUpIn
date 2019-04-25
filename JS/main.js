$(document).ready(function () {
    $("#signUpOverlayBtn").click(function (e) {
        e.preventDefault();
        $("#signIn").css("left", "50vw");
        $("#signUp").css({
            "opacity": "1",
            "z-index": "4",
            "left": "50vw"
        });
        $("#signUpOverlay").css({
            "z-index": "1",
            "opacity": ".1"
        });
        // $("#signUpOverlay .overlay-content").css("opacity", "0");
        // $("#signUpOverlay .overlay-content").css("margin-left", "20rem");
        $(".row").css("left", "0vw");

    });
    $("#signIpOverlayBtn").click(function (e) {
        e.preventDefault();
        $("#signIn").css("left", "0vw");
        $("#signUp").css({
            "opacity": ".5",
            "z-index": "0",
            "left": "0vw",
        });
        $("#signUpOverlay").css({
            "z-index": "3",
            "opacity": "1",
        });
        $(".row").css("left", "50vw");
        // $("#signInOverlay .overlay-content").css("opacity", "0");
        // $("#signInOverlay .overlay-content").css("margin-right", "20rem");

    });
});