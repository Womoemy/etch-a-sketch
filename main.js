const container_div = document.getElementById("container");

// const gridsq_div = document.createElement("div");
// gridsq_div.classList.add("gridsq");

// container_div.appendChild(gridsq_div);

for (let i = 0; i < 16; i++) {
    // let gridsq_div = document.createElement("div");
    // gridsq_div.classList.add("gridsq");

    // container_div.appendChild(gridsq_div);
    const row = container_div.appendChild(document.createElement("div"));
    
    for (let j = 0; j < 16; j++) {
        const gridsq_div = document.createElement("div");
        gridsq_div.classList.add("gridsq");

        row.appendChild(gridsq_div);
        // container_div.appendChild(gridsq_div);
    }
}