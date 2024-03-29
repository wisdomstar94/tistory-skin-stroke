import { ICommon } from "../interfaces/common.interface";

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

export function getPostsIndexUlListElement() {
  return document.querySelector<HTMLUListElement>('.posts-index-container ul.list-row');
}

export function getPostsHeadingTextElementItems(): ICommon.ElementItem[] {
  const elementItems: ICommon.ElementItem[] = [];

  const postsBody = document.querySelector(`.tt_article_useless_p_margin`);
  if (postsBody === null) return elementItems;

  let index = 0;
  for (const value of postsBody.children) {
    const child = value as HTMLElement;
    // console.log('@child.nodeName.toLowerCase()', child.nodeName.toLowerCase());
    if (child.textContent?.trim() === '') {
      continue;
    }
    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(child.nodeName.toLowerCase())) {
      elementItems.push({
        element: child,
        index,
      });
      index++;
    }
  }

  return elementItems;
}

export function getPostsIndexLiElements() {
  const ul = document.querySelector<HTMLUListElement>(`.posts-index-container ul.list-row`);
  if (ul === null) {
    return null;
  }
  const liElements: HTMLLIElement[] = [];
  for (let i = 0; i < ul.children.length; i++) {
    const element = ul.children[i] as HTMLLIElement;
    liElements.push(element);
  }
  return liElements;
}

export function getPostsIndexLiElement(text: string | null, index: number) {
  // const postsHeadingTextElements = getPostsHeadingTextElements();
  if (typeof text !== 'string') {
    return null;
  }

  const ul = document.querySelector<HTMLUListElement>(`.posts-index-container ul.list-row`);
  if (ul === null) {
    return null;
  }
  
  for (let i = 0; i < ul.children.length; i++) {
    const li = ul.children[i] as HTMLLIElement;
    if (li.textContent?.trim() === text.trim() && index === i) {
      return li;
    }
  }
  return null;
}

export function getCodeElements() {
  const elements: HTMLElement[] = [];
  const targets = document.querySelectorAll(`.tt_article_useless_p_margin code`);
  targets.forEach((element) => {
    elements.push(element as HTMLElement);
  });
  return elements;
}

export function getPostsIndexItemLiElements() {
  const lis: HTMLLIElement[] = [];
  document.querySelectorAll<HTMLLIElement>('ul.posts-list li.posts-index-item').forEach(item => lis.push(item));
  return lis;
}