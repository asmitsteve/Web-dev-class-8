// task-2
const highlight = document.getElementsByClassName("important");
console.log(highlight.length);

for(let i=0;i<highlight.length;i++){
    highlight[i].style.color="Blue";
    highlight[i].style.fontSize="30px"
}