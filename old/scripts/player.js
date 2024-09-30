import IcecastMetadataPlayer from "icecast-metadata-player";
window.jQuery = require('jquery');
window.$ = global.jQuery;

var player = window.player || {};
var str;
var i = 0;
player = new IcecastMetadataPlayer(
    "https://subspacefm.xyz/stream",
    {
        onMetadata: (metadata) => {
            str = htmlentities.decode(metadata.StreamTitle);
            $("#metadata").text(str.substring(0, 48));
            $("#youtube_title").text(str.substring(0, 30));
            var link = undefined;

            if (!str.startsWith("SimCopter") && !str.startsWith("Streets of SimCity")) {
                if (str.slice(-1) == "]") {
                    link = str.substring(str.length - 12, str.length - 1);
                }
                else {
                    link = str.substring(str.length - 11, str.length);
                }
            }

            if (link != undefined)
                $("#video_frame").attr("src", "https://www.youtube.com/embed/" + link);
        }
    });
window.player = player;

$(function () {
    //scrolling text for player
    setInterval(function () {
        if (str != undefined && str.length >= 48) {
            i++;
            if (str.length < i) {
                i = 0;
            }
            if (i > str.length - 48) {
                $("#metadata").text(str.substring(i, 48 + i) + " " + str.substring(0, i - (str.length - 48)));
            }
            else {
                $("#metadata").text(str.substring(i, 48 + i));

            }
        }
    }, 1250);

    $("#play").click(function () {
        player.play();
    });

    $("#stop").click(function () {
        player.stop();
    });

    $(document).on('input', '#volume', function () {
        player.audioElement.volume = ($(this).val() / 100);
    });
});
