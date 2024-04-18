import { DOMHandler } from "./utility";
import { projectDOM } from "./project";

function inboxDOM() {
    const utilities = DOMHandler();
    const projectDom = projectDOM();

    const displayInbox = () => {
        const inboxButton = document.querySelector('#inbox-btn');

        utilities.setActiveSidebarButton('inbox-btn');
        projectDom.pageContent('Inbox');

        // Simulate an event to set the project active
        projectDom.setActiveProject({ target: inboxButton }); 
    };

    return {
        displayInbox
    };
}

export { inboxDOM };