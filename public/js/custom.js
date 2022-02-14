function highlightActiveLink() {
    var links = document.querySelectorAll(".nav-link");
    for (var i = 0; i < links.length; i++) {
        if (links[i].href == document.URL) {
            links[i].classList.add('active');
            links[i].setAttribute('aria-current', 'page');
        }
    }
}

window.onload = highlightActiveLink();