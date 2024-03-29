import { DOMHandler } from "./utility";

function ProjectManager() {
    const getProjectsStorageKey = () => 'projects';

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

    const getProjects = () => {
        return JSON.parse(localStorage.getItem(getProjectsStorageKey()));
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
        editProject
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
        const input = document.createElement('input');
        const groupButtons = document.createElement('div');
        const sendButton = document.createElement('button');
        const sendButtonIcon = document.createElement('i');
        const cancelButton = document.createElement('button');
        const cancelButtonIcon = document.createElement('i');

        const buttonClass = action === 'add' ? 'mdi-send' : 'mdi-pencil';

        form.classList.add('project-form');
        input.classList.add('form-control');
        groupButtons.classList.add('group-btn');
        sendButton.classList.add(`add-btn`);
        sendButtonIcon.classList.add('mdi', buttonClass, 'action-btn-icon');
        cancelButton.classList.add('cancel-btn');
        cancelButtonIcon.classList.add('mdi', 'mdi-cancel', 'action-btn-icon');

        input.setAttribute('type', 'text');
        input.setAttribute('id', 'set-name-project');
        input.setAttribute('name', 'name-project');
        input.setAttribute('placeholder', 'Name');
        input.setAttribute('value', value);
        sendButton.setAttribute('type', 'button');
        cancelButton.setAttribute('type', 'button');

        sendButton.addEventListener('click', () => handleSendButton(action, form));
        cancelButton.addEventListener('click', () => handleCancelButton(form));

        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        form.appendChild(input);
        form.appendChild(groupButtons);
        groupButtons.appendChild(sendButton);
        sendButton.appendChild(sendButtonIcon);
        sendButton.insertAdjacentText('beforeend', action);
        groupButtons.appendChild(cancelButton);
        cancelButton.appendChild(cancelButtonIcon);
        cancelButton.insertAdjacentText('beforeend', 'Cancel');

        return form;
    };

    const createNavItem = (name) => {
        const newItem = document.createElement('a');
        const navItemBody = document.createElement('div');
        const navItemActions = document.createElement('div');
        const newItemIcon = document.createElement('i');
        const deleteButton = utilities.createButton('Delete item', 'delete-btn', 'mdi-delete', handleDeleteButton);
        const editButton = utilities.createButton('Edit item', 'edit-btn', 'mdi-pencil', handleEditButton);

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

    const sidebarContent = () => {
        const sideBar = document.querySelector('#sidebar-project-items');
        const projects = projectManager.getProjects();

        utilities.clearPageContent(sideBar);

        if (projects.length) {
            projects.forEach(item => {
                sideBar.appendChild(createNavItem(item.name));
            });
        }
    };

    const handleSendButton = (action, form) => {
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

    const handleCancelButton = (form) => {
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
            // Add editing form to DOM
            navItem.after(projectForm);
            // Set index of the project
            setProjectIndex(index);
        }
    };

    return {
        createProjectForm,
        sidebarContent
    };
}

export { projectDOM };