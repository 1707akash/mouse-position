
// function over(e){
//     console.log(e.clientX, e.clientY);
// }



// let d1= document.getElementById("d1");
// d1.addEventListener("mousemove",over);


function over(e){
    let x= document.getElementById("xposition");
    let y= document.getElementById("yposition");
    x.innerHTML= e.clientX;
    y.innerHTML= e.clientY;
}

let position= document.getElementById("main");

position.addEventListener("mousemove",over);