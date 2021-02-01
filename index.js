console.log("sha");
///factory function

// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// const circle = createCircle(5);

// ////constructor

// function Circle(radius){
//     this.radius=radius,
//     this.draw=function(){
//         console.log("draw2");
        
//     }
// }
// const another=new Circle(2)
// console.log(another);



///DATATYPES////////////
//////////////primitive example
// let num=10

// function increase(num){
// num++
// console.log(num,"s");  //////////////11

// }

// increase(num)
// console.log(num); ///////////10


// //////////////////reference example
// let obj={value:10}

// function increa(obj){
//     obj.value++
//     console.log(obj,"r"); ///////11
    
// }
// increa(obj)
// console.log(obj);     ///////////11

///////////////////////////////////CLOUSURE/////////////////////
function closure(){
    let aa=10
    function y(){
        console.log(aa);
        aa=15
        
    }
    return y
}
let z=closure()
z()
console.log(z);
let i=closure()
i()

