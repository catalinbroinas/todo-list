import '../css/style.css';
import { inboxDOM } from './inbox';

function UI() {
    const pageContent = document.querySelector('#content');
    const inboxButton = document.querySelector('#inbox-btn');
    const todayButton = document.querySelector('#today-btn');
    const weekButton = document.querySelector('#week-btn');
    const newProjectButton = document.querySelector('#new-project-btn');

    const displayInbox = () => {
        const inbox = inboxDOM();
        const inboxAddTask = inbox.addTask();

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