function change_properties(i) {
    document.getElementsByTagName("input")[i].focus();
    document.getElementsByClassName("text-inside-input")[i].style.left = "20px";
    document.getElementsByClassName("text-inside-input")[i].style.bottom = "62px";
    document.getElementsByClassName("text-inside-input")[i].style.fontSize = "13px";
}

function back_to_default(i) {
    if (document.getElementsByTagName("input")[i].value == "") {
        document.getElementsByClassName("text-inside-input")[i].style.left = "32px";
        document.getElementsByClassName("text-inside-input")[i].style.bottom = "36px";
        document.getElementsByClassName("text-inside-input")[i].style.fontSize = "16px";
    }
}

function name_focusout() {
    back_to_default(0);
}
function name_focus() {
    change_properties(0);
}


function mobile_focus() {
    change_properties(1);
}
function mobile_focusout() {
    back_to_default(1);
}


function email_focus() {
    change_properties(2);
}
function email_focusout() {
    back_to_default(2);
}


function pass_focus() {
    change_properties(3);
}
function pass_focusout() {
    back_to_default(3);
}


function conf_pass_focus() {
    change_properties(4);
}
function conf_pass_focusout() {
    back_to_default(4);
}


function mobile_otp_focus() {
    change_properties(5);
}
function mobile_otp_focusout() {
    back_to_default(5);
}


function email_otp_focus() {
    change_properties(6);
}
function email_otp_focusout() {
    back_to_default(6);
}
