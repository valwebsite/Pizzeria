list_list_array = ["Veg Pizza", "Cheese Pizza", "Paneer Tikka Pizza", "Veg Extravaganza Pizza"];
function getmenu() {
    var htmldata;
    htmldata = "<ol class='menulist'>"
    list_list_array.sort();
    for(var i=0;i<list_list_array.length;i++) {
        htmldata=htmldata+ '<li>' + list_list_array[i] + '</li>'
    }
    htmldata=htmldata+"<ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}
menu_list_array = ["Chicken Tandoori Pizza", "Margherita Pizza", "Candy Pizza", "Cheese + Veggie Pizza", "Some other type of pizza (smh)"];
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){

        htmldata=htmldata+"<div class='card'>" + menu_list_array[i] + '</div>'
        }
        htmldata=htmldata+"</section>"
        document.getElementById("display_addedmenu").innerHTML = htmldata;
}
