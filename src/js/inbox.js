import { DOMHandler } from "./utility";
import { projectDOM } from "./project";

function inboxDOM() {
    const utilities = DOMHandler();
    const projects = projectDOM();
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
            const modal = projects.createTaskModal(setId, setTitle);
            document.body.appendChild(modal);
        }
        projects.openModal(setId);
    }

    return {
        displayInbox
    };
}

export { inboxDOM };