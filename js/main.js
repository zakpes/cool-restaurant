$(function() {

    var $panel = $(".panel-heading");

    $panel.click(function() {

        var $this = $(this);

        if ($this.children("span").hasClass("rotate-caret")) {
            $(".panel-heading span").removeClass("rotate-caret");
        } else {
            $(".panel-heading span").removeClass("rotate-caret");
            $this.children("span").addClass("rotate-caret");
        }

    })

    $(".panel-body img").hide();

    $(".panel-body ul li").mouseenter(function() {

        var $this = $(this);

        $this.children("img").fadeIn(300);
    }).mouseleave(function() {

        var $this = $(this);

        $this.children("img").fadeOut(300);
    })

    // Flip menu
    $(".page, .panel-body").click(function () {

        var $this = $(this);
        var $zNum = $this.attr("rel");

        if ($this.hasClass("flip-page")) {

            $this.removeClass("flip-page");
            // $this.css("z-index", "0");
        } else {

            $this.addClass("flip-page");
            // $this.css("z-index", $zNum);
        }
    })

    // Flip menu return to front page
    // $(".panel-body:first-child").click(function () {

    //     var $this = $(this);

    //     $(".panel-body").removeClass("flip-page").css("z-index", "0");
    // })

})
