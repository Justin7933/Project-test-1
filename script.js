function setColor(btn, color){
    var count=1;
    var property = document.getElementById(btn);
    if (count == 0){
        property.style.color = "black"
        count=1;
    }
    else{
        property.style.color = "red"
        count=0;
    }
}  