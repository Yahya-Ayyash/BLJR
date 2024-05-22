// Add Event Listener
// Memberikan interaktivitas kepada suatu element HTML
// Contoh event click:


//! Ketika gambar diklik, dia menjalankan function shooter
let gambar = document.querySelector(".shooter");

function shoot() {
    let bulletDiv = document.createElement('div');

    bulletDiv.className = "bullet";

    document.querySelector("section").appendChild(bulletDiv)
}
gambar.addEventListener("click", shoot)
