let dataArray = [];

document.getElementById("btn-add").addEventListener("click", addTarea);

function addTarea() {
    const input = document.getElementById("value-nt");
    const tarea = input.value.trim();

    if (tarea !== "") {
        const newTarea = { id: generateID(), tarea: tarea };
        dataArray.push(newTarea);
        input.value = "";
        render();
    }
}

function generateID() {
    return Math.random().toString(36).substr(2, 9);
}

function render() {
    const body = document.getElementById("tbody");
    body.innerHTML = "";

    dataArray.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.tarea}</td>
            <td><button class="btn-delete" data-id="${item.id}" style="color: red;">X</button></td>
        `;
        body.appendChild(row);
    });

    document.querySelectorAll(".btn-delete").forEach(button => {
        button.addEventListener("click", () => {
            const id = button.dataset.id;
            dataArray = dataArray.filter(item => item.id !== id);
            render();
        });
    });
}
