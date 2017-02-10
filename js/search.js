// Stores all image elements in imageTotal variable
var imageTotal = document.querySelectorAll('a');

function searchImages() {

    // Sets (resets/empties)arrays
    var imageCache = [];
    var overlayImagesArray = [];

    for (i = 0; i < imageTotal.length; i++) {

        // Stores each image 1 by 1 into imageCache array
        imageCache.push(imageTotal[i]);

        // Stores search field value into searchInput variable.  Converts text to lower case.
        var searchInput = document.querySelector('input').value.toLowerCase();

        // Stores anchor element child's (img) longdesc attribute into imageLongDesc variable.  Converts text to lower case.
        var imageLongDesc = imageCache[i].children[0].getAttribute('longdesc').toLowerCase();

        // Logs each img's longdesc to the console
        console.log(imageLongDesc)

        // Checks to see if each img's longdesc contains the search field value.  Logs true or false to console.
        console.log(imageLongDesc.includes(searchInput));

        // Stores true or false (see previous comment) into isSearchInLongDesc variable.
        var isSearchInLongDesc = imageCache[i].children[0].getAttribute('longdesc').toLowerCase().includes(searchInput);

        // If true, show anchor element.
        if (isSearchInLongDesc) {
            imageCache[i].style.display = '';

            // Stores images into overlayImageArray.  To be returned by function.
            overlayImagesArray.push(imageCache[i]);
        }

        // If false, hide anchor element.
        else {
            imageCache[i].style.display = 'none';
        }
    }

    // Returns overlayImagesArray function.
    return overlayImagesArray;
}

document.querySelector('input').onkeyup = function () {
    searchImages();
};
