import { DOMHandler } from "./utility";
import { projectDOM } from "./project";

function inboxDOM() {
    const utilities = DOMHandler();
    const projectDom = projectDOM();

    const displayInbox = () => {
        utilities.setActiveSidebarButton('inbox-btn');
        projectDom.pageContent('Inbox');
    };

    return {
        displayInbox
    };
}

export { inboxDOM };