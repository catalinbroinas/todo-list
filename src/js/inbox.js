import { DOMHandler } from "./utility";
import { projectDOM } from "./project";
import { ProjectManager } from "./project";

function inboxDOM() {
    const utilities = DOMHandler();
    const projectDom = projectDOM();
    const projectManager = ProjectManager();
    const pageContent = document.querySelector('#content');

    const displayInbox = () => {
        const addTaskButton = utilities.createButton({
            name: 'Add Task',
            buttonClass: ['add-task-btn'],
            iconClass: ['mdi', 'mdi-plus', 'add-task-icon'],
            clickHandler: () => createAndOpenModal('add-task-modal', 'Add new task')
        });
        const inboxTasks = projectDom.displayTasks('Inbox');

        utilities.setActiveSidebarButton('inbox-btn');
        utilities.clearPageContent(pageContent);

        pageContent.appendChild(utilities.addTitle('Inbox'));
        if (inboxTasks) {
            pageContent.appendChild(inboxTasks);
        }
        pageContent.appendChild(addTaskButton);
    };

    const createAndOpenModal = (setId, setTitle) => {
        if (!document.querySelector(`${setId}`)) {
            const modal = projectDom.createTaskModal(setId, setTitle);
            document.body.appendChild(modal);
        }
        projectDom.openModal(setId);
    };

    return {
        displayInbox
    };
}

export { inboxDOM };