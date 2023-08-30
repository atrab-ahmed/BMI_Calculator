function Calculate_BMI(weight,height){
    BMI= (weight*10) / (height * height * .001)
    return BMI
}

function Interpret_BMI(BMI)
    {
    if (BMI < 18.5)
       alert("Underweight")
    else if (BMI >= 18.5 &&  BMI < 25)
        alert("Normal weight")
    else if (BMI >= 25 &&  BMI < 30)
        alert("Overweight ")
    else
        alert("Obese")
}

var weight=prompt("Enter your weight")
var height=prompt("Enter your height")
var BMI=Calculate_BMI(weight,height)
Interpret_BMI(BMI)


