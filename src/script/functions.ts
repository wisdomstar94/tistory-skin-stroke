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