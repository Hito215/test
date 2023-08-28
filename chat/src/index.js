/*
 * @Author: hito hito@123.com
 * @Date: 2023-08-28 15:45:17
 * @LastEditors: hito hito@123.com
 * @LastEditTime: 2023-08-28 17:10:00
 * @FilePath: \chat\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './index.css';


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