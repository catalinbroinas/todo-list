function DOMHandler() {
    const clearPageContent = (container) => {
        if (container.hasChildNodes()) {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        }
    };

    const setActiveSidebarButton = (getActiveButton) => {
        const navItems = document.querySelectorAll('.nav-item');
        const setActiveItem = document.querySelector(`#${getActiveButton}`);


        navItems.forEach((item) => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });

        if (setActiveItem) {
            setActiveItem.classList.add('active');
        }
    };

    const addTitle = (setTitle) => {
        const title = document.createElement('h3');
        title.classList.add('content-title');
        title.textContent = setTitle;

        return title;
    };

    const createButton = ({ name, title, buttonClass, iconClass, clickHandler }) => {
        const button = document.createElement('button');
        const buttonIcon = document.createElement('i');

        button.setAttribute('type', 'button');

        if (title) {
            button.setAttribute('title', title);
        }
        if (buttonClass) {
            buttonClass.forEach(className => button.classList.add(className));
        }
        if (iconClass) {
            iconClass.forEach(className => buttonIcon.classList.add(className));
        }
        if (clickHandler) {
            button.addEventListener('click', clickHandler);
        }

        button.appendChild(buttonIcon);
        if (name) {
            button.insertAdjacentText('beforeend', name);
        }

        return button;
    };

    const createInputElement = ({ inputType, inputId, inputClass, inputName, inputPlaceholder }) => {
        const input = document.createElement('input');

        input.setAttribute('type', inputType);
        input.setAttribute('type', inputId);

        if (inputClass) {
            inputClass.forEach(className => input.classList.add(className));
        }

        if (inputName) {
            input.setAttribute('name', inputName);
        }

        if (inputPlaceholder) {
            input.setAttribute('placeholder', inputPlaceholder);
        }

        return input;
    };

    const createSelectElement = ({ selectName, selectId, selectClass }) => {
        const select = document.createElement('select');

        select.setAttribute('name', selectName);
        select.setAttribute('id', selectId);

        if (selectClass) {
            selectClass.forEach(className => select.classList.add(className));
        }

        return select;
    };

    const createOptionElement = ({ optionValue, optionText, optionDisabled = false }) => {
        const option = document.createElement('option');

        option.setAttribute('value', optionValue);
        option.textContent = optionText;

        if (optionDisabled) {
            option.setAttribute('disabled', 'disabled');
        }

        return option;
    };

    const createTaskForm = () => {
        const form = document.createElement('form');
        const taskDetails = document.createElement('div');
        const taskMetadata = document.createElement('div');
        const taskActions = document.createElement('div');

        const taskTitleInput = createInputElement({
            inputType: 'text',
            inputId: 'task-title',
            inputClass: ['form-control'],
            inputPlaceholder: 'Title'
        });
        const taskDescInput = createInputElement({
            inputType: 'text',
            inputId: 'task-description',
            inputClass: ['form-control'],
            inputPlaceholder: 'Description'
        });
        const taskDateInput = createInputElement({
            inputType: 'date',
            inputId: 'task-date',
            inputClass: ['form-control'],
        });

        const taskPriority = createSelectElement({
            selectName: 'task-priority',
            selectId: 'task-priority',
            selectClass: ['form-control']
        });
        const taskProject = createSelectElement({
            selectName: 'task-project',
            selectId: 'task-project',
            selectClass: ['form-control']
        });

        const optionPriority = createOptionElement({
            optionValue: '',
            optionText: 'Choose the priority',
            optionDisabled: true
        });
        const optionPriorityCritical = createOptionElement({
            optionValue: 'critical',
            optionText: 'Critical'
        });
        const optionPriorityHigh = createOptionElement({
            optionValue: 'high',
            optionText: 'High'
        });
        const optionPriorityMedium = createOptionElement({
            optionValue: 'medium',
            optionText: 'Medium'
        });
        const optionPriorityLow = createOptionElement({
            optionValue: 'low',
            optionText: 'Low'
        });

        const optionProject = createOptionElement({
            optionValue: '',
            optionText: 'Include in<',
            optionDisabled: true
        });
        const optionProjectInbox = createOptionElement({
            optionValue: 'inbox',
            optionText: 'Inbox'
        });

        const sendButton = createButton({
            name: 'Add',
            buttonClass: ['add-btn'],
            iconClass: ['mdi', 'mdi-send', 'action-btn-icon'],
            clickHandler: handleSendButton
        });
        const cancelButton = createButton({
            name: 'Cancel',
            buttonClass: ['cancel-btn'],
            iconClass: ['mdi', 'mdi-cancel', 'action-btn-icon'],
            clickHandler: handleCancelButton
        });

        form.appendChild(taskDetails);
        form.appendChild(taskMetadata);
        form.appendChild(taskActions);
        taskDetails.appendChild(taskTitleInput);
        taskDetails.appendChild(taskDescInput);
        taskMetadata.appendChild(taskDateInput);
        taskMetadata.appendChild(taskPriority);
        taskMetadata.appendChild(taskProject);
        taskActions.appendChild(sendButton);
        taskActions.appendChild(cancelButton);
        taskPriority.appendChild(optionPriority);
        taskPriority.appendChild(optionPriorityCritical);
        taskPriority.appendChild(optionPriorityHigh);
        taskPriority.appendChild(optionPriorityMedium);
        taskPriority.appendChild(optionPriorityLow);
        taskProject.appendChild(optionProject);
        taskProject.appendChild(optionProjectInbox);

        return form;
    };

    const removeElement = (element) => {
        if (element) {
            element.remove();
        }
    };

    return { 
        clearPageContent,
        setActiveSidebarButton,
        addTitle,
        createButton,
        createTaskForm,
        removeElement
    };
}

export { DOMHandler };