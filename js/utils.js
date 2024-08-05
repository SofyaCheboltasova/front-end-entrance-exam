function createElement(type, className, textContent) {
  const element = document.createElement(type);
  if (className) element.classList.add(className);
  if (textContent) element.textContent = textContent;
  return element;
}

function appendChildren(parent, children) {
  if (Array.isArray(children)) {
    children.forEach((child) => parent.appendChild(child));
    return;
  }
  parent.appendChild(children);
}

export { createElement, appendChildren };

