import { getAnotherCategoryElement, getPostsHeadingTextElementItems, getPostsIndexLiElement, getPostsIndexLiElements, getPostsIndexUlListElement, getPostsTotalCountText, getSidebar, getSidebarBackground, getSidebarShowButton, getTopBar } from "./elements";
import { getPostsHeadingTextElementsDisplayRange, getPostsTotalCount } from "./functions";

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

  // function resized() {
    
  // }
  // resized();
  // window.addEventListener('resize', resized);

  const postsTotalCountText = getPostsTotalCountText();
  if (postsTotalCountText !== null && !location.pathname.startsWith('/notice')) {
    postsTotalCountText.textContent = '(' + getPostsTotalCount().toString() + ')';
  }

  const postsIndexUlListElement = getPostsIndexUlListElement();
  if (postsIndexUlListElement !== null) {
    const postsHeadingTextElementItems = getPostsHeadingTextElementItems();
    // console.log('@@@ @@@postsHeadingTextElementItems', postsHeadingTextElementItems);
    for (const item of postsHeadingTextElementItems) {
      const text = item.element.textContent ?? '';

      const span = document.createElement('span');
      span.textContent = text;

      const li = document.createElement('li');
      li.classList.add(item.element.nodeName.toLowerCase());
      li.appendChild(span);

      li.addEventListener('click', () => {
        const postsHeadingTextElementsDisplayRange = getPostsHeadingTextElementsDisplayRange();
        const target = postsHeadingTextElementsDisplayRange.find(x => x.element === item.element);
        if (target === undefined){
          return;
        }
        window.scrollTo({
          behavior: 'smooth',
          top: target.start + 30,
        });
      });

      // console.log('@postsIndexUlListElement.appendChild', li);
      postsIndexUlListElement.appendChild(li);
    }
  }

  function postsIndexCheck() {
    const postsHeadingTextElementsDisplayRange = getPostsHeadingTextElementsDisplayRange();
    // console.log('@postsHeadingTextElementsDisplayRange', postsHeadingTextElementsDisplayRange);
    if (postsHeadingTextElementsDisplayRange.length === 0) return;

    const scrollTop = window.scrollY;
    getPostsIndexLiElements()?.forEach((element) => {
      element.classList.remove('active');
    });
    // console.log('@scrollTop', scrollTop);
    postsHeadingTextElementsDisplayRange.forEach((item, index) => {
      // console.log('@item', item);
      if (scrollTop > item.start && scrollTop <= item.end) {
        // console.log('matched', item);
        const postsIndexLi = getPostsIndexLiElement(item.element.textContent, index);
        postsIndexLi?.classList.add('active');
      } 
    });
  }
  postsIndexCheck();

  window.addEventListener('scroll', () => {
    postsIndexCheck();
  });

  // getAnotherCategoryElement()?.classList.remove('another_category_color_gray');
}
