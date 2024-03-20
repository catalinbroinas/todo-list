import '../css/style.css';
import { inboxDOM } from './inbox';

function UI() {
    const pageContent = document.querySelector('#content');
    const inboxButton = document.querySelector('#inbox-btn');
    const todayButton = document.querySelector('#today-btn');
    const weekButton = document.querySelector('#week-btn');
    const newProjectButton = document.querySelector('#new-project-btn');

    const setActiveSidebarButton = (getActiveButton) => {
        const navItems = document.querySelectorAll('nav-item');
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

        pageContent.appendChild(addTitle('Inbox'));
        pageContent.appendChild(inboxAddTask);
    };

    const addEvents = () => {
        inboxButton.addEventListener('click', (event) => {
            setTimeout(() => {
                displayInbox();
            }, 500);
        });
    };

    return {
        displayInbox,
        addEvents
    };
}

window.addEventListener('load', () => {
    const ui = UI();
    ui.displayInbox();
    ui.addEvents();
});