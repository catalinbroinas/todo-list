import '../css/style.css';
import { inboxDOM } from './inbox';
import { projectDOM } from './project';
import { DOMHandler } from './utility';

function UI() {
    const utilities = DOMHandler();
    const pageContent = document.querySelector('#content');
    const inboxButton = document.querySelector('#inbox-btn');
    const todayButton = document.querySelector('#today-btn');
    const weekButton = document.querySelector('#week-btn');
    const newProjectButton = document.querySelector('#new-project-btn');

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

    const displayInbox = () => {
        const inbox = inboxDOM();
        const inboxAddTask = inbox.addTask();

        setActiveSidebarButton('inbox-btn');
        utilities.clearPageContent(pageContent);

        pageContent.appendChild(addTitle('Inbox'));
        pageContent.appendChild(inboxAddTask);
    };

    const displayToday = () => {
        setActiveSidebarButton('today-btn');
        utilities.clearPageContent(pageContent);

        pageContent.appendChild(addTitle('Today'));
    };

    const displayWeek = () => {
        setActiveSidebarButton('week-btn');
        utilities.clearPageContent(pageContent);

        pageContent.appendChild(addTitle('This Week'));
    };

    const displayNewProjectForm = () => {
        const project =  projectDOM();
        const newProjectForm = project.createNewProjectForm();
        const sidebarProject = document.querySelector('#sidebar-project');
        
        sidebarProject.appendChild(newProjectForm);
    };

    const addEvents = () => {
        inboxButton.addEventListener('click', (event) => {
            setTimeout(() => {
                displayInbox();
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
        displayInbox,
        addEvents
    };
}

window.addEventListener('load', () => {
    const ui = UI();
    const project = projectDOM();
    // ui.displayInbox();
    ui.addEvents();
    project.sidebarContent();
});