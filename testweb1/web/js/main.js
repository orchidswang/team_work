function display(name) {

    document.getElementById(name).style.display = "block";

}
function hide(name) {

    document.getElementById(name).style.display = "none";
}


/*将数据存入本地存储空间*/
function addBookmark(id){



    var ipt = document.querySelector('.inputBookmark')
    var val = ipt.value;
    var val2 = ipt.value.concat('/favicon.ico');
    localStorage.setItem('bookmark'.concat(id),val);
    localStorage.setItem('icon'.concat(id),val2);
    document.getElementById('bookmark'.concat(id)).href = localStorage.getItem('bookmark'.concat(id),val);
    document.getElementById('img'.concat(id)).src = localStorage.getItem('icon'.concat(id),val2);
    ipt.value = null
    $.ajax({

        // 请求发送方式
        type: 'post',
        // 验证文件
        url: 'AddServlet',
        // 用户输入的帐号密码
        data: {'user': localStorage.getItem("user"), 'id' : id ,'website': localStorage.getItem("bookmark".concat(id))},
        // 异步，不写默认为True
        async: false,

        //请求成功后的回调
        success: function (data) {

            if (data) {

                //console.log(data);
                //localStorage.setItem("yes",data);
                alert(data)
            } else {
                alert('添加失败');
            }
        },
        error: function () {
            alert('服务端异常');
        }

    });

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

function del(id) {
    var n = id;
    <!--再讲后面的书签依次向前一位-->
    while(localStorage.getItem("bookmark".concat(n+1))!=null){
        localStorage.setItem("bookmark".concat(n),localStorage.getItem("bookmark".concat(n+1)))
        localStorage.setItem("icon".concat(n),localStorage.getItem("icon".concat(n+1)))
        n = n+1;
    }
    localStorage.removeItem("bookmark".concat(n))
    localStorage.removeItem("icon".concat(n))
    location.reload();
}


function login() {

    $.ajax({

        // 请求发送方式
        type: 'post',
        // 验证文件
        url: 'loginServlet',
        // 用户输入的帐号密码
        data: {'user': $("#user").val(), 'password': $("#password").val()},
        // 异步，不写默认为True
        async: true,

        //请求成功后的回调
        success: function (data) {
            if (data) {

                localStorage.setItem("yes",data);
                alert(data)
            } else {
                alert('帐号或密码错误');
            }
        },
        error: function () {
            alert('服务端异常');
        }

    });
}
