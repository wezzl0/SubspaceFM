const img = document.querySelector('img');
img.setAttribute("draggable", false);

//Minimize button
$(".size").click(function (e) {
    var selected = this.name;
    if ($(this).show('slow').parent().siblings().first().css("display") === "none") {
        $(this).parent().siblings().not(".hidden").show('slow');
        $(this).removeClass("big");
        $(this).addClass("small");
    }
    else {
        $(this).parent().siblings().hide('slow');
        $(this).removeClass("small");
        $(this).addClass("big");
    }

    e.stopPropagation();
    return false;
});


$('.topbar').on('mousedown', function (e) {

    var dr = $(this).parent().addClass("dragcur");

    $(this).css("cursor", "move");
    var height = dr.outerHeight();
    var width = dr.outerWidth();
    var ypos = dr.offset().top + height - e.pageY;
    var xpos = dr.offset().left + width - e.pageX;
    $(document.body).on('mousemove', function (e) {
        var itop = e.pageY + ypos - height;
        var ileft = e.pageX + xpos - width;
        if (dr.hasClass("dragcur")) {
            dr.offset({ top: itop, left: ileft });
        }
    }).on('mouseup', function (e) {
        dr.removeClass("dragcur");
    });
});

//show top window
$('.box').click(function () {
    $(".box").each(function () {
        var num = $(this).css("zIndex") - 1;
        $(this).css("zIndex", num.toString());
    });
    $(this).css("zIndex", (100).toString());

});

//show/hide link box
$('#link').click(function () {
    if ($('.linksbox').css("display") === "none") {
        $('.linksbox').show('slow');
        $('.linksbox').css("zIndex", (101).toString());
        $('.linksbox').offset({ top: ($('.streamPlayer').offset().top + 30), left: ($('.streamPlayer').offset().left + 30) });
    }
    else {
        $('.linksbox').hide('slow');
    }
});

//show/hide youtube box
$('#youtube').click(function () {
    if ($('.youtubebox').css("display") === "none") {
        $('.youtubebox').show('slow');
        $('.youtubebox').css("zIndex", (101).toString());
        $('.youtubebox').offset({ top: ($('.streamPlayer').offset().top + 30), left: ($('.streamPlayer').offset().left + 30) });
    }
    else {
        $('.youtubebox').hide('slow');
    }
});

//show/hide youtube box
$('#login').click(function () {
    if ($('.loginbox').css("display") === "none") {
        $('.loginbox').show('slow');
        $('.loginbox').css("zIndex", (101).toString());
        $('#username-input').css("background-color", "var(--color-button)");
        $('#password-input').css("background-color", "var(--color-button)");
        $('.loginbox').offset({ top: ($('.toolbar').offset().top + 30), left: ($('.toolbar').offset().left + 30) });
    }
    else {
        $('.loginbox').hide('slow');
    }
});