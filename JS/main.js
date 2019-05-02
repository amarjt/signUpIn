$(document).ready(function () {
    $("#signUpOverlayBtn").click(function (e) {
        e.preventDefault();
        $("#signIn").css("left", "50vw");
        $("#signUp").css({
            "z-index": "1",
            "left": "50vw"
        });
        $("#signUpOverlay").css({
            "z-index": "0",
            "left": "0vw",
        });
        $("#signUpOverlay .overlay-content").css({
            "margin-left": "70rem",
        });
        $("#signInOverlay").css({
            "z-index": "1",
            "left": "0vw",
        });
        $("#signInOverlay .overlay-content").css({
            "margin-left": "0rem",
        });
    });

    $("#signIpOverlayBtn").click(function (e) {
        e.preventDefault();
        $("#signIn").css("left", "0vw");
        $("#signUp").css({
            "z-index": "0",
            "left": "0vw",
        });
        $("#signUpOverlay").css({
            "z-index": "1",
            "left": "50vw",
        });
        $("#signUpOverlay .overlay-content").css({
            "margin-left": "0rem",
        });
        $("#signInOverlay").css({
            "z-index": "0",
            "left": "50vw",
        });
        $("#signInOverlay .overlay-content").css({
            "margin-left": "-70rem",
        });
    });
});