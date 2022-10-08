
let b1=document.querySelector(".b1");
let b2=document.querySelector(".b2");
let h1=document.querySelector(".h1");
let ii=document.querySelector(".ii");

b1.addEventListener("click",()=>{
    h1.innerHTML="i love you too "
    ii.innerHTML='&#128512';
})

b2.addEventListener("mouseover",()=>{
    b2.style.marginLeft=`${r_andom()}px`
    b2.style.marginTop=`${r_andom()}px`
    console.log(random);
})
b2.addEventListener("click",()=>{
    b2.style.marginLeft=`${r_andom()}px`
    b2.style.marginTop=`${r_andom()}px`
    console.log(random);
})

function r_andom() {
    return (Math.floor(Math.random()*100)-100);
}