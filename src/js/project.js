import { DOMHandler } from "./utility";

function ProjectManager() {
    const getProjectsStorageKey = () => 'projects';
    const getDefaultProjectName = () => 'Inbox';

    const createProject = (projectName) => {
        return {
            name: projectName,
            tasks: []
        };
    };

    const addProject = (project) => {
        const existProjects = getProjects();

        if (project.name.length > 2 && project.name.length < 20) {
            existProjects.push(project);
            saveProjects(existProjects);
            return true;
        } else {
            return false;
        }
    };

    const createTask = ({
        title,
        description,
        dueDate,
        priority
    }) => {
        return {
            title,
            description,
            dueDate,
            priority
        };
    };

    const addTask = (task, projectName) => {
        const existingProjects = getProjects();
        const defaultProjectName = getDefaultProjectName();

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
                } else {
                    return false;
                }
            }
        } else {
            // Search `projectName` in projects array
            const projectIndex = existingProjects.findIndex(project => project.name === projectName);

            if (projectIndex !== -1) {
                // Add task to `projectName`
                existingProjects[projectIndex].tasks.push(task);
            } else {
                return false;
            }
        }

        // Update projects array
        saveProjects(existingProjects);
        return true;
    };

    const getProjects = () => {
        return JSON.parse(localStorage.getItem(getProjectsStorageKey()));
    };

    const getTasks = (projectName) => {
        const existingProjects = getProjects();

        const project = existingProjects.find(project => project.name.toLocaleLowerCase() === projectName.toLocaleLowerCase());
        if (project) {
            return project.tasks;
        } else {
            return [];
        }
    };

    const removeProject = (index) => {
        const existProjects = getProjects();

        if (Number.isInteger(index) && index >= 0) {
            existProjects.splice(index, 1);
            saveProjects(existProjects);
            return true;
        } else {
            return false;
        }
    };

    const removeTask = (projectIndex, taskIndex) => {
        const existingProjects = getProjects();
        const validate = (currentValue) => Number.isInteger(currentValue); 
        
        if (validate(projectIndex) && validate(taskIndex)) {
            existingProjects[projectIndex].tasks.splice(taskIndex, 1);
            saveProjects(existingProjects);
            return true;
        } else {
            return false;
        }
    };

    const editProject = (index, setValue) => {
        const existProjects = getProjects();

        if ((Number.isInteger(index) && index >= 0 && setValue.length > 2 && setValue.length < 20)) {
            existProjects[index].name = setValue;
            saveProjects(existProjects);
            return true;
        } else {
            return false;
        }
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
        removeTask
    };
}

