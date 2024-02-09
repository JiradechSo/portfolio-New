function toCelsius(fahrenheit){
    let value = (fahrenheit -32)* 5 / 9 
    return value.toFixed(2) + "  Celsius" ;

}
function display(elementId , value)
{
    document.getElementById(elementId).innerHTML = "<b>"+ value +"</b>"
}
function toFahrenheit(celsius){
    
    let value2 = (celsius * 9/5) + 32
    return value2.toFixed(2) + " Fahrenheit " ;
}

function toCelsiusProgram(value)
{
    alert(toCelsius(value))
}
function toFahrenheitProgram(value)
{
    alert(toFahrenheit(value))
}

//คำนวณเกรด
let score = prompt("ใส่คะแนนของท่านตั้งแต่ 1-100")
if(score >=80){
    document.getElementById("result").innerHTML = "A"
} else if (score >=70){
    document.getElementById("result").innerHTML = "B"
} else if (score >=60){
    document.getElementById("result").innerHTML = "C"
} else if (score >=50){
    document.getElementById("result").innerHTML = "D"
} else if(score <50){
    document.getElementById("result").innerHTML = "F"
} else {
    document.getElementById("result").innerHTML = "ไม่ใช่ข้อมูลตัวเลข"
}

function sayHello()
{
    alert("Hello")
}

var age = prompt("กรุณาระบุอายุของท่าน 0-11 ไม่แสดงผล , 11+ แสดงคลิป")
if (age > 13) {
    document.getElementById("content").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/MhhNze-ULA0?si=KDVu1ock-GbVafIY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>";
}

        