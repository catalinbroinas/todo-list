import { DOMHandler } from "./utility";

function inboxDOM() {
    const utilities = DOMHandler();
    const pageContent = document.querySelector('#content');

    const displayInbox = () => {
        const addTaskButton = utilities.createButton({
            name: 'Add Task',
            buttonClass: ['add-task-btn'],
            iconClass: ['mdi', 'mdi-plus', 'add-task-icon'],
            clickHandler: () => createAndOpenModal('add-task-modal', 'Add new task')
        });

        utilities.setActiveSidebarButton('inbox-btn');
        utilities.clearPageContent(pageContent);

        pageContent.appendChild(utilities.addTitle('Inbox'));
        pageContent.appendChild(addTaskButton);
    };

    const createAndOpenModal = (setId, setTitle) => {
        if (!document.querySelector(`${setId}`)) {
            const modal = utilities.createTaskModal(setId, setTitle);
            document.body.appendChild(modal);
        }
        utilities.openModal(setId);
    }

    return {
        displayInbox
    };
}

export { inboxDOM };