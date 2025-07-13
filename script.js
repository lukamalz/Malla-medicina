document.addEventListener("DOMContentLoaded", function () {
    const courseItems = document.querySelectorAll("ul li");
    const summaryDiv = document.createElement("div");
    summaryDiv.id = "summary";
    summaryDiv.style.marginTop = "20px";
    summaryDiv.style.fontWeight = "bold";
    document.body.appendChild(summaryDiv);

    function updateSummary() {
        const total = courseItems.length;
        const completed = document.querySelectorAll("ul li.completed").length;
        const remaining = total - completed;
        summaryDiv.innerHTML = `Resumen: Cursos realizados: ${completed} | Por realizar: ${remaining}`;
    }

    courseItems.forEach(item => {
        item.style.cursor = "pointer";
        item.addEventListener("click", function () {
            item.classList.toggle("completed");
            if (item.classList.contains("completed")) {
                item.style.textDecoration = "line-through";
                item.style.color = "gray";
            } else {
                item.style.textDecoration = "none";
                item.style.color = "black";
            }
            updateSummary();
        });
    });

    updateSummary();
});
