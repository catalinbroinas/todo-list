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

    const createInputElement = ({
        inputType, inputId, inputClass, inputName, inputPlaceholder, inputValue, inputFocus
    }) => {
        const input = document.createElement('input');

        input.setAttribute('type', inputType);
        input.setAttribute('id', inputId);

        if (inputClass) {
            inputClass.forEach(className => input.classList.add(className));
        }

        if (inputName) {
            input.setAttribute('name', inputName);
        }

        if (inputPlaceholder) {
            input.setAttribute('placeholder', inputPlaceholder);
        }

        if (inputValue) {
            input.setAttribute('value', inputValue);
        }

        if (inputFocus) {
            input.setAttribute('autofocus', 'autofocus');
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

        form.classList.add('insert-task-form');
        taskDetails.classList.add('task-details');
        taskMetadata.classList.add('task-metadata');
        taskActions.classList.add('group-btn');

        const taskTitleInput = createInputElement({
            inputType: 'text',
            inputId: 'task-title',
            inputClass: ['form-control'],
            inputPlaceholder: 'Title',
            inputFocus: true
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
            optionText: 'Include in',
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
            clickHandler: () => handleSendButton()
        });
        const cancelButton = createButton({
            name: 'Cancel',
            buttonClass: ['cancel-btn'],
            iconClass: ['mdi', 'mdi-cancel', 'action-btn-icon'],
            clickHandler: () => handleCancelButton(event)
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

    const createTaskModal = (modalId, modalTitle) => {
        const dialog = document.createElement('dialog');
        const header = document.createElement('div');
        const title = addTitle(modalTitle);
        const form = createTaskForm();

        dialog.setAttribute('id', modalId);
        dialog.classList.add('task-modal');
        header.classList.add('modal-header');
        title.classList.add('modal-title');

        const closeButton = createButton({
            buttonClass: ['close-btn'],
            iconClass: ['mdi', 'mdi-close'],
            clickHandler: () => closeModal(modalId)
        });

        dialog.appendChild(header);
        dialog.appendChild(form);
        header.appendChild(title);
        header.appendChild(closeButton);

        return dialog;
    };

    const openModal = (modalId) => {
        const dialog = document.querySelector(`#${modalId}`);
        if (dialog && !dialog.open) {
            dialog.showModal();
            dialog.addEventListener('keydown', (event) => {
                closeModalOnEsc(modalId, event);
            });
        }
    };

    const closeModal = (modalId) => {
        const dialog = document.querySelector(`#${modalId}`);
        if (dialog && dialog.open) {
            dialog.close();
            removeElement(dialog);
            dialog.removeEventListener('keydown', (event) => {
                closeModalOnEsc(modalId, event);
            });
        }
    };

    const closeModalOnEsc = (modalId, event) => {
        if (event.key === 'Escape') {
            closeModal(modalId);
        }
    };

    const handleCancelButton = (event) => {
        const button = event.target;
        const modal = button.closest('.task-modal');
        closeModal(modal.id);
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
        createInputElement,
        createTaskForm,
        createTaskModal,
        openModal,
        removeElement
    };
}

export { DOMHandler };