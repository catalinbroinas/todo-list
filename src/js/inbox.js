import { DOMHandler } from "./utility";

function inboxDOM() {
    const utilities = DOMHandler();
    const pageContent = document.querySelector('#content');

    const addTask = () => {
        const addTaskButton = document.createElement('button');
        const addTaskIcon = document.createElement('i');

        addTaskButton.setAttribute('type', 'button');
        addTaskButton.classList.add('add-task-btn');
        addTaskIcon.classList.add('mdi', 'mdi-plus', 'add-task-icon');

        addTaskButton.appendChild(addTaskIcon);
        addTaskButton.insertAdjacentText('beforeend', 'Add Task');

        return addTaskButton;
    };

    const displayInbox = () => {
        utilities.setActiveSidebarButton('inbox-btn');
        utilities.clearPageContent(pageContent);

        pageContent.appendChild(utilities.addTitle('Inbox'));
        pageContent.appendChild(addTask());
    };

    return {
        displayInbox
    };
}

export { inboxDOM };