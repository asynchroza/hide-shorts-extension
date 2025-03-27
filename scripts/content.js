 function hideShorts() {
  const shortsElements = Array.from(
   document.querySelectorAll('*')
  ).filter((element) => element.textContent.includes('Shorts'));

  shortsElements.forEach((shortsElement) => {
   let parent = shortsElement;
   while (parent && parent.tagName !== 'YTD-RICH-SHELF-RENDERER') {
    parent = parent.parentNode;
   }

   if (parent) {
    parent.style.display = 'none';
   }
  });
 }

 hideShorts();

 setInterval(hideShorts, 1000);
