// Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $overlayWrapper = $('<div id="overlay-wrapper" class="clearfix"></div>');
var $imageWrapper = $('<div id="image-wrapper" class="clearfix"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');
var $previous = $('<div id="previous" class="button"></div>');
var $next = $('<div id="next" class="button"></div>')
var galleryLength = 12;
var index = 0;

document.querySelector('input').onkeyup = function () {
    galleryLength = searchImages().length;
};

// Adds overlayWrapper to overlay
$overlay.append($overlayWrapper);

// Adds imageWrapper to overlay
$overlayWrapper.append($imageWrapper);

// Adds image to overlay
$imageWrapper.append($image);

// Adds caption to overlay
$imageWrapper.append($caption);

// Adds overlay to body
$("body").append($overlay)

// Initially hides the overlay
$overlay.hide();

// Adds previous on top of overlay and hides button
$("body").append($previous);
$previous.hide();

// Adds next on top of overlay and hides button
$("body").append($next);
$next.hide();

function getCurrentImage(currentImage) {
    // Stores clicked anchor element into $thisAnchor object
    $thisImage = $(currentImage);

    // Stores the anchor's href attribute to $imageLocation object 
    $imageLocation = $(currentImage).attr('href');

    // Updates overlay image src attribute with $imageLocation object
    $image.attr('src', $imageLocation);

    // Stores anchor's child (img) longdesc attribute to $captionText object
    $captionText = $(currentImage).children('img').attr('longdesc');

    // Updates overlay caption text with $captionText object
    $caption.text($captionText);

    // Updates index variable with current image index in overlayImagesArray array (from search.js)
    index = searchImages().indexOf(currentImage);

    // Logs information to console
    console.log($thisImage);
    console.log(galleryLength);
    console.log(index);
}

// Click event on anchor element (image link)
$("#gallery a").click(function (event) {

    // Prevents link from opening to new window
    event.preventDefault();

    // Calls getCurrentImage function on "this" selection
    getCurrentImage(this);

    // Shows the overlay
    $overlay.show();

    // Shows the previous and next buttons
    $previous.show();
    $next.show();
});

function getPreviousImage() {

    // Stores new anchor's href atrribute in newImageLocation variable
    var newImageLocation = searchImages()[index];

    // Updates overlay image src attribute with newImageLocation variable
    $image.attr("src", newImageLocation);

    // Calls getCurrentImage function on previous anchor
    getCurrentImage(newImageLocation);
}

$('#previous').click(function (event) {

    // Reduces index by 1
    index--;

    // Reset index if outside of range
    if (index < 0) {
        index = galleryLength - 1;
    }

    getPreviousImage();
});

function getNextImage() {

    // Stores new anchor's href atrribute in newImageLocation variable
    var newImageLocation = searchImages()[index];

    // Updates overlay image src attribute with newImageLocation variable
    $image.attr("src", newImageLocation);

    // Calls getCurrentImage function on next anchor
    getCurrentImage(newImageLocation);
}

$('#next').click(function (event) {

    // Increases index by 1
    index++;

    // Reset if index goes outside of range
    if (index > galleryLength - 1) {
        index = 0;
    }

    getNextImage();
});

// Click event on overlay
$overlay.click(function () {

    // Hides the overlay
    $overlay.hide()

    // Adds previous on top of overlay
    $("body").append($previous);
    $previous.hide();

    // Adds next on top of overlay
    $("body").append($next);
    $next.hide();
});
