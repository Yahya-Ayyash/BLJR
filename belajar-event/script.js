// Add Event Listener to the shooter image
let gambar = document.querySelector(".shooter");

function shoot() {
    // Create a new div element for the bullet
    let bulletDiv = document.createElement('div');

    // Assign the 'bullet' class to the new div
    bulletDiv.className = "bullet";

    // Append the bullet div to the section
    document.querySelector("section").appendChild(bulletDiv);
}

// Attach the shoot function to the click event of the shooter image
gambar.addEventListener("click", shoot);
