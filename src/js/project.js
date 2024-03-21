function projectDOM() {
    const createNewProjectForm = () => {
        const form = document.createElement('form');
        const input = document.createElement('input');
        const groupButtons = document.createElement('div');
        const addButton = document.createElement('button');
        const addButtonIcon = document.createElement('i');
        const cancelButton = document.createElement('button');
        const cancelButtonIcon = document.createElement('i');

        form.classList.add('new-project-form');
        input.classList.add('form-control');
        groupButtons.classList.add('group-btn');
        addButton.classList.add('add-btn');
        addButtonIcon.classList.add('mdi', 'mdi-send', 'action-btn-icon');
        cancelButton.classList.add('cancel-btn');
        cancelButtonIcon.classList.add('mdi', 'mdi-cancel', 'action-btn-icon');

        input.setAttribute('type', 'text');
        input.setAttribute('id', 'set-name-project');
        input.setAttribute('name', 'name-project');
        input.setAttribute('placeholder', 'Name');
        addButton.setAttribute('type', 'button');
        cancelButton.setAttribute('type', 'button');

        addButton.addEventListener('click', (event) => {
            setTimeout(() => addNewProject(input.value), 500);
        });

        form.appendChild(input);
        form.appendChild(groupButtons);
        groupButtons.appendChild(addButton);
        addButton.appendChild(addButtonIcon);
        addButton.insertAdjacentText('beforeend', 'Add');
        groupButtons.appendChild(cancelButton);
        cancelButton.appendChild(cancelButtonIcon);
        cancelButton.insertAdjacentText('beforeend', 'Cancel');

        return form;
    };
    
    const addNewProject = (name) => {
        const sidebarProject = document.querySelector('#sidebar-project');
        const newItems = document.createElement('button');
        const newItemsIcon = document.createElement('i');

        newItems.classList.add('nav-item');
        newItemsIcon.classList.add('mdi', 'mdi-laptop', 'nav-icon');

        newItems.setAttribute('type', 'button');
        newItems.setAttribute('id', `${name.toLowerCase()}-btn`);

        newItems.appendChild(newItemsIcon);
        newItems.insertAdjacentText('beforeend', `${name}`);
        sidebarProject.appendChild(newItems);
    };

    return {
        createNewProjectForm
    };
}

export { projectDOM };