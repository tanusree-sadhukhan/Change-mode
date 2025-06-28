let div=document.querySelector("div");
currmode="light"
let handeler=()=>{
     if(currmode=="light"){
        currmode="dark";
        console.log("dark");
        let body=document.querySelector("body");
        body.classList.add("dark");
        body.classList.remove("light");
         para=document.querySelector("p");
         para.innerText="DARK MODE"
        
    }
    else{
        console.log("light");
        currmode="light";
         body=document.querySelector("body");
        body.classList.add("light");
        body.classList.remove("dark");
        para=document.querySelector("p");
         para.innerText="LIGHT MODE"
       
    }

}
div.addEventListener("mouseover",handeler);