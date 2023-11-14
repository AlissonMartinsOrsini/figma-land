const group__links = document.querySelector(".group__links")
function clickMenu() {
    if (group__links.style.display == 'block') {
        group__links.style.display = 'none'
    }
    else {
        group__links.style.display = 'block'
    }
    console.log(group__links.style.display)
}


