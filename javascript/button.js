/* The purpose of this function is to toggle a more/less info for each tip in my advice page*/
function moreInfo(id) {
    var x, sibling;
    x = document.getElementById(id);
    sibling = x.nextElementSibling;

    if (x.innerHTML === "[More]") {
        sibling.style.display = "";
        x.innerHTML = "[Less]";
    } else {
        sibling.style.display = "none";
        x.innerHTML = "[More]";
    }
}