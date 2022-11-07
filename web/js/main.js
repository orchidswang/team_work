
function display(name) {

    document.getElementById(name).style.display = "block";
    if(name=='login'&&name=='register'){
        document.getElementById('mask').style.display = "block"
    }
}
function hide(name) {
    document.getElementById(name).style.display = "none";
    if(name=='login'&&name=='register'){
        document.getElementById('mask').style.display = "none"
    }
}

