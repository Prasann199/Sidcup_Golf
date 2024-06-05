
document.addEventListener("mousemove",function(dets){
    var xval=dets.clientX+25;
    var yval=dets.clientY;


    gsap.to(".cursor",{
        left:xval+"px",
        top:yval+"px",
    })

    gsap.to(".cursor-blr",{
        left:xval-100+"px",
        top:yval-100+"px",
    })
})


var navbtns=document.querySelectorAll(".nav h4")
navbtns.forEach(function(elem){
    var crsr=document.querySelector(".cursor")
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.border="1px solid white";
        crsr.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid white";
        crsr.style.backgroundColor="white";
    })
})

gsap.to(".nav",{
    backgroundColor:"black",
    height:"120px",
    duration:0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub: 1,

    }
})
gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -55%",
        end:"top -80vh",
        scrub:1
    }
})

gsap.from(".about-us img, .para",{
    y:80, //from y axis 80 below it starts coming upside
    opacity:0, //starting opacity is 0
    duration:1.3, //total duration of showing itself is 1.3s
    stagger:0.3,  //if multiple element is used then each element come after 0.3s
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 45%",
        scrub:2,
    }

})

gsap.from(".cards",{
    scale:0.8, //from y axis 80 below it starts coming upside
    opacity:0, //starting opacity is 0
    duration:0.8, //total duration of showing itself is 1.3s
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:1,
    },

})

gsap.from(".colon1",{
    y:-40,
    x:-40,
    scrollTrigger:{
        trigger:".colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 35%",
        scrub:3
    }
})
gsap.from(".colon2",{
    y: 40,
    x: 40,
    scrollTrigger:{
        trigger:".colon2",
        scroller:"body",
        // markers:true,
        start:"top 95%",
        end:"top 80%",
        scrub:3
    }
})
gsap.from(".page4 h1",{
    y: 50,
    scrollTrigger:{
        trigger:".colon2",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 45%",
        scrub:3,
    }
})

var cards=document.querySelectorAll(".cards-container .cards");
cards.forEach (function(elem) {
    elem.addEventListener("mouseenter",function(){
        elem.style.transform="rotate3d(-1,1,0,25deg)";
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.transform="rotate3d(0,0,0,0deg)";
    })
})

var menubtn=document.querySelector(".menubtn");
menubtn.addEventListener("click",function(){
    var menu=document.querySelector(".menubar");
    if(menu.style.display==="block"){
        menu.style.display="none";
    }else{
        menu.style.display="block"
    }
})
