
function display(name) {

    document.getElementById(name).style.display = "block";

}
function hide(name) {

    document.getElementById(name).style.display = "none";
}


/*将数据存入本地存储空间*/
function addBookmark(id){

    var ipt = document.querySelector('.inputBookmark')
    // 书签的地址值
    var val = ipt.value;
    if (!/(((http|ftp|https):\/\/)?[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?)/.test(val)) {
        alert("您输入的地址值不合法，请重新输入");
        // 若输入地址值不合法，不允许刷新页面
        return;
    }
    var val2 = ipt.value.concat('/favicon.ico');
    localStorage.setItem('bookmark'.concat(id),val);
    localStorage.setItem('icon'.concat(id),val2);
    document.getElementById('bookmark'.concat(id)).href = localStorage.getItem('bookmark'.concat(id),val);
    document.getElementById('img'.concat(id)).src = localStorage.getItem('icon'.concat(id),val2);
    ipt.value = null
    // 更新页面
    location.reload();
}

function addbookmark(id){

    if(localStorage.getItem('bookmark'.concat(id))==null){
        hide('bookmark'.concat(id));
        document.getElementById('add'.concat(id)).onclick = function() {
            display('mask')
            display('add_bookmark_windows')
        };
    }

    if(localStorage.getItem('bookmark'.concat(id))!=null && localStorage.getItem('bookmark'.concat(id))!="") {
        hide('add'.concat(id));
        document.getElementById('href'.concat(id)).href = localStorage.getItem('bookmark'.concat(id));
        document.getElementById('img'.concat(id)).src = localStorage.getItem('icon'.concat(id));
    }

    document.getElementById('add_submit').onclick =function (){add(id)};

}

function add(id){
    addBookmark(id);
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

    $.ajax({

        // 请求发送方式
        type: 'post',
        // 验证文件
        url: 'loginServlet',
        // 用户输入的帐号密码
        data: {'user': localStorage.getItem('user'), 'id': id },
        // 异步，不写默认为True
        async: true,

        //请求成功后的回调
        success: function (data) {
            if (data) {

                localStorage.setItem("user",$("#user").val());
                close_login();
                alert($("#user").val())
            } else {
                alert('帐号或密码错误');
            }
        },
        error: function () {
            alert()
        }
    });

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

    display('mask')
    display('login')

}

function register(){
    display('mask')
    display('register')
}

function close_login() {

    hide('mask');
    hide('login');
}

function close_register(){
    hide('mask');
    hide('register');
}

function to_login(){
    hide('register');
    display('login');
}

function to_regiester(){
    hide('login');
    display('register');
}

function close_add(){
    hide('mask');
    hide('add_bookmark_windows')
}

function login_submit(){
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

                localStorage.setItem("user",$("#user").val());
                close_login();
                alert($("#user").val()+'欢迎登录')
                getbookmarks()
                location.reload();
            } else {
                alert('帐号或密码错误');
            }
        },
        error: function () {
            alert()
        }
    });



}

function register_submit() {


     $.ajax({

    //     // 请求发送方式
         type: 'post',
    //     // 验证文件
         url: 'xxxx',
    //     // 用户输入的帐号密码
         data: {'user': $("#newuser").val(), 'password': $("#newpassword").val()},
    //     // 异步，不写默认为True
         async: true,

    //     //请求成功后的回调
         success: function (data) {
             if (data) {

                 localStorage.setItem("user",data);
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


function getbookmarks() {
    var arr = localStorage.getItem("post").split("|")
    for(var n=0; n < arr.length-1; n++){
        localStorage.setItem("bookmark".concat(n+1),arr[n]);
        localStorage.setItem("icon".concat(n+1),arr[n].concat('/favicon.ico'));
    }
}






