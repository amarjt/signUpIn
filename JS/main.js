$(document).ready(function () {

    $(window).resize(function(){location.reload();});

    if ($(window).width() <= 768) {
        $("#signUpOverlayBtn").click(function (e) {
            e.preventDefault();
            $("#signIn").css({
                "transform": "translateY(30vh)",
            });
            $("#signUp").css({
                "z-index": "1",
                "transform": "translateY(30vh)",
            });
            $("#signUpOverlay").css({
                "z-index": "0",
                "transform": "translateY(-70vh)",
            });
            $("#signUpOverlay .overlay-content").css({
                "margin-top": "30rem",
            });
            $("#signInOverlay").css({
                "z-index": "1",
                "transform": "translateY(-70vh)",
            });
            $("#signInOverlay .overlay-content").css({
                "margin-top": "0rem",
            });
        });

        $("#signIpOverlayBtn").click(function (e) {
            e.preventDefault();
            $("#signIn").css({
                "transform": "translateY(0vh)",
            });
            $("#signUp").css({
                "z-index": "0",
                "transform": "translateY(0vh)",
            });
            $("#signUpOverlay").css({
                "z-index": "1",
                "transform": "translateY(0vh)",
            });
            $("#signUpOverlay .overlay-content").css({
                "margin-top": "0rem",
            });
            $("#signInOverlay").css({
                "z-index": "0",
                "transform": "translateY(0vh)",
            });
            $("#signInOverlay .overlay-content").css({
                "margin-top": "-30rem",
            });
        });
    } else {
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
    }
});