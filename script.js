function createTable() {
    let inputValue = document.getElementById('input').value;
    let tableau = document.getElementById('tableau');
    let reset = document.getElementById('reset');
    let text = document.getElementById('input');

    if (inputValue <= 0 || inputValue > 1000) {
        alert("Veuillez mettre un nombre entre 1 et 999 !")
    } else {
        tableau.innerText = " ";
        tableau.style.display = "block";
        for (var i = 0; i <= 10; i++) {
            let resulta = `${inputValue} * ${i} = ${inputValue * i} <hr>`;
            tableau.innerHTML += resulta;
        }
        text.value = " ";
        reset.style.display = "block";
    }    
}

function resetTableau() {
    let tableau = document.getElementById("tableau");
    let reset = document.getElementById("reset");
    tableau.style.display = "none";
    reset.style.display = "none";
}