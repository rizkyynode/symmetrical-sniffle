function isAcceptedUsername(username) {
    var Regex = /^[a-z]{3}[a-z_]{2,5}$/ ;
    return Regex.test(username) ;
}
// test
if (isAcceptedUsername("fulanah")) {
    alert("Username Is Valid") ;
} else {
    alert("Username Is Invalid") ;
}

function isAcceptedPassword(password) {
    var Regex = /^[a-zA-Z0-9!]{9}$/;
    return Regex.test(password) ;
}
// test
if (isAcceptedPassword("fulanaH12")) {
    alert("password Is Valid") ;
} else {
    alert("password Is Invalid") ;
}