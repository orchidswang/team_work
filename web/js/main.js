
function display(name) {

    document.getElementById(name).style.display = "block";

}
function hide(name) {

    document.getElementById(name).style.display = "none";
}



function addBookmark(id){
    var ipt = document.querySelector('.inputBookmark')
    var val = ipt.value;
    var val2 = ipt.value.concat('/favicon.ico');
    localStorage.setItem('bookmark'.concat(id),val)
    localStorage.setItem('icon'.concat(id),val2)
    document.getElementById('bookmark'.concat(id)).href = localStorage.getItem('bookmark'.concat(id),val);
    document.getElementById('img'.concat(id)).src = localStorage.getItem('icon'.concat(id),val2);
    ipt.value = null

}




