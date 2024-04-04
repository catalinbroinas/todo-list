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

    const createDOMElement = ({ elementTag, elementClass, elementId, elementText }) => {
        const element = document.createElement(elementTag);
        if (elementId) {
            element.setAttribute('id', elementId);
        }
        if (elementClass) {
            elementClass.forEach(className => element.classList.add(className));
        }
        if (elementText) {
            element.textContent = elementText;
        }
        return element;
    };

    const createTaskItem = ({ titleText, description, dueDate, priority }) => {
        let priorityClass = '';
        switch (priority) {
            case 'critical':
                priorityClass = 'critical-priority';
                break;
            case 'high':
                priorityClass = 'high-priority';
                break;
            case 'medium':
                priorityClass = 'medium-priority';
                break;
            case 'low':
                priorityClass = 'low-priority';
                break;
        }

        const task = createDOMElement({
            elementTag: 'div',
            elementClass: ['task', priorityClass]
        });
        const taskStatus = createDOMElement({
            elementTag: 'div',
            elementClass: ['task-status']
        });
        const taskBody = createDOMElement({
            elementTag: 'div',
            elementClass: ['task-body']
        });
        const taskAction = createDOMElement({
            elementTag: 'div',
            elementClass: ['task-action']
        });

        const taskStatusCheckbox = createInputElement({
            inputType: 'checkbox',
            inputClass: ['task-status-checkbox']
        });

        const taskTitle = createDOMElement({
            elementTag: 'p',
            elementClass: ['task-title'],
            elementText: titleText
        });
        const taskDesc = createDOMElement({
            elementTag: 'p',
            elementClass: ['task-description'],
            elementText: description ? description : ''
        });

        const taskDueDate = createInputElement({
            inputType: 'date',
            inputClass: ['task-action-date'],
            inputValue: dueDate ? dueDate : ''
        });

        const editButton = createButton({
            title: 'Edit Task',
            buttonClass: ['task-action-btn', 'edit-btn'],
            iconClass: ['mdi', 'mdi-pencil', 'task-icon'],
        });
        const deleteButton = createButton({
            title: 'Delete Task',
            buttonClass: ['task-action-btn', 'remove-btn'],
            iconClass: ['mdi', 'mdi-delete', 'task-icon'],
        });

        task.appendChild(taskStatus);
        task.appendChild(taskBody);
        task.appendChild(taskAction);
        taskStatus.appendChild(taskStatusCheckbox);
        taskBody.appendChild(taskTitle);
        taskBody.appendChild(taskDesc);
        taskAction.appendChild(taskDueDate);
        taskAction.appendChild(editButton);
        taskAction.appendChild(deleteButton);

        return task;
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
        createSelectElement,
        createOptionElement,
        removeElement,
        createTaskItem,
        createDOMElement
    };
}

export { DOMHandler };