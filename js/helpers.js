export function on(target, eventName, handler) {
    target.addEventListener(eventName, handler);
}