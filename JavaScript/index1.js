" use strict"
//  var name="Akhil"
//  var name="DDD"
// const age=20;
// if(age>18){
//     const name="A";
//     console.log(name);
// }
// console.log(name);


//Hoisting
// console.log(age);
// var age=30;
// var age=null
// console.log(age)

//Objects
// let employee={
//     name:"A",
//     designation:"Developer",
//     salary:"3.6LPA",
//     mobile:999999999
// }
// console.log(employee)

//Array

// let employees=["a","b","c"];
// console.log(employees[1])

//Alerts

// alert("Registration is completed successfully!!!")
// let num1=prompt("Enter num1")
// console.log(num1)
// confirm("Are you sure to exit?")

// console statements

// console.log("Welcome")
// console.info("FOR INFORMATION")
// console.warn("Check the code once")
// console.error("name is not defined!!")

// Spread Operator

// let marks=[23,42,54,44,28,43]
// let int_marks=[12,21,13,31]

// let results=[23,34,marks]
// let final_p=[23,78,10,...marks,...int_marks]
// console.log(results)
// console.log(final_p)

//Rest parameter

// function addition(x,y,...remainData){
//         console.log(x,y,remainData);
//         console.log(typeof(remainData))
// }
// console.log(addition(2,3,5,6,"J"))

//Desructuring of arrays

// let employee=["A","B","Y","P"]
// // name1=employee[0]

// let[a,b,...data]=employee
// console.log(a,...data)
// console.log(...data)


// let employee={
//     uname:"A",
//     designation:"Developer",
//     salary:"3.6LPA",
//     mobile:999999999
// }
// let{uname,designation,...remainData}=employee
// console.log(uname)
// console.log(designation)
// console.log(remainData)


//  Functions

    //   let demo=function(x,y){
        //   return x+y
    //   }
    //   console.log(demo(3,4))    
    
    
    // setTimeout(function(){
        // console.log("Welcome")
    // },3000)

    //Arrow function


    // let demo=(x,y) =>{
        // return x*y
    //  }
    //  console.log(demo(3,4))


    let employees=["A","B","C","D"]


    // for(let i=0;i<employees.length;i++){
        // console.log(employees[i])
    // }

    //for-in displays index

    // for(let i in employees){
        // console.log(i)
    // }
    // 

//for-of dispalys values at "i"
        // for(let i of employees){
        //     console.log(i)
        // }


//  forEach function.........

        employees.forEach(function(element){
            console.log(element+"  OK")
        })
          // console.log(result1)

//  map function......
        let result2=employees.map(function(element){
            return element
        })
        console.log(result2)
//  arrow function.....
        let result3=employees.map((element,index)=>{
            return element+":"+index
        })
        console.log(result3)
        