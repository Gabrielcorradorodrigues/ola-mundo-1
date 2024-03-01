document.addEventListener("DOMContentLoaded", () => {;
    const texto = document.body.querySelector("#texto");
    texto.addEventListener("click", ()=> {
        if(texto.textContent === "Olá Eduardo")
            texto.textContent = "seu viado";
        else
            texto.textContent = "Olá Eduardo"
    })
})
