import { modeBtn, sharebtn } from "./constant.js"

modeBtn.addEventListener("click" , () => {
    const h = document.querySelector("html")

    if (h.hasAttribute("data-bs-theme")) {
       h.removeAttribute("data-bs-theme")
       modeBtn.innerHTML = `<i class="bi bi-sun"></i>`    
       modeBtn.classList.remove("btn-dark")   
       modeBtn.classList.add("btn-light")   
    } else {
       h.setAttribute("data-bs-theme", "dark") 
       modeBtn.innerHTML = `<i class="bi bi-moon"></i>` 
       modeBtn.classList.remove("btn-light")   
       modeBtn.classList.add("btn-dark")   
    }

              
})

sharebtn.addEventListener("click", () => {
   if (navigator.share) {
      navigator.share({
         title: "Awasome PWA Camera App",
         text:"Switch, capture, share Moments",
         url:"https://abhisucks.github.io/pwa-camera/"
      })
   }
})