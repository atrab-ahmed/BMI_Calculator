def Calculate_BMI(weight,height):
    BMI= (weight*10) / (height * height * .001)
    return BMI

def Interpret_BMI(BMI):
    if BMI < 18.5:
        print ("Underweight")
    elif BMI >= 18.5 and  BMI < 25:
        print ("Normal weight")
    elif BMI >= 25 and  BMI < 30:    
        print ("Overweight ")
    else:
        print ("Obese")

weight=int(input("Enter your weight"))
height=int(input("Enter your height"))
BMI=Calculate_BMI(weight,height)
print(BMI)
Interpret_BMI(BMI)


