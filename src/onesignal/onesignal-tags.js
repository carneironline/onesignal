const CLASS_ACTIVATED = 'onesignal-tag-activated';

export function addTag(tagKey, tagValue) {
    OneSignal.User.addTag(tagKey, tagValue);
}

export function removeTag(tagKey) {
    OneSignal.User.removeTag(tagKey);
}

export function getTags() {
    return OneSignal.User.getTags();
}

function setupClickTagging() {
    document.querySelectorAll('[data-onesignal-tag]').forEach((element) => {
        setClassTagsOnInit(element);
        setEvents(element);
    });
}

function setEvents(element) {
    element.addEventListener('click', () => {
        const tag = element.getAttribute('data-onesignal-tag');
        const value = element.getAttribute('data-onesignal-tag-value') || 'clicked';

        if (element.classList.contains(CLASS_ACTIVATED)) {
            removeTag(tag);
            removeClassActivated(element);
        } else {
            addTag(tag, value);
            addClassActivated(element);
        }
    });
}

function setClassTagsOnInit(element) {
    Object.entries(element.dataset).forEach(([_, valueDataset]) => {
        Object.entries(getTags()).forEach(([key, value]) => {
            if (valueDataset === key && value) {
                addClassActivated(element);
            }
        });
    });
}

function addClassActivated(element) {
    element.classList.add(CLASS_ACTIVATED);
}

function removeClassActivated(element) {
    element.classList.remove(CLASS_ACTIVATED);
}

export function setupOneSignalTagging() {
    setupClickTagging();
}
