document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".bucket-list li");

    items.forEach(item => {
        item.addEventListener("click", function() {
            item.classList.toggle("completed");
        });
    });
});
