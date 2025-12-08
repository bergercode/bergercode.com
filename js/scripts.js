var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname, event) {
            // Includes Aria-Selected for screen readers
            // REMOVE active states
            for (let tablink of tablinks) {
                tablink.classList.remove('active-link');
                tablink.setAttribute("aria-selected", "false");
            }
            for (let tabcontent of tabcontents) {
                tabcontent.classList.remove('active-tab');
                tabcontent.setAttribute("hidden", "true");
            }

            // ADD active states
            event.currentTarget.classList.add('active-link');
            event.currentTarget.setAttribute("aria-selected", "true");

            let panel = document.getElementById("panel-" + tabname)
                || document.getElementById(tabname); // fallback if you rename panels

            panel.classList.add('active-tab');
            panel.removeAttribute("hidden");
        }