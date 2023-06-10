let btnshare = document.querySelector(".share");
let contentshare = document.querySelector(".content-share");
btnshare.onclick = () => {
    if(contentshare.style.display === "none"){
        contentshare.style.display = "flex";
        btnshare.classList.add("active");
    }else{
        contentshare.style.display = "none";
        btnshare.classList.remove("active");
    }
}
