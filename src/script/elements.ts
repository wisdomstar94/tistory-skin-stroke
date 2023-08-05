export function getSidebarShowButton() {
  return document.querySelector<HTMLButtonElement>('.sidebar-show-button');
}

export function getSidebar() {
  return document.querySelector<HTMLElement>('.side-bar');
}

export function getSidebarBackground() {
  return document.querySelector<HTMLElement>('.sidebar-background');
}

export function getContentContainer() {
  return document.querySelector<HTMLElement>('.content-container');
}

export function getTopBar() {
  return document.querySelector<HTMLElement>('.top-bar');
}

export function getPostsTotalCountText() {
  return document.querySelector<HTMLSpanElement>('.posts-total-count-text');
}
