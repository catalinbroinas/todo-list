function inboxDOM() {
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

    return {
        addTask
    };
}

export { inboxDOM };