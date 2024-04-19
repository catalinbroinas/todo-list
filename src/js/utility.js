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

    const createButton = ({ name, title, buttonClass, iconClass, clickHandler }) => {
        const button = document.createElement('button');
        const buttonIcon = document.createElement('i');

        if (buttonClass) {
            buttonClass.forEach(className => button.classList.add(className));
        }
        if (iconClass) {
            iconClass.forEach(className => buttonIcon.classList.add(className));
        }

        button.setAttribute('type', 'button');
        if (title) {
            button.setAttribute('title', title);
        }

        if (clickHandler) {
            button.addEventListener('click', clickHandler);
        }

        button.appendChild(buttonIcon);
        if (name) {
            button.insertAdjacentText('beforeend', name);
        }

        return button;
    };

    const createInputElement = ({
        inputType, inputId, inputClass, inputName, inputPlaceholder, inputValue, inputFocus, inputTitle
    }) => {
        const input = document.createElement('input');

        input.setAttribute('type', inputType);

        if (inputId) {
            input.setAttribute('id', inputId);
        }
        if (inputName) {
            input.setAttribute('name', inputName);
        }

        if (inputClass) {
            inputClass.forEach(className => input.classList.add(className));
        }

        if (inputPlaceholder) {
            input.setAttribute('placeholder', inputPlaceholder);
        }
        if (inputValue) {
            input.setAttribute('value', inputValue);
        }
        if (inputFocus) {
            input.setAttribute('autofocus', 'autofocus');
        }
        if (inputTitle) {
            input.setAttribute('title', inputTitle);
        }

        return input;
    };

    const createSelectElement = ({ selectName, selectId, selectClass }) => {
        const select = document.createElement('select');

        select.setAttribute('name', selectName);
        select.setAttribute('id', selectId);

        if (selectClass) {
            selectClass.forEach(className => select.classList.add(className));
        }

        return select;
    };

    const createOptionElement = ({ optionValue, optionText, optionDisabled = false }) => {
        const option = document.createElement('option');

        option.setAttribute('value', optionValue);
        option.textContent = optionText;

        if (optionDisabled) {
            option.setAttribute('disabled', 'disabled');
        }

        return option;
    };

    const createDOMElement = ({
        elementTag,
        elementClass,
        elementId,
        elementText,
        elementAtrType,
        elementAtrValue,
        clickHandler
    }) => {
        const element = document.createElement(elementTag);

        if (elementClass) {
            elementClass.forEach(className => element.classList.add(className));
        }

        if (elementId) {
            element.setAttribute('id', elementId);
        }

        if (elementAtrType) {
            element.setAttribute(elementAtrType, elementAtrValue);
        }
        
        if (elementText) {
            element.textContent = elementText;
        }

        if (clickHandler) {
            element.addEventListener('click', clickHandler);
        }
        
        return element;
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
        createInputElement,
        createSelectElement,
        createOptionElement,
        removeElement,
        createDOMElement
    };
}

function WebStorage() {
    /**
      * Checks if localStorage or sessionStorage is available and accessible.
      * Based on the example from MDN web docs.
    */
    function storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                // everything except Firefox
                (e.code === 22 ||
                    // Firefox
                    e.code === 1014 ||
                    // test name field too, because code might not be present
                    // everything except Firefox
                    e.name === "QuotaExceededError" ||
                    // Firefox
                    e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage &&
                storage.length !== 0
            );
        }
    }

    return {
        storageAvailable
    };
}

function StringMethods() {
    const wordsCount = (str) => {
        const array = str.trim().split(/\s+/); 
        return array.length; 
    }

    const wordsUnderlineSeparate = (str) => {
        const array = str.trim().split(/\s+/); 
        return array.join('-');
    }

    return {
        wordsCount,
        wordsUnderlineSeparate
    }
}
export { DOMHandler, WebStorage, StringMethods };