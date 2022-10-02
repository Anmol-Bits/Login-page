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

function email_focusout() {
    back_to_default(0);
}

function email_focus() {
    change_properties(0);
}

function pass_focus() {
    change_properties(1);
}
function pass_focusout() {
    back_to_default(1);
}

function mobile_focus(){
    change_properties(1);
}
function mobile_focusout() {
    back_to_default(1);
}