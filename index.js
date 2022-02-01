
   let morebtn =  document.querySelector(".navmore")
   let ulbox =  document.querySelector("#ulbox")
   let morearrowdown =  document.querySelector(".fa-chevron-down")
   let morearrowup =  document.querySelector(".fa-chevron-up")
   morebtn.addEventListener("mouseover",()=>{
    ulbox.style.display = "block"
    morearrowdown.style.display = "none"
    morearrowup.style.display = "block"
   })

   morebtn.addEventListener("mouseleave",()=>{
    ulbox.style.display = "none"
    morearrowdown.style.display = "block"
    morearrowup.style.display = "none"
   })

   let loginbtn =  document.querySelector("#login")
   let loginulbox =  document.querySelector("#loginulbox")

   loginbtn.addEventListener("mouseover",()=>{
    loginulbox.style.display = "block"
   })

   loginbtn.addEventListener("mouseleave",()=>{
    loginulbox.style.display = "none"
   })
