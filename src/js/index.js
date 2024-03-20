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

    const displayInbox = () => {
        const inbox = inboxDOM();
        const inboxAddTask = inbox.addTask();

        setActiveSidebarButton('inbox-btn');

        pageContent.appendChild(inboxAddTask);
    };

    return {
        displayInbox
    };
}

window.addEventListener('load', () => {
    const ui = UI();
    ui.displayInbox();
});