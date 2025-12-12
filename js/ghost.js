var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    // Remove active-link from all tabs
    for (let tablink of tablinks) {
        tablink.classList.remove('active-link');
        tablink.setAttribute("aria-selected", "false");
    }

    // Add active-link to clicked tab
    event.currentTarget.classList.add('active-link');
    event.currentTarget.setAttribute("aria-selected", "true");

    // Toggle active-tab on content with "drawer" effect
    for (let tabcontent of tabcontents) {
        if (tabcontent.id === "panel-" + tabname) {
            tabcontent.classList.add('active-tab');
        } else {
            tabcontent.classList.remove('active-tab');
        }
    }
}



// With timeout
function opentab(tabname, event) {
    // Remove active-link from all tabs
    for (let tablink of tablinks) {
        tablink.classList.remove('active-link');
        tablink.setAttribute("aria-selected", "false");
    }

    // Remove all active-tab panels immediately
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }

    // Wait 2 seconds, then activate the clicked tab + its panel
    setTimeout(() => {
        // Add active-link to clicked tab
        event.currentTarget.classList.add('active-link');
        event.currentTarget.setAttribute("aria-selected", "true");

        // Activate the correct panel
        const panelToOpen = document.getElementById("panel-" + tabname);
        if (panelToOpen) {
            panelToOpen.classList.add('active-tab');
        }
    }, 2000); // 2000ms = 2 seconds
}