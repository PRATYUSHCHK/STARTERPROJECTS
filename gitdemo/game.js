let boxes = document.querySelectorAll(".box");
const win =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
 
   }
   const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
    }
 
   }
let turn  = true;

boxes.forEach((box) =>
    {
        box.addEventListener("click",() =>{
    if(turn){
        box.innerText = "x";
        turn= false;

    }else{
        box.innerText= "o";
        turn = true;
    }
    box.disabled = true;
    checkwinner();
});

});
let hide = document.querySelector("#winner");
const checkwinner = ()=>{
    for(let winpat of win){
        let pos1val =  boxes[winpat[0]].innerText;
        let pos2val =  boxes[winpat[1]].innerText;
        let pos3val =  boxes[winpat[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val=== pos2val && pos2val===pos3val){
            console.log("vsble")
            hide.style.visibility = "visible";
            disableBoxes();
            }
        }
    }
}
let reset = document.querySelector("#reset");
reset.addEventListener("click", ()=>{
    for(let box of boxes){
box.innerText = "";
    }
    enableBoxes();
    hide.style.visibility = "hidden";
    turn = true;
})

