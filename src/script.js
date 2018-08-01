// var mov1 = document.querySelector(".mov1");
//
// mov1.addEventListener("mouseover", function(){
//   this.style.border = "0";
//   this.style.height = "250px";
//
// });
// mov1.addEventListener("mouseout", function(){
//   this.style.border = "2.5";
//   this.style.height = "150px";
// });
//
// var movies = [
//     {name: "Rush hour 2"},
//     {name: "Fast and furious 7"},
//     {name: "The avatar"},
//     {name: "Attack on Titan"},
//     {name: "Tokyo ghoul"}
// ]
//
// var movBox = document.querySelectorAll(".movBoxes");
// var h2 = document.querySelector('h2');
//
// for(var i = 0; i< movBox.length; i++){
//   movBox[i].addEventListener("click", function(){
//     // this.classList.add = ("largeAndShow")
//     console.log("clicked");
//     h2.innerHTML = movies[0].name;
//   })
// }

let movBoxes = document.querySelectorAll(".movBoxes");
let text = document.querySelectorAll(".text");
let t1 = document.querySelectorAll(".t1");
let clicked = false;
// for(i = 0; i < movBoxes.length; i++){
//   movBoxes[i]..addEventListener("mouseover", function(){
//     // for(j = 0; j < text.length; j++){
//     //   text[i].style.display = "block";
//     // }
//     text[i].style.display = "block";
//   });
// }


// for(i=0;i< movBoxes.length; i++){
//   movBoxes[i].addEventListener("click", function(){
//     clicked = true;
//     if(clicked === true){
//       for(j=0;j<text.length;j++){
//         this.style.visibility = "visible";
//       }
//     }
//   })
// }

// for(i=0;i<text.length;i++){
//   text[i].addEventListener("click", function() {
//     this.style.visibility = "visible";              very close
//     console.log("done");
//   })
// }

movies = {
  title: "rush hour",
  title: "blank"
}
