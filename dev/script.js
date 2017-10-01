var dropdown = document.getElementsByClassName("conveuro-dropdown")[0],
    list = document.getElementsByClassName("conveuro-list")[0],
    more = document.getElementsByClassName("conv-more")[0],
    button = document.getElementsByClassName("js-conveuro-more")[0];

function showmore() {
    dropdown.classList.add("is-show-more");
    list.style.maxHeight = list.clientHeight + "px";
    more.style.display = "block";
}

function closedropdown() {
    dropdown.classList.add("is-hidden");
}