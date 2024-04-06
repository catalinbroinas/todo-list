import '../css/style.css';
import { inboxDOM } from './inbox';
import { projectDOM } from './project';
import { DOMHandler } from './utility';

function UI() {
    const utilities = DOMHandler();
    const inbox = inboxDOM();
    const projectDom = projectDOM();
    const pageContent = document.querySelector('#content');
    const inboxButton = document.querySelector('#inbox-btn');
    const todayButton = document.querySelector('#today-btn');
    const weekButton = document.querySelector('#week-btn');
    const newProjectButton = document.querySelector('#new-project-btn');

    const displayToday = () => {
        utilities.setActiveSidebarButton('today-btn');
        utilities.clearPageContent(pageContent);

        pageContent.appendChild(utilities.addTitle('Today'));
    };

    const displayWeek = () => {
        utilities.setActiveSidebarButton('week-btn');
        utilities.clearPageContent(pageContent);

        pageContent.appendChild(utilities.addTitle('This Week'));
    };

    const displayNewProjectForm = () => {
        const project =  projectDOM();
        const newProjectForm = project.createProjectForm('add');
        const sidebarProject = document.querySelector('#sidebar-project');

        if (!sidebarProject.querySelector('#set-name-project')) {
            newProjectButton.after(newProjectForm);
            document.querySelector('#set-name-project').focus();
        }
    };

    const addEvents = () => {
        inboxButton.addEventListener('click', (event) => {
            setTimeout(() => {
                inbox.displayInbox();
                projectDom.setActiveProject(event);
            }, 500);
        });
        todayButton.addEventListener('click', (event) => {
            setTimeout(() => {
                displayToday();
            }, 500);
        });
        weekButton.addEventListener('click', () => {
            setTimeout(() => {
                displayWeek();
            }, 500);
        });
        newProjectButton.addEventListener('click', (event) => {
            setTimeout(() => {
                displayNewProjectForm();
            }, 300);
        });
    };

    return {
        addEvents
    };
}

window.addEventListener('load', () => {
    const ui = UI();
    const project = projectDOM();
    const inbox = inboxDOM();
    ui.addEvents();
    project.sidebarContent();
    inbox.displayInbox();
});