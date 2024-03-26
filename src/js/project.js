function ProjectManager() {
    const projects = [];

    const createProject = (projectName) => {
        const project = {
            name: projectName,
            tasks: []
        };
        return project;
    };

    const addProject = (project) => {
        projects.push(project);
        saveProject();
    };

    const getProjects = () => {
        return JSON.parse(localStorage.getItem('projects'));
    };

    const removeProject = (index) => {
        projects.splice(index, 1);
        saveProject();
    };

    const saveProject = () => {
        // Get the existing projects from localStorage
        const existProjects = getProjects();

        // Adds the new project to the list of existing projects
        existProjects.push(...projects);

        // Saves the updated list of projects to localStorage
        localStorage.setItem('projects', JSON.stringify(existProjects));
    };

    return {
        createProject,
        addProject,
        getProjects,
        removeProject
    };
}

function projectDOM() {
    const projectManager = ProjectManager();

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
            event.preventDefault();
            const project = projectManager.createProject(input.value);
            projectManager.addProject(project);
            setTimeout(() => closeNewProjectForm(form), 500);
        });

        cancelButton.addEventListener('click', (event) => {
            event.preventDefault();
            setTimeout(() => closeNewProjectForm(form), 500);
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();
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

    const createNavItem = (name) => {
        const newItem = document.createElement('button');
        const newItemIcon = document.createElement('i');

        newItem.classList.add('nav-item');
        newItemIcon.classList.add('mdi', 'mdi-laptop', 'nav-icon');

        newItem.setAttribute('type', 'button');
        newItem.setAttribute('id', `${name.toLowerCase()}-btn`);

        newItem.appendChild(newItemIcon);
        newItem.insertAdjacentText('beforeend', `${name}`);

        return newItem;
    };

    const sidebarContent = () => {
        const sideBar = document.querySelector('#sidebar-project');
        const projects = projectManager.getProjects();
        
        if (projects.length) {
            projects.forEach(item => {
                sideBar.appendChild(createNavItem(item.name));
            });
        }
    };

    const closeNewProjectForm = (element) => {
        if (element) {
            element.remove();
        }
    };

    return {
        createNewProjectForm,
        sidebarContent
    };
}

export { projectDOM };