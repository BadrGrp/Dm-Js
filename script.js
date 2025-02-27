// recuperer toutes les balises de classe 'panel'

let panel = document.getElementsByClassName("panel")
console.log(panel)

// pour chaque DIV de la collection d'objets de classe 'panel'
for (let i = 0; i < panel.length; i++) {
    panel[i].addEventListener("click", function() {
        // Enlever la classe 'active' de tous les panels
        for (let j = 0; j < panel.length; j++) {
            panel[j].classList.remove("active");
        }
    });
}
        