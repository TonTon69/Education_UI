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
// check validate
function isEmailValid(email) {
    var EMAIL_REGEXP = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$', 'i');
    return EMAIL_REGEXP.test(email)
}
function validatePassword(pass){
    return pass.length >=6;

}

$(document).ready(function(){
    $('#email').change(function(){

        var email= $(this).val().trim();

        if(!isEmailValid(email))
        {
            $('.emailError').html("email không đúng định dạng");
        }
        else
        {
            $('.emailError').html("");
        }

    });

    $('#password').change(function(){
        var pass = $(this).val().trim();
        if(!isEmailValid(email))
        {
            $('.passwordError').html("mật khẩu quá ngắn");
        }
        else
        {
            $('.passwordError').html("");
        }
    });
});


