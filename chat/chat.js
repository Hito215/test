let btn = document.getElementById('btn');
let ipt = document.getElementById('ipt');


$("#btn").on('click', function () {
    let text = $("#ipt").val().trim(); //要发送的内容
    // 判断发送的内容是是否为空
    if (text.length <= 0) {
        return $("#ipt").val('');
    }
 
    //如果用户输入了聊天内容，则将聊天内容追加到页面上显示
    $("#detail").append(`<div class="message-in right-message"><p>${text}</p></div>`);
     
    //发送完后清空输入框
    $("#ipt").val('');
});