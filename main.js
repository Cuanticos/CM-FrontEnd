const modalViews = document.querySelectorAll(".conteiner-modal")
    modalBtns = document.querySelectorAll(".btn-normal"),
    modalCloses = document.querySelectorAll(".modal-close")


let modal = function(modalCLick) {
    modalViews[modalCLick].classList.add("active-modal")
}


modalBtns.forEach((modalbtns, i) =>{
    modalbtns.addEventListener("click", () =>{
        modal(i)
    })  
})

modalCloses.forEach((modalClose) => {       
    modalClose.addEventListener("click",() =>{
        modalViews.forEach((modalViews)=>{
            modalViews.classList.remove("active-modal")
        })
    })
})
