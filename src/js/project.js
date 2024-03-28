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
        removeProject
    };
}

function projectDOM() {
    const projectManager = ProjectManager();
    const utilities = DOMHandler();

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

    const handleSendButton = (action, form) => {
        const projectName = document.querySelector('#set-name-project').value.trim();
        if (action === 'add') {
            const project = projectManager.createProject(projectName);
            projectManager.addProject(project);
            setTimeout(() => {
                closeProjectForm(form);
                sidebarContent();
            }, 500);
        } else if (action === 'edit') {

        }
    };

    const handleCancelButton = (form) => {
        setTimeout(() => closeProjectForm(form), 500);
    };

    const createNavItem = (name) => {
        const newItem = document.createElement('a');
        const navItemBody = document.createElement('div');
        const navItemActions = document.createElement('div');
        const newItemIcon = document.createElement('i');
        const deleteButton = document.createElement('button');
        const deleteButtonIcon = document.createElement('i');
        const editButton = document.createElement('button');
        const editButtonIcon = document.createElement('i');

        newItem.classList.add('nav-item', 'project-item');
        navItemBody.classList.add('project-item-body');
        newItemIcon.classList.add('mdi', 'mdi-format-list-bulleted', 'nav-icon');
        navItemActions.classList.add('project-item-actions');
        deleteButton.classList.add('project-action-btn');
        deleteButtonIcon.classList.add('mdi', 'mdi-delete');
        editButton.classList.add('project-action-btn');
        editButtonIcon.classList.add('mdi', 'mdi-pencil');

        newItem.setAttribute('role', 'button');
        newItem.setAttribute('id', `${name.toLowerCase()}-btn`);
        deleteButton.setAttribute('title', 'Delete item');
        deleteButton.setAttribute('type', 'button');
        editButton.setAttribute('title', 'Edit item');
        editButton.setAttribute('type', 'button');

        newItem.addEventListener('mouseover', (event) => {
            deleteButton.style.visibility = 'visible';
            editButton.style.visibility = 'visible';
        });

        newItem.addEventListener('mouseout', (event) => {
            deleteButton.style.visibility = 'hidden';
            editButton.style.visibility = 'hidden';
        });

        deleteButton.addEventListener('click', (event) => {
            const projects = projectManager.getProjects();
            const index = projects.findIndex(item => item.name === newItem.textContent);
            projectManager.removeProject(index);
            sidebarContent();
        });

        editButton.addEventListener('click', (event) => {
            const projects = projectManager.getProjects();
            const sidebarProject = document.querySelector('#sidebar-project');
            const projectForm = createProjectForm('edit', newItem.textContent);

            if (!sidebarProject.querySelector('#set-name-project')) {
                newItem.after(projectForm);
            }
        });

        newItem.appendChild(navItemBody);
        newItem.appendChild(navItemActions);
        navItemBody.appendChild(newItemIcon);
        navItemBody.insertAdjacentText('beforeend', `${name}`);
        navItemActions.appendChild(deleteButton);
        navItemActions.appendChild(editButton);
        deleteButton.appendChild(deleteButtonIcon);
        editButton.appendChild(editButtonIcon);

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

    const closeProjectForm = (element) => {
        if (element) {
            element.remove();
        }
    };

    return {
        createProjectForm,
        sidebarContent
    };
}

export { projectDOM };