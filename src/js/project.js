import { DOMHandler, WebStorage, StringMethods } from "./utility";
import { isSameDay, isSameWeek } from "date-fns";

function ProjectManager() {
    const storage = WebStorage();

    const getProjectsStorageKey = () => 'projects';
    const getDefaultProjectName = () => 'Inbox';

    const validateTitle = (currentValue) => currentValue.length > 2 && currentValue.length < 21;
    const validateText = (currentValue) => currentValue.length > 2 && currentValue.length < 101;
    const validateIndex = (currentValue) => Number.isInteger(currentValue) && currentValue >= 0;

    const createProject = (projectName) => {
        return {
            name: projectName,
            tasks: []
        };
    };

    const addProject = (project) => {
        // Checks if localStorage is available and accessible
        if (!storage.storageAvailable('localStorage')) {
            console.error('localStorage is not available.');
            return false;
        }

        // Get projects array
        const existProjects = getProjects();

        // Verify if exist projects array
        if (existProjects) {
            // Search if the project already exists in the array
            const result = existProjects.find(item => item.name.toLocaleLowerCase() === project.name.toLocaleLowerCase());

            if (validateTitle(project.name) && !result) {
                existProjects.push(project);
                saveProjects(existProjects);
            } else {
                console.error('The project already exist or his name was very short.');
                return false;
            }
        } else {
            // Create a new array with the first project and save it in `localStorage`
            localStorage.setItem(getProjectsStorageKey(), JSON.stringify([project]));
        }

        return true;
    };

    const createTask = ({
        title,
        description,
        dueDate,
        priority,
        completed
    }) => {
        return {
            title,
            description,
            dueDate,
            priority,
            completed: false
        };
    };

    const addTask = (task, projectName) => {
        // Checks if localStorage is available and accessible
        if (!storage.storageAvailable('localStorage')) {
            console.error('localStorage is not available.');
            return false;
        }

        // Check that the data entered is correct
        const taskDate = new Date(task.dueDate);
        if (!validateTitle(task.title) || !validateText(task.description) || isNaN(taskDate.getTime())) {
            console.error('The data entered is incorrect.');
            return false;
        }

        const existingProjects = getProjects();
        const defaultProjectName = getDefaultProjectName();
        const existingTasks = getTasks(projectName);

        // Create inbox project and add task
        if (!existingProjects) {
            const defaultProject = createProject(defaultProjectName);
            addProject(defaultProject);
            console.log('The first project is successful added!');
            addTask(task, projectName);
            location.reload();
        }

        // Verify if the tasks array is not empty
        if (existingTasks) {
            // Search if the task already exists in the array
            const result = existingTasks.find(item => item.title.toLocaleLowerCase() === task.title.toLocaleLowerCase());
            if (result) {
                console.error('This task already exists!');
                return false;
            }
        }

        // Verify if project`s name is 'Inbox'
        if (projectName.toLowerCase() === defaultProjectName.toLowerCase()) {
            // Search 'Inbox' project
            const inboxProjectIndex = existingProjects.findIndex(project => project.name.toLowerCase() === defaultProjectName.toLowerCase());

            if (inboxProjectIndex !== -1) {
                // Add task to 'Inbox'
                existingProjects[inboxProjectIndex].tasks.push(task);
            } else {
                // Create 'Inbox' project and add task to'Inbox'
                const inboxProject = createProject(defaultProjectName);
                if (addProject(inboxProject)) {
                    existingProjects.push(inboxProject);
                    existingProjects[existingProjects.length - 1].tasks.push(task);
                    // Update content after first task added
                    if (!existingTasks) {
                        location.reload();
                    }
                } else {
                    console.error('The task has not been added.');
                    return false;
                }
            }
        } else {
            // Search `projectName` in projects array
            const projectIndex = existingProjects.findIndex(project => project.name.toLowerCase() === projectName.toLowerCase());

            if (projectIndex !== -1) {
                // Add task to `projectName`
                existingProjects[projectIndex].tasks.push(task);
                // Update content after first task added
                if (!existingTasks) {
                    location.reload();
                }
            } else {
                console.error('The project was not found!');
                return false;
            }
        }

        // Update projects array
        saveProjects(existingProjects);
        return true;
    };

    const getProjects = () => {
        if (localStorage.getItem(getProjectsStorageKey())) {
            return JSON.parse(localStorage.getItem(getProjectsStorageKey()));
        } else {
            return false;
        }
    };

    const getTasks = (projectName) => {
        // Project array is empty
        const existingProjects = getProjects();
        if (!existingProjects) {
            return false;
        }

        // Check if the project exists
        const project = existingProjects.find(project => project.name.toLocaleLowerCase() === projectName.toLocaleLowerCase());
        if (project) {
            return project.tasks;
        } else {
            return false;
        }
    };

    const removeProject = (index) => {
        const existProjects = getProjects();

        if (validateIndex(index)) {
            existProjects.splice(index, 1);
        } else {
            console.error('The project was not removed.');
            return false;
        }

        // Update project array
        saveProjects(existProjects);
        return true;
    };

    const removeTask = (projectIndex, taskIndex) => {
        const existingProjects = getProjects();

        if (validateIndex(projectIndex) && validateIndex(taskIndex)) {
            existingProjects[projectIndex].tasks.splice(taskIndex, 1);
        } else {
            console.error('The task was not removed.');
            return false;
        }

        // Update project array
        saveProjects(existingProjects);
        return true;
    };

    const editProject = (index, setValue) => {
        const existProjects = getProjects();

        if (validateIndex(index) && validateTitle(setValue)) {
            existProjects[index].name = setValue;
        } else {
            console.error('The project was not edited.');
            return false;
        }

        // Update project array
        saveProjects(existProjects);
        return true;
    };

    const editTask = (projectIndex, taskIndex, {
        title,
        description,
        dueDate,
        priority
    }) => {
        // Verify project index and task index
        if (!validateIndex(projectIndex) || !validateIndex(taskIndex)) {
            console.error('Index not correct!');
            return false;
        }

        // Validate task dates
        if (!validateTitle(title) || !validateText(description) || isNaN(new Date(dueDate).getTime())) {
            console.error('Invalid task data!');
            return false;
        }

        // Get projects and tasks
        const existingProjects = getProjects();
        const projectName = existingProjects[projectIndex].name;
        const existingTasks = getTasks(projectName);

        // Check if another task with the same title already exists in the array
        const result = existingTasks.find(item => item.title.toLowerCase() === title.toLowerCase());
        if (result && result !== existingTasks[taskIndex]) {
            console.error('Another task with the same title already exists!');
            return false;
        }

        // Update task
        existingTasks[taskIndex] = {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority
        };

        // Update projects array
        existingProjects[projectIndex].tasks = existingTasks;
        saveProjects(existingProjects);
        return true;
    }

    const toggleTaskCompletion = (projectIndex, taskIndex) => {
        // Verify project index and task index
        if (!validateIndex(projectIndex) || !validateIndex(taskIndex)) {
            console.error('Index not correct!');
            return false;
        }

        // Get projects and tasks
        const existingProjects = getProjects();
        const projectName = existingProjects[projectIndex].name;
        const existingTasks = getTasks(projectName);

        // Toggle task status
        existingTasks[taskIndex].completed = !existingTasks[taskIndex].completed;

        // Update projects array
        existingProjects[projectIndex].tasks = existingTasks;
        saveProjects(existingProjects);
        return true;
    };

    const changeTaskDate = (projectIndex, taskIndex, setDueDate) => {
        // Verify project index and task index
        if (!validateIndex(projectIndex) || !validateIndex(taskIndex)) {
            console.error('Index not correct!');
            return false;
        }

        // Get projects and tasks
        const existingProjects = getProjects();
        const projectName = existingProjects[projectIndex].name;
        const existingTasks = getTasks(projectName);

        if (isNaN(new Date(setDueDate).getTime())) {
            console.error('Due date is not valid');
            return false;
        }

        // Update dueDate task
        existingTasks[taskIndex].dueDate = setDueDate;

        // Update projects array
        existingProjects[projectIndex].tasks = existingTasks;
        saveProjects(existingProjects);
        return true;
    };

    const saveProjects = (projects) => {
        localStorage.setItem(getProjectsStorageKey(), JSON.stringify(projects));
    }

    return {
        createProject,
        addProject,
        getProjects,
        removeProject,
        editProject,
        createTask,
        addTask,
        getDefaultProjectName,
        getTasks,
        removeTask,
        editTask,
        toggleTaskCompletion,
        changeTaskDate
    };
}