function projectDOM() {
    const projectManager = ProjectManager();
    const utilities = DOMHandler();
    let projectIndex = null;

    const getProjectIndex = () => projectIndex;

    const setProjectIndex = (value) => {
        projectIndex = value;
    };

    const createProjectForm = (action, value = '') => {
        action = action.toLowerCase();
        const actionValidate = ['add', 'edit'];

        if (!actionValidate.includes(action)) {
            return false;
        }

        const form = document.createElement('form');
        const groupButtons = document.createElement('div');

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
            buttonClass: ['add-btn'],
            iconClass: ['mdi', iconType, 'action-btn-icon'],
            clickHandler: () => handleSendProjectButton(action, form)
        });
        const cancelButton = utilities.createButton({
            name: 'Cancel',
            buttonClass: ['cancel-btn'],
            iconClass: ['mdi', 'mdi-cancel', 'action-btn-icon'],
            clickHandler: () => handleCancelProjectButton(form)
        });

        form.classList.add('project-form');
        groupButtons.classList.add('group-btn');

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
        const newItem = document.createElement('a');
        const navItemBody = document.createElement('div');
        const navItemActions = document.createElement('div');
        const newItemIcon = document.createElement('i');

        const deleteButton = utilities.createButton({
            title: 'Delete item',
            buttonClass: ['project-action-btn', 'delete-btn'],
            iconClass: ['mdi', 'mdi-delete'],
            clickHandler: handleDeleteButton
        });

        const editButton = utilities.createButton({
            title: 'Edit item',
            buttonClass: ['project-action-btn', 'edit-btn'],
            iconClass: ['mdi', 'mdi-pencil'],
            clickHandler: handleEditButton
        });

        newItem.classList.add('nav-item', 'project-item');
        navItemBody.classList.add('project-item-body');
        newItemIcon.classList.add('mdi', 'mdi-format-list-bulleted', 'nav-icon');
        navItemActions.classList.add('project-item-actions');

        newItem.setAttribute('role', 'button');
        newItem.setAttribute('id', `${name.toLowerCase()}-btn`);

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
        const form = document.createElement('form');
        const taskDetails = document.createElement('div');
        const taskMetadata = document.createElement('div');
        const taskActions = document.createElement('div');

        form.classList.add('insert-task-form');
        taskDetails.classList.add('task-details');
        taskMetadata.classList.add('task-metadata');
        taskActions.classList.add('group-btn');

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

        const sendButton = utilities.createButton({
            name: 'Add',
            buttonClass: ['add-btn'],
            iconClass: ['mdi', 'mdi-send', 'action-btn-icon'],
            clickHandler: () => handleSendTaskButton(event)
        });
        const cancelButton = utilities.createButton({
            name: 'Cancel',
            buttonClass: ['cancel-btn'],
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
        taskProject.appendChild(optionProject);
        taskProject.appendChild(optionProjectInbox);

        return form;
    };

    const createTaskModal = (modalId, modalTitle) => {
        const dialog = document.createElement('dialog');
        const header = document.createElement('div');
        const title = utilities.addTitle(modalTitle);
        const form = createTaskForm();

        dialog.setAttribute('id', modalId);
        dialog.classList.add('task-modal');
        header.classList.add('modal-header');
        title.classList.add('modal-title');

        const closeButton = utilities.createButton({
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

    const displayTasks = (projectName) => {
        const taskContainer = utilities.createDOMElement({
            elementTag: 'div',
            elementId: 'inbox-tasks',
            elementClass: ['task-container']
        });
        const inboxTasks = projectManager.getTasks(projectName);

        if (inboxTasks.length) {
            inboxTasks.forEach(task => {
                taskContainer.appendChild(utilities.createTaskItem({
                    titleText: task.title,
                    description: task.description,
                    dueDate: task.dueDate,
                    priority: task.priority
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
        const defaultProjectName = projectManager.getDefaultProjectName();

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
        const pageContent = document.querySelector('#content');
        const pageTitle = utilities.addTitle(projectName);
        const tasks = displayTasks(projectName);
        const addTaskButton = utilities.createButton({
            name: 'Add Task',
            buttonClass: ['add-task-btn'],
            iconClass: ['mdi', 'mdi-plus', 'add-task-icon'],
            clickHandler: () => createAndOpenModal('add-task-modal', 'Add new task')
        });

        utilities.clearPageContent(pageContent);

        pageContent.appendChild(pageTitle);
        if (tasks) {
            pageContent.appendChild(tasks);
        }
        pageContent.appendChild(addTaskButton);
    }

    const handleSendTaskButton = (event) => {
        const button = event.target;
        const modal = button.closest('.task-modal');

        const taskTitle = document.querySelector('#task-title').value.trim();
        const taskDesc = document.querySelector('#task-description').value.trim();
        const taskDate = document.querySelector('#task-date').value.trim();

        const priorityElement = document.querySelector('#task-priority');
        const prioritySelected = priorityElement.options[priorityElement.selectedIndex];
        const taskPriority = prioritySelected.value;

        const projectElement = document.querySelector('#task-project');
        const projectSelected = projectElement.options[projectElement.selectedIndex];
        const taskProject = projectSelected.value;

        const task = projectManager.createTask({
            title: taskTitle,
            description: taskDesc,
            dueDate: taskDate,
            priority: taskPriority
        });
        projectManager.addTask(task, taskProject);

        closeModal(modal.id);
        pageContent(taskProject);
    };

    const handleCancelTaskButton = (event) => {
        const button = event.target;
        const modal = button.closest('.task-modal');
        closeModal(modal.id);
    };

    const handleSendProjectButton = (action, form) => {
        const projectName = document.querySelector('#set-name-project').value.trim();
        if (action === 'add') {
            const project = projectManager.createProject(projectName);
            projectManager.addProject(project);
            setTimeout(() => {
                utilities.removeElement(form);
                sidebarContent();
            }, 500);
        } else if (action === 'edit') {
            const index = getProjectIndex();
            projectManager.editProject(index, projectName);
            setTimeout(() => {
                utilities.removeElement(form);
                sidebarContent();
            }, 500);
        }
    };

    const handleCancelProjectButton = (form) => {
        setTimeout(() => utilities.removeElement(form), 500);
    };

    const handleDeleteButton = (event) => {
        const button = event.target;
        const navItem = button.closest('.nav-item');
        const itemName = navItem.textContent.trim();
        const index = projectManager.getProjects().findIndex(item => item.name === itemName);
        projectManager.removeProject(index);
        sidebarContent();
    };

    const handleEditButton = (event) => {
        const sidebarProject = document.querySelector('#sidebar-project');
        const button = event.target;
        const navItem = button.closest('.nav-item');
        const itemName = navItem.textContent.trim();
        const projectForm = createProjectForm('edit', itemName);

        // Get current index of the project
        const index = projectManager.getProjects().findIndex(item => item.name === itemName);

        if (!sidebarProject.querySelector('#set-name-project')) {
            // Add editing form to DOM and focus to input
            navItem.after(projectForm);
            document.querySelector('#set-name-project').focus();
            // Set index of the project
            setProjectIndex(index);
        }
    };

    return {
        createProjectForm,
        sidebarContent,
        createTaskModal,
        openModal,
        displayTasks,
        pageContent
    };
}

export { projectDOM, ProjectManager };