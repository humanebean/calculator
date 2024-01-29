const add = function(num1,num2) {
	return(num1+num2)
};

const subtract = function(num1,num2) {
  return (num1-num2)
};

const sum = function(arr) {
  if(arr.length==0){return 0}
  const sum=arr.reduce((total,i)=>{
    return (total+i)
  })
	return sum
};

const multiply = function(num1,num2) {
  return num1*num2
};

const divide = function(num1,num2) {
  return num1/num2
};

const equals = function(num1,num2,op){
    if(op=='add'){return( add(num1,num2))}
    if(op=='subtract'){return(subtract(num1,num2))}
    if(op=='multiply'){return(multiply(num1,num2))}
    if(op=='divide'){return(divide(num1,num2))}
}
curNum=""
num1=-999
num2=-999
op="none"
let screen=document.querySelector("#screen")
let digits=document.querySelector("#digits")
let digit=digits.children
for (let i=0;i<digit.length;i++){
    digit[i].addEventListener('click',()=>{
        
            curNum=curNum+digit[i].textContent
            screen.textContent=curNum
        if(op=="none"){
            num1=Number(curNum)
        }
        else(num2=Number(curNum))
    })
}
let addition=document.querySelector("#add")
addition.addEventListener('click',()=>{
    curNum=""
    op='add'
})

let subtraction=document.querySelector("#subtract")
subtraction.addEventListener('click',()=>{
    curNum=""
    op='subtract'
})

let mult=document.querySelector("#multiply")
mult.addEventListener('click',()=>{
    curNum=""
    op='multiply'
})

let div=document.querySelector("#divide")
div.addEventListener('click',()=>{
    curNum=""
    op='divide'
})

let equal=document.querySelector("#equals")
equal.addEventListener('click',()=>{
    num1=(equals(num1,num2,op))
    screen.textContent=(num1)
    op='none'
    curNum=""

})