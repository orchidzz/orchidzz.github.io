document.addEventListener("DOMContentLoaded", function () {
    // menu
    const menu_btn = document.getElementById("menu-btn");
    const menu_collapsible = document.getElementById("navbar-collapsible");
    menu_btn.addEventListener("click", () => {
        if (window.getComputedStyle(menu_collapsible).display === "none") {
            menu_collapsible.style.display = "flex";
        } else {
            menu_collapsible.style.display = "none";
        }
    });

    // create tags
    const tags = [
        "colors",
        "san diego",
        "catalina",
        "chicago",
        "aquarium",
        "solvang",
        "wrightwood",
        "aquarium 2",
    ];
    const tags_container = document.getElementById("tags-container");
    populateWithTags(tags);

    // search
    const search_btn = document.getElementById("search-btn");
    const search_inp = document.getElementById("search-input");
    search_btn.addEventListener("click", () => {
        tags_container.innerHTML = "";
        const inputVal = search_inp.value.toLowerCase();
        if (inputVal === "") {
            populateWithTags(tags);
        } else {
            let foundTags = [];
            tags.forEach((tag) => {
                if (inputVal.length >= 2 && tag.includes(inputVal)) {
                    foundTags.push(tag);
                }
            });
            populateWithTags(foundTags);
        }
    });
    search_inp.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            search_btn.click();
        }
    });

    // soundcloud player
    const widgetIframe = document.getElementById("soundcloud-widget");
    const player = SC.Widget(widgetIframe);
    const sound_btn = document.getElementById("sound-btn");
    // player.bind(SC.Widget.Events.READY, function () {
    //     player.play();
    // });
    player.bind(SC.Widget.Events.FINISH, function () {
        player.seekTo(0); // Reset the track to the beginning
        player.play(); // Play the track again
    });
    let isMute = true;
    sound_btn.addEventListener("click", () => {
        isMute = !isMute;
        if (isMute) {
            sound_btn.classList.remove("bi-volume-down-fill");
            sound_btn.classList.add("bi-volume-mute-fill");
            player.pause();
        } else {
            sound_btn.classList.remove("bi-volume-mute-fill");
            sound_btn.classList.add("bi-volume-down-fill");
            player.play();
        }
    });
});

function populateWithTags(tags) {
    const tags_container = document.getElementById("tags-container");
    const baseUrl = "http://orchidzz.github.io"; // change when in development
    tags.forEach((tag) => {
        const newTag = document.createElement("button");
        newTag.className = "tags";
        newTag.textContent = tag;
        newTag.addEventListener("click", function () {
            window.location.href = `${baseUrl}/photography/${tag}`;
        });
        tags_container.appendChild(newTag);
    });
}
