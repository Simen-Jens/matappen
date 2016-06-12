var objectName = "";
var prevObj_Height = 0;
var prevObj_Width = 0;
var prevObj_Top = 0;
var prevObj_Left = 0;
var prevObj_zIndex = 0;

function expand(object) {
    if (object == objectName) {
        document.getElementById(objectName).style.height = prevObj_Height;
        document.getElementById(objectName).style.width = prevObj_Width;
        document.getElementById(objectName).style.top = prevObj_Top;
        document.getElementById(objectName).style.left = prevObj_Left;
        document.getElementById(objectName).style.zIndex = prevObj_zIndex;
        document.getElementById(object + 'List').style.opacity = '0';

        objectName = '';
    } else {
        prevObj_Height = document.getElementById(object).style.height;
        prevObj_Width = document.getElementById(object).style.width;
        prevObj_Top = document.getElementById(object).offsetTop;
        prevObj_Left = document.getElementById(object).offsetLeft;
        prevObj_zIndex = document.getElementById(object).style.zIndex;

        objectName = object;

        document.getElementById(object).style.height = '100%';
        document.getElementById(object).style.top = '0%';
        document.getElementById(object).style.width = '100%';
        document.getElementById(object).style.left = '0%';
        document.getElementById(object).style.zIndex = '99';


        document.getElementById(object + 'List').style.opacity = '1';
    }
}