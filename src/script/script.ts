import { getContentContainer, getPostsTotalCountText, getSidebar, getSidebarBackground, getSidebarShowButton, getTopBar } from "./elements";
import { getPostsTotalCount, getTopbarHeight } from "./functions";

console.log('tistory stroke skin javascript loaded!');

window.addEventListener('load', () => {
  console.log('tistory stroke skin javascript init!');
  int();
});

function int() {
  const topbarHeight = getTopbarHeight();
  const contentContainerDefaultPcPadding = 40;
  const contentContainerDefaultMobilePadding = 20;

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

  // function resized() {
    
  // }
  // resized();
  // window.addEventListener('resize', resized);

  const postsTotalCountText = getPostsTotalCountText();
  if (postsTotalCountText !== null) {
    postsTotalCountText.textContent = getPostsTotalCount().toString();
  }
}
