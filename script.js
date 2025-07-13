document.addEventListener("DOMContentLoaded", function () {
    const courseItems = document.querySelectorAll("ul li");
    const summaryDiv = document.createElement("div");
    summaryDiv.id = "summary";
    document.body.appendChild(summaryDiv);

    function updateSummary() {
        const total = courseItems.length;
        const completed = document.querySelectorAll("ul li.completed").length;
        const remaining = total - completed;
        summaryDiv.innerHTML = `Resumen: Cursos realizados: ${completed} | Por realizar: ${remaining}`;
    }

    courseItems.forEach(item => {
        item.addEventListener("click", function () {
            item.classList.toggle("completed");
            updateSummary();
        });
    });

    updateSummary();
});
