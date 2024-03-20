function projectDOM() {
    const clickOnButton = () => {
        const form = document.createElement('form');
        const input = document.createElement('input');
        const groupButtons = document.createElement('div');
        const addButton = document.createElement('button');
        const addButtonIcon = document.createElement('i');
        const cancelButton = document.createElement('button');
        const cancelButtonIcon = document.createElement('i');

        form.classList.add('new-project-form');
        input.classList.add('form-control');
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

    return {
        clickOnButton
    };
}

export { projectDOM };