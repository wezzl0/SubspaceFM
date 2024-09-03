// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    for (let i = 0; i < images.length; i++) {
        changeColor(document.getElementById(images[i]));
    }
    for (let j = 0; j < images_dub.length; j++) {
        let doubles = document.getElementsByClassName(images_dub[j]);
        for (let i = 0; i < doubles.length; i++) {
            changeColorDouble(doubles[i]);
        }
    }
}

export var images = [];
export var images_dub = ["left", "right", "send_img", "big", "baby", "sys", "play_img", "pause_img", "link_img", "drag", "small", "youtube_img", "login_img", "userlist_img", "question_img", "login_img", "speaker_img"];
var originalPixels = [];
var currentPixels = [];
function hexToRGB(hex) {
    var long = parseInt(hex.replace(/^#/, ""), 16);
    return {
        R: (long >>> 16) & 0xff,
        G: (long >>> 8) & 0xff,
        B: long & 0xff
    };
}

export var themes = [
    "theme-light",
    "theme-dark",
    "theme-pink",
    "theme-green",
    "theme-yellow",
    "theme-phillips",
    "theme-blue"
];

export function getPixelsDouble(img) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    if (img.width == 0) {
        return;
    }
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, img.width, img.height);
    originalPixels[img.id] = ctx.getImageData(0, 0, img.width, img.height);
    currentPixels[img.id] = ctx.getImageData(0, 0, img.width, img.height);

    img.onload = null;
    changeColorDouble(img);
}

export function changeColorDouble(img) {
    if (originalPixels[img.id] == undefined) {
        return;
    }
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var style = getComputedStyle(document.body);
    var newColor = hexToRGB(style.getPropertyValue('--color-image1'));
    var newColor2 = hexToRGB(style.getPropertyValue('--color-image2'));

    canvas.width = img.width;
    canvas.height = img.height;

    for (var I = 0, L = originalPixels[img.id].data.length; I < L; I += 4) {
        if (currentPixels[img.id].data[I + 3] > 0) // If it's not a transparent pixel
        {
            if (originalPixels[img.id].data[I + 1] > 0 && originalPixels[img.id].data[I + 2] > 0 && originalPixels[img.id].data[I] > 0) {
                currentPixels[img.id].data[I] = originalPixels[img.id].data[I] / 255 * newColor.R;
                currentPixels[img.id].data[I + 1] = originalPixels[img.id].data[I + 1] / 255 * newColor.G;
                currentPixels[img.id].data[I + 2] = originalPixels[img.id].data[I + 2] / 255 * newColor.B;
            }
            else {
                currentPixels[img.id].data[I] = newColor2.R;
                currentPixels[img.id].data[I + 1] = newColor2.G;
                currentPixels[img.id].data[I + 2] = newColor2.B;
            }
        }
    }

    ctx.putImageData(currentPixels[img.id], 0, 0);
    img.src = canvas.toDataURL("image/png");
}

export function getPixels(img) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, img.width, img.height);
    originalPixels[img.id] = ctx.getImageData(0, 0, img.width, img.height);
    currentPixels[img.id] = ctx.getImageData(0, 0, img.width, img.height);

    img.onload = null;
    changeColor(img);
}

export function getPixelsAll() {
    for (let i = 0; i < images.length; i++) {
        getPixels(document.getElementById(images[i]));
    }
    for (let j = 0; j < images_dub.length; j++) {
        let doubles = document.getElementsByClassName(images_dub[j]);
        for (let i = 0; i < doubles.length; i++) {
            getPixelsDouble(doubles[i]);
        }
    }
}

function changeColor(img) {
    if (originalPixels[img.id] == undefined) {
        return;
    }
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var style = getComputedStyle(document.body);
    var newColor = hexToRGB(style.getPropertyValue('--color-button'));
    canvas.width = img.width;
    canvas.height = img.height;

    for (var I = 0, L = originalPixels[img.id].data.length; I < L; I += 4) {
        if (currentPixels[img.id].data[I + 3] > 0) // If it's not a transparent pixel
        {
            currentPixels[img.id].data[I] = originalPixels[img.id].data[I] / 255 * newColor.R;
            currentPixels[img.id].data[I + 1] = originalPixels[img.id].data[I + 1] / 255 * newColor.G;
            currentPixels[img.id].data[I + 2] = originalPixels[img.id].data[I + 2] / 255 * newColor.B;
        }
    }

    ctx.putImageData(currentPixels[img.id], 0, 0);
    img.src = canvas.toDataURL("image/png");
}

module.exports = {
    changeColorDouble: changeColorDouble,
    getPixelsAll: getPixelsAll,
};

// Immediately invoked function to set the theme on initial load
(function () {
    var theme = localStorage.getItem('theme');
    for (var i = 0; i < themes.length; i++) {
        if (theme === themes[i]) {
            setTheme(theme);
            break;
        }
        setTheme(themes[Math.floor(Math.random() * themes.length)]);
    }
    if (i == themes.length) {
        setTheme('theme-light');
    }

    for (let i = 0; i < images.length; i++) {
        changeColor(document.getElementById(images[i]));
    }
    for (let j = 0; j < images_dub.length; j++) {
        let doubles = document.getElementsByClassName(images_dub[j]);
        for (let i = 0; i < doubles.length; i++) {
            changeColorDouble(doubles[i]);
        }
    } $("#left").click(function () {
        var theme_found = false;
        theme = localStorage.getItem('theme');
        for (var i = 1; i < themes.length; i++) {
            if (theme === themes[i]) {
                setTheme(themes[--i]);
                player.started = 2;
                theme_found = true;
                return;
            }
        }
        if (theme_found == false) {
            setTheme(themes[themes.length - 1]);
        }
        player.started = 2;
    });
    $("#right").click(function () {

        theme = localStorage.getItem('theme');
        for (var i = 0; i < themes.length - 1; i++) {
            if (theme === themes[i]) {
                setTheme(themes[++i]);
                player.started = 2;
                return;
            }
        }
        setTheme(themes[0]);
        player.started = 2;
    });
})();