function projectDOM() {
    const projectManager = ProjectManager();
    const defaultProjectName = projectManager.getDefaultProjectName();
    const utilities = DOMHandler();
    const content = document.querySelector('#content');
    const stringMethods = StringMethods();

    let projectIndex = null;
    let taskIndex = null;

    const getProjectIndex = () => projectIndex;

    const setProjectIndex = (value) => {
        projectIndex = value;
    };

    const getTaskIndex = () => taskIndex;

    const setTaskIndex = (value) => {
        taskIndex = value;
    };

    const getCurrentProjectIndex = (element) => {
        const navItem = element.closest('.nav-item');
        const itemName = navItem.textContent.trim();
        const projects = projectManager.getProjects();

        if (projects) {
            return projects.findIndex(item => item.name === itemName);
        }

        return false;
    };

    const getCurrentTaskIndex = (element) => {
        // Get task title
        const taskItem = element.closest('.task');
        const taskTitle = taskItem.querySelector('.task-title').textContent.trim();

        // Get project name
        const taskContainer = taskItem.closest('.task-container');
        const taskName = stringMethods.stringTrimEnd(taskContainer.id, '-task');
        const projectName = stringMethods.wordsWhiteSpaceSeparate(taskName);

        // Get tasks from `projectName'
        const tasks = projectManager.getTasks(projectName);

        if (tasks) {
            return tasks.findIndex(task => task.title === taskTitle);
        }

        return false;
    };

    const setActiveProject = (event) => {
        const button = event.target;
        const index = getCurrentProjectIndex(button);

        if (Number.isInteger(index) && index >= 0) {
            setProjectIndex(index);
            return true;
        }

        return false;
    };

    const createProjectForm = (action, value = '') => {
        action = action.toLowerCase();
        const actionValidate = ['add', 'edit'];

        if (!actionValidate.includes(action)) {
            return false;
        }

        const form = utilities.createDOMElement({
            elementTag: 'form',
            elementClass: ['project-form']
        });
        const groupButtons = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['group-btn']
        });

        const iconType = action === 'add' ? 'mdi-send' : 'mdi-pencil';

        const input = utilities.createInputElement({
            inputType: 'text',
            inputId: 'set-name-project',
            inputClass: ['form-control'],
            inputName: 'name-project',
            inputPlaceholder: 'Name',
            inputValue: value
        });

        const sendButton = utilities.createButton({
            name: action,
            buttonClass: ['btn', 'add-btn'],
            iconClass: ['mdi', iconType, 'action-btn-icon'],
            clickHandler: () => handleSendProjectButton(action, form)
        });
        const cancelButton = utilities.createButton({
            name: 'Cancel',
            buttonClass: ['btn', 'cancel-btn'],
            iconClass: ['mdi', 'mdi-cancel', 'action-btn-icon'],
            clickHandler: () => handleCancelProjectButton(form)
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        form.appendChild(input);
        form.appendChild(groupButtons);
        groupButtons.appendChild(sendButton);
        groupButtons.appendChild(cancelButton);

        return form;
    };

    const createNavItem = (name) => {
        let itemId = `${name.toLowerCase()}-btn`;

        if (stringMethods.wordsCount(name) > 1) {
            itemId = `${stringMethods.wordsUnderlineSeparate(name).toLowerCase()}-btn`;
        }

        const newItem = utilities.createDOMElement({
            elementTag: 'a',
            elementId: itemId,
            elementClass: ['nav-item', 'project-item'],
            elementAtrType: 'role',
            elementAtrValue: 'button',
            clickHandler: () => {
                setActiveProject(event);
                utilities.setActiveSidebarButton(itemId);
                pageContent(name);
            }
        });

        const navItemBody = utilities.createDOMElement({
            elementTag: 'div',
            electron: ['project-item-body']
        });
        const navItemActions = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['project-item-actions']
        });
        const newItemIcon = utilities.createDOMElement({
            elementTag: 'i',
            elementClass: ['mdi', 'mdi-format-list-bulleted', 'nav-icon']
        });

        const deleteButton = utilities.createButton({
            title: 'Delete item',
            buttonClass: ['project-action-btn', 'delete-btn'],
            iconClass: ['mdi', 'mdi-delete'],
            clickHandler: handleDeleteProjectButton
        });

        const editButton = utilities.createButton({
            title: 'Edit item',
            buttonClass: ['project-action-btn', 'edit-btn'],
            iconClass: ['mdi', 'mdi-pencil'],
            clickHandler: handleEditProjectButton
        });

        newItem.addEventListener('mouseover', () => {
            deleteButton.style.visibility = 'visible';
            editButton.style.visibility = 'visible';
        });

        newItem.addEventListener('mouseout', () => {
            deleteButton.style.visibility = 'hidden';
            editButton.style.visibility = 'hidden';
        });

        newItem.appendChild(navItemBody);
        newItem.appendChild(navItemActions);
        navItemBody.appendChild(newItemIcon);
        navItemBody.insertAdjacentText('beforeend', `${name}`);
        navItemActions.appendChild(deleteButton);
        navItemActions.appendChild(editButton);

        return newItem;
    };

    const createTaskForm = () => {
        const projectName = document.querySelector('.content-title').textContent.trim();
        const projects = projectManager.getProjects();

        const form = utilities.createDOMElement({
            elementTag: 'form',
            elementClass: ['insert-task-form']
        });
        const taskDetails = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['task-details']
        });
        const taskMetadata = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['task-metadata']
        });
        const taskActions = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['group-btn']
        });

        const taskTitleInput = utilities.createInputElement({
            inputType: 'text',
            inputId: 'task-title',
            inputClass: ['form-control'],
            inputPlaceholder: 'Title',
            inputFocus: true
        });
        const taskDescInput = utilities.createInputElement({
            inputType: 'text',
            inputId: 'task-description',
            inputClass: ['form-control'],
            inputPlaceholder: 'Description'
        });
        const taskDateInput = utilities.createInputElement({
            inputType: 'date',
            inputId: 'task-date',
            inputClass: ['form-control'],
        });

        const taskPriority = utilities.createSelectElement({
            selectName: 'task-priority',
            selectId: 'task-priority',
            selectClass: ['form-control']
        });
        const taskProject = utilities.createSelectElement({
            selectName: 'task-project',
            selectId: 'task-project',
            selectClass: ['form-control']
        });

        const optionPriority = utilities.createOptionElement({
            optionValue: '',
            optionText: 'Choose the priority',
            optionDisabled: true
        });
        const optionPriorityCritical = utilities.createOptionElement({
            optionValue: 'critical',
            optionText: 'Critical'
        });
        const optionPriorityHigh = utilities.createOptionElement({
            optionValue: 'high',
            optionText: 'High'
        });
        const optionPriorityMedium = utilities.createOptionElement({
            optionValue: 'medium',
            optionText: 'Medium'
        });
        const optionPriorityLow = utilities.createOptionElement({
            optionValue: 'low',
            optionText: 'Low'
        });

        const optionProject = utilities.createOptionElement({
            optionValue: '',
            optionText: 'Include in',
            optionDisabled: true
        });
        const optionProjectInbox = utilities.createOptionElement({
            optionValue: 'inbox',
            optionText: 'Inbox'
        });
        taskProject.appendChild(optionProject);
        taskProject.appendChild(optionProjectInbox);

        if (projects) {
            projects.forEach((project) => {
                if (project.name.toLowerCase() !== 'inbox') {
                    const option = utilities.createOptionElement({
                        optionValue: project.name.toLowerCase(),
                        optionText: project.name
                    });
                    if (project.name.toLowerCase() === projectName.toLowerCase()) {
                        option.setAttribute('selected', 'selected');
                    }
                    taskProject.appendChild(option);
                }
            });
        }

        const sendButton = utilities.createButton({
            name: 'Add',
            buttonClass: ['btn', 'add-btn'],
            iconClass: ['mdi', 'mdi-send', 'action-btn-icon'],
            clickHandler: () => handleSendTaskButton(event)
        });
        const cancelButton = utilities.createButton({
            name: 'Cancel',
            buttonClass: ['btn', 'cancel-btn'],
            iconClass: ['mdi', 'mdi-cancel', 'action-btn-icon'],
            clickHandler: () => handleCancelTaskButton(event)
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

        return form;
    };

    const createTaskModal = (modalId, modalTitle) => {
        const dialog = utilities.createDOMElement({
            elementTag: 'dialog',
            elementId: modalId,
            elementClass: ['task-modal']
        });
        const header = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['modal-header']
        });
        const title = utilities.addTitle(modalTitle);
        title.classList.add('modal-title');
        const form = createTaskForm();

        const closeButton = utilities.createButton({
            buttonClass: ['close-btn'],
            iconClass: ['mdi', 'mdi-close'],
            clickHandler: () => closeModal(modalId)
        });

        dialog.appendChild(header);
        dialog.appendChild(form);
        header.appendChild(title);
        header.appendChild(closeButton);

        if (modalId === 'edit-task-modal') {
            const buttonGroup = dialog.querySelector('.group-btn');
            const addButton = dialog.querySelector('.add-btn');
            const cancelButton = dialog.querySelector('.cancel-btn');
            utilities.removeElement(addButton);
            const sendButton = utilities.createButton({
                name: 'Edit',
                buttonClass: ['btn', 'add-btn'],
                iconClass: ['mdi', 'mdi-pencil', 'action-btn-icon'],
                clickHandler: () => handleSendTaskButton(event)
            });
            buttonGroup.insertBefore(sendButton, cancelButton);
        }

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
            utilities.removeElement(dialog);
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

    const createAndOpenModal = (setId, setTitle) => {
        if (!document.querySelector(`${setId}`)) {
            const modal = createTaskModal(setId, setTitle);
            document.body.appendChild(modal);
        }

        openModal(setId);
    };

    const createTaskItem = ({ titleText, description, dueDate, priority, completed }) => {
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

        const task = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['task', priorityClass]
        });
        const taskStatus = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['task-status']
        });
        const taskBody = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['task-body']
        });
        const taskAction = utilities.createDOMElement({
            elementTag: 'div',
            elementClass: ['task-action']
        });

        const taskStatusCheckbox = utilities.createInputElement({
            inputType: 'checkbox',
            inputClass: ['task-status-checkbox']
        });

        const taskTitle = utilities.createDOMElement({
            elementTag: 'p',
            elementClass: ['task-title'],
            elementText: titleText
        });
        const taskDesc = utilities.createDOMElement({
            elementTag: 'p',
            elementClass: ['task-description'],
            elementText: description ? description : ''
        });

        const taskDueDate = utilities.createInputElement({
            inputType: 'date',
            inputClass: ['task-action-date'],
            inputValue: dueDate ? dueDate : '',
            inputTitle: 'Set the due date'
        });

        const editButton = utilities.createButton({
            title: 'Edit Task',
            buttonClass: ['task-action-btn', 'edit-btn'],
            iconClass: ['mdi', 'mdi-pencil', 'task-icon'],
            clickHandler: () => handleEditTaskButton(event)
        });
        const deleteButton = utilities.createButton({
            title: 'Delete Task',
            buttonClass: ['task-action-btn', 'remove-btn'],
            iconClass: ['mdi', 'mdi-delete', 'task-icon'],
            clickHandler: () => handleDeleteTaskButton(event)
        });

        taskDueDate.addEventListener('change', () => handleTaskDate(event));

        taskStatusCheckbox.checked = completed;

        if (completed) {
            task.classList.add('completed');
            taskDueDate.setAttribute('disabled', 'disabled');
            taskDueDate.removeAttribute('title');
            editButton.setAttribute('disabled', 'disabled');
            editButton.removeEventListener('click', handleEditTaskButton);
            editButton.removeAttribute('title');
        }

        taskStatusCheckbox.addEventListener('click', () => handleTaskStatus(event));

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

    const displayTasks = (projectName) => {
        const taskItems = projectManager.getTasks(projectName);

        let taskId = `${projectName.toLocaleLowerCase()}-task`;
        if (stringMethods.wordsCount(projectName) > 1) {
            taskId = `${stringMethods.wordsUnderlineSeparate(projectName.toLowerCase())}-task`;
        }

        const taskContainer = utilities.createDOMElement({
            elementTag: 'div',
            elementId: taskId,
            elementClass: ['task-container']
        });

        if (taskItems.length) {
            taskItems.forEach(task => {
                taskContainer.appendChild(createTaskItem({
                    titleText: task.title,
                    description: task.description,
                    dueDate: task.dueDate,
                    priority: task.priority,
                    completed: task.completed
                }));
            });
        } else {
            return false;
        }

        return taskContainer;
    };

    const sidebarContent = () => {
        const sideBar = document.querySelector('#sidebar-project-items');
        const projects = projectManager.getProjects();

        utilities.clearPageContent(sideBar);

        if (projects.length) {
            projects.forEach(item => {
                if (item.name.toLowerCase() !== defaultProjectName.toLocaleLowerCase()) {
                    sideBar.appendChild(createNavItem(item.name));
                }
            });
        }
    };

    const pageContent = (projectName) => {
        const pageTitle = utilities.addTitle(projectName);
        const tasks = displayTasks(projectName);

        const addTaskButton = utilities.createButton({
            name: 'Add Task',
            buttonClass: ['btn', 'add-task-btn'],
            iconClass: ['mdi', 'mdi-plus', 'add-task-icon'],
            clickHandler: () => {
                utilities.rippleEffect(event.target);
                setTimeout(() => {
                    createAndOpenModal('add-task-modal', 'Add new task');
                }, 500);
            }
        });

        utilities.clearPageContent(content);

        content.appendChild(pageTitle);
        if (tasks) {
            content.appendChild(tasks);
        }
        content.appendChild(addTaskButton);
    };

    const displayAll = () => {
        const existingTask = content.querySelectorAll('.task-container');
        const projects = projectManager.getProjects();

        // Clear page content
        if (existingTask) {
            existingTask.forEach(element => {
                utilities.removeElement(element);
            });
        }

        // Display all tasks
        if (projects) {
            projects.forEach(item => {
                const tasks = displayTasks(item.name);
                if (tasks) {
                    content.appendChild(tasks);
                }
            });
        }
    };

    const displayTasksByDate = (byDate) => {
        const projects = projectManager.getProjects();

        if (byDate !== 'today' && byDate !== 'week') {
            console.error('Invalid argument!');
            return false;
        }


        const existingTask = content.querySelectorAll('.task-container');
        const today = new Date();

        // Clear page content
        if (existingTask) {
            existingTask.forEach(element => {
                utilities.removeElement(element);
            });
        }

        // Display tasks by date
        if (projects) {
            projects.forEach((item) => {
                const taskItems = projectManager.getTasks(item.name);
                let taskId = `${item.name.toLocaleLowerCase()}-task`;
                if (stringMethods.wordsCount(item.name) > 1) {
                    taskId = `${stringMethods.wordsUnderlineSeparate(item.name.toLowerCase())}-task`;
                }
                const taskContainer = utilities.createDOMElement({
                    elementTag: 'div',
                    elementId: taskId,
                    elementClass: ['task-container']
                });
                if (taskItems.length) {
                    taskItems.forEach(task => {
                        const taskDate = new Date(task.dueDate);
                        const condition = byDate === 'today' ? isSameDay(taskDate, today) : isSameWeek(taskDate, today);
                        if (condition) {
                            taskContainer.appendChild(createTaskItem({
                                titleText: task.title,
                                description: task.description,
                                dueDate: task.dueDate,
                                priority: task.priority,
                                completed: task.completed
                            }));
                        }
                    });
                    content.appendChild(taskContainer);
                }
            });
        }

        return true;
    };

    const handleSendTaskButton = (event) => {
        const button = event.target;
        const modal = button.closest('.task-modal');
        const pageTitle = document.querySelector('.content-title').textContent.trim();
        const projects = projectManager.getProjects();

        // Set values by input form
        const taskTitle = document.querySelector('#task-title').value.trim();
        const taskDesc = document.querySelector('#task-description').value.trim();
        const taskDate = document.querySelector('#task-date').value.trim();

        const priorityElement = document.querySelector('#task-priority');
        const prioritySelected = priorityElement.options[priorityElement.selectedIndex];
        const taskPriority = prioritySelected.value;

        const projectElement = document.querySelector('#task-project');
        const projectSelected = projectElement.options[projectElement.selectedIndex];
        const taskProject = projectSelected.value;

        if (modal.id === 'add-task-modal') {
            const task = projectManager.createTask({
                title: taskTitle,
                description: taskDesc,
                dueDate: taskDate,
                priority: taskPriority
            });
            projectManager.addTask(task, taskProject);
            const indexOfProject = projects.findIndex(project => project.name.toLowerCase() === taskProject.toLowerCase());
            setProjectIndex(indexOfProject);

            // Set active sidebar item based active project
            let navItemId = `${taskProject.toLowerCase()}-btn`;
            if (stringMethods.wordsCount(taskProject) > 1) {
                navItemId = `${stringMethods.wordsUnderlineSeparate(taskProject).toLowerCase()}-btn`;
            }
            utilities.setActiveSidebarButton(navItemId);
        } else if (modal.id === 'edit-task-modal') {
            projectManager.editTask(getProjectIndex(), getTaskIndex(), {
                title: taskTitle,
                description: taskDesc,
                dueDate: taskDate,
                priority: taskPriority
            });
        }

        // Close modal and update page content
        utilities.rippleEffect(event.target);
        setTimeout(() => closeModal(modal.id), 500);
        if (projects.some(item => item.name.toLowerCase() === pageTitle.toLowerCase())) {
            pageContent(taskProject);
        } else {
            switch (pageTitle.toLowerCase()) {
                case 'today':
                    displayTasksByDate('today');
                    break;
                case 'this week':
                    displayTasksByDate('week');
                    break;
                default:
                    displayAll();
            }
        }
    };

    const handleCancelTaskButton = (event) => {
        const button = event.target;
        const modal = button.closest('.task-modal');

        utilities.rippleEffect(event.target);
        setTimeout(() => closeModal(modal.id), 500);
    };

    const handleSendProjectButton = (action, form) => {
        const projectName = document.querySelector('#set-name-project').value.trim();
        const pageTitle = document.querySelector('.content-title').textContent.trim();
        const index = getProjectIndex();
        const projects = projectManager.getProjects();

        // Set the value based on the id in the sidebar element
        let navItemId = `${pageTitle.toLowerCase()}-btn`;
        if (stringMethods.wordsCount(pageTitle) > 1) {
            navItemId = `${stringMethods.wordsUnderlineSeparate(pageTitle).toLowerCase()}-btn`;
        }

        if (action === 'add') {
            const project = projectManager.createProject(projectName);
            projectManager.addProject(project);
            utilities.rippleEffect(event.target);
            setTimeout(() => utilities.removeElement(form), 500);
        } else if (action === 'edit') {
            projectManager.editProject(index, projectName);
            utilities.rippleEffect(event.target);
            setTimeout(() => utilities.removeElement(form), 500);
            // Check if the current project is edited and refresh the page
            if (pageTitle === projects[index].name) {
                navItemId = `${projectName.toLowerCase()}-btn`;
                if (stringMethods.wordsCount(projectName) > 1) {
                    navItemId = `${stringMethods.wordsUnderlineSeparate(projectName).toLowerCase()}-btn`;
                }
                pageContent(projectName);
            }
        }

        // Update sidebar content
        setTimeout(() => {
            sidebarContent();
            utilities.setActiveSidebarButton(navItemId);
        }, 500);
    };

    const handleCancelProjectButton = (form) => {
        utilities.rippleEffect(event.target);
        setTimeout(() => utilities.removeElement(form), 500);
    };

    const handleDeleteProjectButton = (event) => {
        event.stopPropagation();

        const button = event.target;
        const pageTitle = document.querySelector('.content-title').textContent.trim();
        const navItem = button.closest('.nav-item');
        const itemName = navItem.textContent.trim();
        const defaultProjectName = projectManager.getDefaultProjectName();
        const index = projectManager.getProjects().findIndex(item => item.name === itemName);

        // Set the value based on the id in the sidebar element
        let navItemId = `${pageTitle.toLowerCase()}-btn`;
        if (stringMethods.wordsCount(pageTitle) > 1) {
            navItemId = `${stringMethods.wordsUnderlineSeparate(pageTitle).toLowerCase()}-btn`;
        }

        // Remove project
        projectManager.removeProject(index);

        // Update sidebar content
        sidebarContent();

        // Update page content
        if (pageTitle === itemName) {
            utilities.setActiveSidebarButton(`${defaultProjectName.toLowerCase()}-btn`);
            pageContent(defaultProjectName);
        } else {
            utilities.setActiveSidebarButton(navItemId);
        }
    };

    const handleEditProjectButton = (event) => {
        event.stopPropagation();

        const sidebarProject = document.querySelector('#sidebar-project');
        const button = event.target;
        const navItem = button.closest('.nav-item');
        const itemName = navItem.textContent.trim();
        const projectForm = createProjectForm('edit', itemName);

        // Get current index of te project
        const index = getCurrentProjectIndex(button);

        if (!sidebarProject.querySelector('#set-name-project')) {
            // Add editing form to DOM and focus to input
            navItem.after(projectForm);
            document.querySelector('#set-name-project').focus();

            // Set index of the project
            setProjectIndex(index);
        }
    };

    const handleDeleteTaskButton = (event) => {
        const button = event.target.closest('.remove-btn');
        const pageTitle = document.querySelector('.content-title').textContent.trim();
        const projects = projectManager.getProjects();

        // Get current index of the task
        const indexOfTask = getCurrentTaskIndex(button);

        // Each `task` has the name of the project in the id
        const taskContainer = button.closest('.task-container');
        const taskName = stringMethods.stringTrimEnd(taskContainer.id, '-task');
        const projectName = stringMethods.wordsWhiteSpaceSeparate(taskName);
        const indexOfProject = projects.findIndex(item => item.name.toLowerCase() === projectName.toLowerCase());

        // Remove task and update page content
        projectManager.removeTask(indexOfProject, indexOfTask);
        if (projects.some(item => item.name.toLowerCase() === pageTitle.toLowerCase())) {
            pageContent(projectName);
        } else {
            switch (pageTitle.toLowerCase()) {
                case 'today':
                    displayTasksByDate('today');
                    break;
                case 'this week':
                    displayTasksByDate('week');
                    break;
                default:
                    displayAll();
            }
        }
    };

    const handleEditTaskButton = (event) => {
        const button = event.target.closest('.edit-btn');
        const projects = projectManager.getProjects();

        // Get current index of the task
        const indexOfTask = getCurrentTaskIndex(button);

        // Each `task` has the name of the project in the id
        const taskContainer = button.closest('.task-container');
        const taskName = stringMethods.stringTrimEnd(taskContainer.id, '-task');
        const projectName = stringMethods.wordsWhiteSpaceSeparate(taskName);
        const indexOfProject = projects.findIndex(item => item.name.toLowerCase() === projectName.toLowerCase());

        // Set project index and task index
        setProjectIndex(indexOfProject);
        setTaskIndex(indexOfTask);

        // Display modal with form
        createAndOpenModal('edit-task-modal', 'Edit Task');

        // Get input
        const inputTitle = document.querySelector('#task-title');
        const inputDesc = document.querySelector('#task-description');
        const inputDate = document.querySelector('#task-date');

        // Get select
        const priorityElement = document.querySelector('#task-priority');
        const projectElement = document.querySelector('#task-project');

        // Get Values from tasks array
        const taskTitle = projects[indexOfProject].tasks[indexOfTask].title;
        const taskDesc = projects[indexOfProject].tasks[indexOfTask].description;
        const taskDate = projects[indexOfProject].tasks[indexOfTask].dueDate;
        const taskPriority = projects[indexOfProject].tasks[indexOfTask].priority;
        const taskProject = projectName;

        // Disabled project select
        projectElement.setAttribute('disabled', 'disabled');

        // Set value to input
        inputTitle.value = taskTitle;
        inputDesc.value = taskDesc;
        inputDate.value = taskDate;

        // Set value to select
        for (let i = 0; i < priorityElement.options.length; i++) {
            if (priorityElement.options[i].value === taskPriority) {
                priorityElement.selectedIndex = i;
                break;
            }
        }
        for (let i = 0; i < projectElement.options.length; i++) {
            if (projectElement.options[i].value === taskProject) {
                projectElement.selectedIndex = i;
                break;
            }
        }
    }

    const handleTaskStatus = (event) => {
        // Verify if the clicked element is a checkbox input
        if (event.target.type === 'checkbox') {
            const checkbox = event.target;
            const projects = projectManager.getProjects();

            // Get project index, task index and project name
            const indexOfTask = getCurrentTaskIndex(checkbox);

            // Each `task` has the name of the project in the id
            const taskContainer = checkbox.closest('.task-container');
            const taskName = stringMethods.stringTrimEnd(taskContainer.id, '-task');
            const projectName = stringMethods.wordsWhiteSpaceSeparate(taskName);
            const indexOfProject = projects.findIndex(item => item.name.toLowerCase() === projectName.toLowerCase());

            // Verify that the checkbox is assigned to a task
            if (indexOfTask !== -1) {
                // Toggle task status and update page content
                projectManager.toggleTaskCompletion(indexOfProject, indexOfTask);

                // Update page content
                const pageTitle = document.querySelector('.content-title').textContent.trim();
                if (projects.some(item => item.name.toLowerCase() === pageTitle.toLowerCase())) {
                    pageContent(projectName);
                } else {
                    switch (pageTitle.toLowerCase()) {
                        case 'today':
                            displayTasksByDate('today');
                            break;
                        case 'this week':
                            displayTasksByDate('week');
                            break;
                        default:
                            displayAll();
                    }
                }
            }
        }
    };

    const handleTaskDate = (event) => {
        if (event.target.type === 'date') {
            const taskDate = event.target;
            const projects = projectManager.getProjects();

            // Get project index, task index and project name
            const indexOfTask = getCurrentTaskIndex(taskDate);

            // Each `task` has the name of the project in the id
            const taskContainer = taskDate.closest('.task-container');
            const taskName = stringMethods.stringTrimEnd(taskContainer.id, '-task');
            const projectName = stringMethods.wordsWhiteSpaceSeparate(taskName);
            const indexOfProject = projects.findIndex(item => item.name.toLowerCase() === projectName.toLowerCase());

            // Verify that the date is assigned to a task
            if (indexOfTask !== -1) {
                const taskDueDate = taskDate.value.trim();

                // Toggle task status
                projectManager.changeTaskDate(indexOfProject, indexOfTask, taskDueDate);

                // Update page content
                const pageTitle = document.querySelector('.content-title').textContent.trim();
                if (projects.some(item => item.name.toLowerCase() === pageTitle.toLowerCase())) {
                    pageContent(projectName);
                } else {
                    switch (pageTitle.toLowerCase()) {
                        case 'today':
                            displayTasksByDate('today');
                            break;
                        case 'this week':
                            displayTasksByDate('week');
                            break;
                        default:
                            displayAll();
                    }
                }
            }
        }
    };

    return {
        createProjectForm,
        sidebarContent,
        createTaskModal,
        openModal,
        displayTasks,
        pageContent,
        setActiveProject,
        displayAll,
        displayTasksByDate
    };
}

export { projectDOM, ProjectManager };