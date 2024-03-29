import { DOMHandler } from "./utility";

function inboxDOM() {
    const utilities = DOMHandler();
    const pageContent = document.querySelector('#content');

    const displayInbox = () => {
        const addTaskButton = utilities.createButton({
            name: 'Add Task',
            buttonClass: ['add-task-btn'],
            iconClass: ['mdi', 'mdi-plus', 'add-task-icon']
        });

        utilities.setActiveSidebarButton('inbox-btn');
        utilities.clearPageContent(pageContent);

        pageContent.appendChild(utilities.addTitle('Inbox'));
        pageContent.appendChild(addTaskButton);
    };

    return {
        displayInbox
    };
}

export { inboxDOM };