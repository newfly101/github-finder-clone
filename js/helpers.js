export function on(target, eventName, handler) {
    target.addEventListener(eventName, handler);
}

export function qs(selector, scope = document) {
    if (!selector) throw 'no Selector';

    return scope.querySelector(selector);
}