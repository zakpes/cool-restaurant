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

})
