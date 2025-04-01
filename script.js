document.addEventListener("DOMContentLoaded", () => {
    let buttons = document.querySelectorAll("button[anim='pulse']");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("toggled");
        });
    });
});


let anims = [...document.querySelectorAll("[anim]")];
console.log(anims);
let click = (el, cb) => el.addEventListener("click", cb);
let toggle = (el) => el.classList.toggle("toggled");
let clickTog = (el) => click(el, () => toggle(el));
anims.map(clickTog);

document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button[anim='pulse']");
    let music = document.getElementById("music");

    button.addEventListener("click", () => {
        if (music.paused) {
            music.play();
        } else {
            music.pause();
            music.currentTime = 0; // Reset music when clicked again
        }
    });
});


// Function to create animated flowers
function createFlower() {
    const flowerContainer = document.querySelector('.flower-container');
    const flower = document.createElement('div');
    flower.classList.add('flower');
    
    const size = Math.random() * 30 + 20; // Random size (20px - 50px)
    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;
  
    flower.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    flower.style.animationDuration = Math.random() * 5 + 5 + "s"; // Random duration (5s - 10s)
  
    flowerContainer.appendChild(flower);
  
    setTimeout(() => {
      flower.remove();
    }, 10000);
  }
  
 
  


  