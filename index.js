
const container = document.querySelector('.main');
const btn = document.getElementsByClassName('btn');

const maxcolor = 20;
const generatecolor = ()=>{

    container.innerHTML= '';
    for (let i = 0; i < maxcolor; i++) {
        let hexcolor = Math.floor(Math.random() * 16777215).toString(16);
        color  = `#${hexcolor.padStart(6,"0")}`;
        
        
       

        const gendiv = document.createElement("li");
        gendiv.classList.add('colorbg');
        gendiv.innerHTML = ` <div class="colors" style="background:${color}"></div> 
        <span class="hex">${color}</span>`
        // gendiv.addEventListener('click', ()=> copycolor( color , gendiv))
        gendiv.addEventListener('click', ()=>{ copyColor(gendiv, hexcolor)})
        container.appendChild(gendiv);
        
    }
}

generatecolor();

const copyColor = (element , color)=>{
    const colorElement = element.querySelector(".hex");
    navigator.clipboard.writeText( "#" + color).then(()=>{
        colorElement.innerText = "COPIED";
        console.log('#'+color)
        
        setInterval(()=> colorElement.innerText = "#" + color, 500)
    })
}



btn.addEventListener('click',generatecolor)