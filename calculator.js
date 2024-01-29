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

const multiply = function(arr) {
  if(arr.length==0){return 0}
  const product=arr.reduce((total,i)=>{
    return (total*i)
  })
	return product
};

const power = function(num1,num2) {
  let prod=num1
	for(let i=1;i<num2;i++){
    prod=prod*num1
  }
  return prod
};
const equals = function(num1,num2,opp){
    if(opp=='add'){return( add(num1,num2))}
}
curNum=""
num1=-999
num2=-999
op="none"
let digits=document.querySelector("#digits")
let digit=digits.children
for (let i=0;i<digit.length;i++){
    digit[i].addEventListener('click',()=>{
        
            curNum=curNum+digit[i].textContent
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

let equal=document.querySelector("#equals")
equal.addEventListener('click',()=>{
    num1=(equals(num1,num2,op))
    alert(num1)
    op='none'
    curNum=""

})