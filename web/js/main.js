
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

function addbookmark(id){

    if(localStorage.getItem('bookmark'.concat(id))==null){
        hide('bookmark'.concat(id));
        document.getElementById('add'.concat(id)).onclick = function() {display('add_bookmark_windows')};
    }

    if(localStorage.getItem('bookmark'.concat(id))!=null && localStorage.getItem('bookmark'.concat(id))!="") {
        hide('add'.concat(id));
        document.getElementById('href'.concat(id)).href = localStorage.getItem('bookmark'.concat(id));
        document.getElementById('img'.concat(id)).src = localStorage.getItem('icon'.concat(id));
    }

    document.getElementById('addBookmark').onclick =function (){add(id)};

}

function add(id){
    addBookmark(id);
    location.reload();
}

function determine_empty(id){
    if(localStorage.getItem('bookmark'.concat(id-1)) ==null && localStorage.getItem('bookmark'.concat(id)) ==null){
        hide("add".concat(id));
        hide("bookmark".concat(id))
    }
    else {
        addbookmark(id);
    }
}
