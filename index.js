document.addEventListener("DOMContentLoaded", function () {
    const expand_btn = document.getElementById("expand-btn");
    const collapse_btn = document.getElementById("collapse-btn");
    const sub_items = document.getElementsByClassName("sub-items");

    expand_btn.addEventListener("click", () => {
        for (let i = 0; i < sub_items.length; ++i) {
            sub_items[i].style.display = "block";
        }
    });
    collapse_btn.addEventListener("click", () => {
        for (let i = 0; i < sub_items.length; ++i) {
            sub_items[i].style.display = "none";
        }
    });

    const contact = document.getElementById("contact");
    contact.addEventListener("click", () => {
        const ul = contact.nextElementSibling;
        if (ul.style.display == "none") {
            ul.style.display = "block";
        } else {
            ul.style.display = "none";
        }
    });

    const resume = document.getElementById("resume");
    resume.addEventListener("click", () => {
        const ul = resume.nextElementSibling;
        if (ul.style.display == "none") {
            ul.style.display = "block";
        } else {
            ul.style.display = "none";
        }
    });

    const projects = document.getElementById("projects");
    projects.addEventListener("click", () => {
        const ul = projects.nextElementSibling;
        if (ul.style.display == "none") {
            ul.style.display = "block";
        } else {
            ul.style.display = "none";
        }
    });
});
