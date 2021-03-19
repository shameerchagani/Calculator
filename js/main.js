let res = document.getElementById('btn-res')
res.addEventListener('click',
function(event)
{
event.preventDefault()

let num1 = document.getElementById('num1').value
let num2 = document.getElementById('num2').value
let operator = document.getElementById('operation')
let result = document.querySelector('.res')
if(num1!=="" && num2!==""){
    if(operator.value === 'Add' ){
        let add=Number(num1) + Number(num2)
        result.innerHTML = `Sum of ${num1} and ${num2} is ${add}`

    }else if(operator.value ==='Sub'){
let sub = Number(num1) - Number(num2)
    result.innerHTML = `Difference of ${num1} and ${num2} is ${sub}`

    }else if(operator.value === 'Mul'){
        let mul = Number(num1) * Number(num2)
        result.innerHTML = `Multiplication of ${num1} and ${num2} is ${mul}`
    }else if(operator.value === 'Div'){
        let div = Number(num1) / Number(num2)
        result.innerHTML = `Division of ${num1} and ${num2} is ${div}`
    }else if(operator.value === 'Rem'){
        let rem = Number(num1) % Number(num2)
        result.innerHTML = `Multiplication of ${num1} and ${num2} is ${rem}`
    }else document.querySelector('.res').innerHTML = 'Please Select a oprator then press Enter or Click Calculate'
    
}else result.innerHTML = `Please Enter Some Values in both the text boxes`

}
)