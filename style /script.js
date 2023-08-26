function changeButtonColorAndRedirect(button, color, targetPage) {
    button.style.backgroundColor = color;
    setTimeout(function () {
        window.location.href = targetPage;
    }, 500);
}

