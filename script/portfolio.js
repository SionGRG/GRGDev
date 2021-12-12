/* Project Gallery */

    // Openning the gallery
function showGallery(gBox) {
    var x = document.getElementById(gBox);
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
    // Close the gallery upon focus loss
/// some code to close the gallery

    // Switching between the gallery tabs
function openTab(evt, tbCnt) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("gBoxContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("gBoxTab");
    for(i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tbCnt).style.display = "block";
    evt.currentTarget.className += " active";
}

    // remove active tab class
function closeTab() {
    var i, tabLinks;
    tabLinks = document.getElementsByClassName("gBoxTab");
    for(i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
}