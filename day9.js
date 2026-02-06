const para  = document.querySelectorAll("p");
console.log(para);
para.forEach((para,index)=>{
    if (index % 2 === 0) {
        para.style.backgroundColor = "blue";
    }
    else {
        para.style.color = "blue";
    }
    
})
para[para.length-1].style.fontStyle = "bold";

const newpara = document.createElement("p");
// textcontent
// innertext
// innerhtml we can pass any type of html tag in ""
newpara.textContent = "This is a new paragraph";

console.log(newpara);
document.getElementById("content").append(newpara);

let image = document.createElement("img");
image.setAttribute("src" , "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");
image.setAttribute("alt" , "Google Logo");
document.getElementById("gallery").append(image);
