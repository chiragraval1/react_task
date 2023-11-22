console.log("Hello");


const fillInput = document.querySelector(".fill-input");
const filterOpt = document.querySelectorAll(".filter button");
const filterName = document.querySelector(".filter-info .name");
const filterValue = document.querySelector(".filter-info .value");
const filterSlider = document.querySelector(".slider input");
const rotateOpt = document.querySelectorAll(".rotate button");
const resetBtn = document.querySelector(".reset-filter");
const previewimg = document.querySelector(".priview-img img");
const chooseImg = document.querySelector(".choose-image");
const saveImg = document.querySelector(".save-img");




let Brightness=100 ,Saturation=100 , Inversion=0, Greyscale=0;
let rotate=0 , flipHR =1, flipVR=1;

const  applyFilters = () => {
    previewimg.style.transform= `rotate(${rotate}deg) scale(${flipHR}, ${flipVR})`;
    previewimg.style.filter = `brightness(${Brightness}%) saturate(${Saturation}%) invert(${Inversion}%) grayscale(${Greyscale}%)`

}

const loadImage= ()=>{
    let file= fillInput.files[0];// getting user selected file
    if(!file) return;
    previewimg.src= URL.createObjectURL(file);
    previewimg.addEventListener("load",()=>{
        resetBtn.click();
        document.querySelector(".container").classList.remove("disable");
    })
};



filterOpt.forEach(option =>{
    option.addEventListener("click",()=>{
        document.querySelector(".filter .active").classList.remove("active");
        option.classList.add("active");
        filterName.innerText= option.innerText;

        if(option.id ==="Brightness"){
            filterSlider.max="200";
            filterSlider.value = Brightness;
            filterValue.innerText = `${Brightness}%`;
        }
        else if(option.id ==="Saturation"){
            filterSlider.max="200";
            filterSlider.value = Saturation;
            filterValue.innerText = `${Saturation}%`;
        }
        else if(option.id ==="Inversion"){
            filterSlider.max="100";
            filterSlider.value = Inversion;
            filterValue.innerText = `${Inversion}%`;
        }
        else if(option.id ==="Greyscale"){
            filterSlider.max="200";
            filterSlider.value = Greyscale;
            filterValue.innerText = `${Greyscale}%`;
        } 
    })
})

const upadateFilter = () =>{
    console.log(filterSlider.value);
    filterValue.innerText= `${filterSlider.value}%`;

    const selectedFilter = document.querySelector(".filter .active")

    if(selectedFilter.id === "Brightness"){
        Brightness = filterSlider.value;
    }
    else if(selectedFilter.id === "Saturation"){
        Saturation = filterSlider.value;
    }
    else if(selectedFilter.id === "Inversion"){
        Inversion = filterSlider.value;
    }
    else if(selectedFilter.id === "Greyscale") {
        Greyscale = filterSlider.value;
    }

    applyFilters();
}

rotateOpt.forEach(option=>{
    option.addEventListener("click",()=>{
        // console.log(option);
        if(option.id === "left"){
            rotate -= 90;
        }
        else if(option.id === "right"){
            rotate += 90;
        }
        else if(option.id === "horizontal"){
            flipHR = flipHR === 1 ? -1 : 1;
         }
         else if(option.id === "vertical"){
            flipVR = flipVR ===1 ? -1 : 1;
         }
        applyFilters();
    })
})

const resetFilter = ()=>{
    
Brightness=100;Saturation=100 ; Inversion=0; Greyscale=0;
rotate=0; flipHR =1; flipVR=1;
filterOpt[0].click();
applyFilters();
}

const saveImage =()=>{
    console.log("save image button click");

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = previewimg.naturalWidth;
    canvas.height = previewimg.naturalHeight;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    if(rotate!==0){
        ctx.rotate(rotate* Math.PI /180);
    }
    ctx.scale(flipHR,flipVR);
    ctx.filter = `brightness(${Brightness}%) saturate(${Saturation}%) invert(${Inversion}%) grayscale(${Greyscale}%)`;
    ctx.drawImage(previewimg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

    const link= document.createElement("a");
    link.download= "image.jpg";
    link.href = canvas.toDataURL();
    link.click();
}
fillInput.addEventListener("change",loadImage);
filterSlider.addEventListener("change",upadateFilter);
resetBtn.addEventListener("click",resetFilter);
saveImg.addEventListener("click",saveImage);


chooseImg.addEventListener("click", function(){
    fillInput.click()
    console.log("hii")
} )