const userAva = $(".header__actions--avatar img");
const userMenu = $(".header__actions--userMenu");

userAva.click(function (e) {
    userMenu.toggleClass("show");
});

$(document).click(function (e) {
    // Nếu click bên ngoài đối tượng container thì ẩn nó đi
    if (!userAva.is(e.target) && userAva.has(e.target).length === 0) {
        userMenu.removeClass("show");
    }
});
