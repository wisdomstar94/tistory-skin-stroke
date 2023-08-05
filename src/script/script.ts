import { getContentContainer, getSidebar, getSidebarBackground, getSidebarShowButton, getTopBar } from "./elements";

console.log('tistory stroke skin javascript loaded!');

window.addEventListener('load', () => {
  console.log('tistory stroke skin javascript init!');
  int();
});

function int() {
  const sidebarShowButton = getSidebarShowButton();
  if (sidebarShowButton !== null) {
    sidebarShowButton.addEventListener('click', () => {
      const sidebar = getSidebar();
      if (sidebar !== null) {
        sidebar.classList.add('my-show');
      }

      const sidebarBackground = getSidebarBackground();
      if (sidebarBackground !== null) {
        sidebarBackground.classList.remove('my-hide'); 
        sidebarBackground.classList.add('my-show');
      }
    });
  }

  const sidebarBackground = getSidebarBackground();
  if (sidebarBackground !== null) {
    sidebarBackground.addEventListener('click', () => {
      const sidebar = getSidebar();
      if (sidebar !== null) {
        sidebar.classList.remove('my-show');
      }
      sidebarBackground.classList.remove('my-show');
      sidebarBackground.classList.add('my-hide');
    });
  }

  function resized() {
    const contentContainer = getContentContainer();
    const topBar = getTopBar();
    const windowWidth = window.innerWidth;
    if (windowWidth < 1024) {
      if (contentContainer !== null) {
        contentContainer.style.paddingTop = (topBar?.clientHeight ?? 0) + 'px';
      }
    } else {
      if (contentContainer !== null) {
        contentContainer.style.paddingTop = '0';
      }
    }
  }
  resized();
  window.addEventListener('resize', resized);
}
