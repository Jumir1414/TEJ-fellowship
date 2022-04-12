window.alert("hello TEJ!!");
function sayhello(){
    alert("Hello there");
}
function increase(){
    var value = parseInt(document.getElementById('count').value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('count').value = value;
}
function decrease(){
    var value = parseInt(document.getElementById('count').value);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('count').value = value;
}
