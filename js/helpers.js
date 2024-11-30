export function on(target, eventName, handler) {
    target.addEventListener(eventName, handler);
}

export function qs(selector, scope = document) {
    if (!selector) throw 'no Selector';

    return scope.querySelector(selector);
}

// https://developer.mozilla.org/ko/docs/Web/API/CustomEvent/CustomEvent
// https://mong-blog.tistory.com/entry/JS-%EC%BB%A4%EC%8A%A4%ED%85%80-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EB%A5%BC-%EB%A7%8C%EB%93%9C%EB%8A%94-2%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95Event-CustomEvent#google_vignette
export function emit(target, eventName, detail) {
    const event = new CustomEvent(eventName, {detail});
    target.dispatchEvent(event);
}