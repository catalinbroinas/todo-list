function DOMHandler() {
    const clearPageContent = (container) => {
        if (container.hasChildNodes()) {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        }
    };

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

    const createButton = ({ title, buttonClass, iconClass, clickHandler }) => {
        const button = document.createElement('button');
        const buttonIcon = document.createElement('i');

        buttonClass.forEach(className => button.classList.add(className));
        iconClass.forEach(className => buttonIcon.classList.add(className));

        button.setAttribute('title', title);
        button.setAttribute('type', 'button');

        button.addEventListener('click', clickHandler);

        button.appendChild(buttonIcon);
        return button;
    };

    const removeElement = (element) => {
        if (element) {
            element.remove();
        }
    };

    return { 
        clearPageContent,
        setActiveSidebarButton,
        addTitle,
        createButton,
        removeElement
    };
}

export { DOMHandler };