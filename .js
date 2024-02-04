let slides = document.querySelectorAll(".slider");

let counter = 0;
// console.log(slides)

slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index*100}%`
    }
)

let goNext = () => {
    counter++;
    if(counter == 6){
        counter = 0;
    }
    slideImage();
}

let goPrev = () => {
    counter--;
    if(counter < 0){
        counter = 5;
    }
    slideImage();
}

let slideImage = ()=>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}

setInterval(goNext, 3000);




let login = document.querySelector("#login");
let logExt = document.querySelector(".login");

let logExtTimeout;

login.addEventListener("mouseenter", () => {
    login.classList.add("hover");
    clearTimeout(logExtTimeout);
    logExt.classList.add("visible");
});

login.addEventListener("mouseleave", () => {
    logExtTimeout = setTimeout(() => {
        login.classList.remove("hover");
        logExt.classList.remove("visible");
    }, 100);
});

logExt.addEventListener("mouseenter", () => {
    clearTimeout(logExtTimeout);
});

logExt.addEventListener("mouseleave", () => {
    logExt.classList.remove("visible");
    login.classList.remove("hover");
});




let oth = document.querySelector("#other");
let othExt = document.querySelector(".others");

let othExtTimeout;

oth.addEventListener("mouseenter", () => {
    oth.classList.add("oth-hover");
    clearTimeout(othExtTimeout);
    othExt.classList.add("visible");
});

oth.addEventListener("mouseleave", () => {
    othExtTimeout = setTimeout(() => {
        oth.classList.remove("oth-hover");
        othExt.classList.remove("visible");
    }, 100);
});

othExt.addEventListener("mouseenter", () => {
    clearTimeout(othExtTimeout);
});

othExt.addEventListener("mouseleave", () => {
    othExt.classList.remove("visible");
    oth.classList.remove("oth-hover");
});




let roll = document.querySelectorAll(".ele-card");
let next = document.querySelector("#next");
let back = document.querySelector("#back");

let count = 0;
//console.log(roll)

roll.forEach(
    (rolling,index)=>{
        rolling.style.left = `${index*20}%`
    }
)

 let gofor = () => {
    count++;
    if(count == 1){
        next.style.display = "none";
        back.style.display = "block";
    }
    rollImg();
}

let gobac = () => {
    count--;
    if(count == 0){
        back.style.display = "none";
        next.style.display = "block";
    }
    rollImg();
}

let rollImg = ()=>{
    roll.forEach(
        (rolling) => {
            rolling.style.transform = `translateX(-${count*340}%)`
        }
    )
}


let rollToy = document.querySelectorAll(".toy-card");
        let nextToy = document.querySelector("#nextToy");
        let backToy = document.querySelector("#backToy");

        let countToy = 0;
        //console.log(rollToy)

        rollToy.forEach(
            (rollingToy,index)=>{
                rollingToy.style.left = `${index*16.67}%`
            }
        )

         let gofortoy = () => {
            countToy++;
            if(countToy == 1){
                nextToy.style.display = "none";
                backToy.style.display = "block";
            }
            rollImgToy();
        }

        let gobactoy = () => {
            countToy--;
            if(countToy == 0){
                backToy.style.display = "none";
                nextToy.style.display = "block";
            }
            rollImgToy();
        }

        let rollImgToy = ()=>{
            rollToy.forEach(
                (rollingToy) => {
                    rollingToy.style.transform = `translateX(-${countToy*220}%)`
                }
            )
        }