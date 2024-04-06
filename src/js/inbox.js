import { DOMHandler } from "./utility";
import { projectDOM } from "./project";

function inboxDOM() {
    const utilities = DOMHandler();
    const projectDom = projectDOM();

    const displayInbox = () => {
        const inboxButton = document.querySelector('#inbox-btn');
        utilities.setActiveSidebarButton('inbox-btn');
        projectDom.pageContent('Inbox');
        projectDom.setActiveProject({ target: inboxButton }); // Simulate an event to set the project active
    };

    return {
        displayInbox
    };
}

export { inboxDOM };