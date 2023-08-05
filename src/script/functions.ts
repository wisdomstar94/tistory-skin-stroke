import { ICommon } from "../interfaces/common.interface";
import { getPostsHeadingTextElementItems } from "./elements";

export function getPostsTotalCount(): number {
  const target = document.querySelector<HTMLSpanElement>('.sidebar-element-row a.link_tit span.c_cnt');
  if (target === null) {
    return 0;
  }
  const text = target.textContent;
  if (text === null) {
    return 0;
  }
  return Number(text.replace('(', '').replace(')', ''));
}

export function getTopbarHeight() {
  return 52;
}

export function getPostsHeadingTextElementsDisplayRange() {
  const items: ICommon.PostsHeadingTextElementDisplayRangeItem[] = [];
  const elementItems = getPostsHeadingTextElementItems();
  const scrollTop = window.scrollY;
  elementItems.forEach((item, index) => {
    
    const rect = item.element.getBoundingClientRect();
    const start = rect.top + scrollTop;

    const nextElement = elementItems[index + 1]?.element ?? document.querySelector<HTMLElement>('.another_category');
    const nextElementRect = nextElement.getBoundingClientRect();
    const end = nextElementRect.top + scrollTop;

    items.push({
      element: item.element,
      index: item.index,
      start: start - 50,
      end: end - 50,
    });
  });
  return items;
}
