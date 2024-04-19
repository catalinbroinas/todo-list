import '../css/style.css';
import { inboxDOM } from './inbox';
import { projectDOM } from './project';
import { DOMHandler } from './utility';

function UI() {
    const utilities = DOMHandler();
    const inbox = inboxDOM();
    const projectDom = projectDOM();
    const pageContent = document.querySelector('#content');
    const allButton = document.querySelector('#all-btn');
    const inboxButton = document.querySelector('#inbox-btn');
    const todayButton = document.querySelector('#today-btn');
    const weekButton = document.querySelector('#week-btn');
    const newProjectButton = document.querySelector('#new-project-btn');

    const displayAll = () => {
        utilities.setActiveSidebarButton('all-btn');
        utilities.clearPageContent(pageContent);

        pageContent.appendChild(utilities.addTitle('All Tasks'));
        projectDom.displayAll();
    };

    const displayToday = () => {
        utilities.setActiveSidebarButton('today-btn');
        utilities.clearPageContent(pageContent);

        pageContent.appendChild(utilities.addTitle('Today'));
        projectDom.displayTasksByDate('today');
    };

    const displayWeek = () => {
        utilities.setActiveSidebarButton('week-btn');
        utilities.clearPageContent(pageContent);

        pageContent.appendChild(utilities.addTitle('This Week'));
        projectDom.displayTasksByDate('week');
    };

    const displayNewProjectForm = () => {
        const project = projectDOM();
        const newProjectForm = project.createProjectForm('add');
        const sidebarProject = document.querySelector('#sidebar-project');

        if (!sidebarProject.querySelector('#set-name-project')) {
            newProjectButton.after(newProjectForm);
            document.querySelector('#set-name-project').focus();
        }
    };

    const addEvents = () => {
        inboxButton.addEventListener('click', inbox.displayInbox);
        allButton.addEventListener('click', displayAll);
        todayButton.addEventListener('click', displayToday);
        weekButton.addEventListener('click', displayWeek);
        newProjectButton.addEventListener('click', displayNewProjectForm);
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