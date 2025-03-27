function hideShorts() {
  const xpathResult = document.evaluate(
    "//*[contains(text(), 'Shorts')]",
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );
  
  for (let i = 0; i < xpathResult.snapshotLength; i++) {
    const shortsElement = xpathResult.snapshotItem(i);
    
    let parent = shortsElement;
    while (parent && parent.tagName !== 'YTD-RICH-SHELF-RENDERER') {
      parent = parent.parentNode;
    }
    
    if (parent) {
      parent.style.display = 'none';
    }
  }
}

setInterval(hideShorts, 2000);

function hideFacebookReels() {
  const xpathResult = document.evaluate(
    "//span[text()='Reels and short videos']",
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );
  
  for (let i = 0; i < xpathResult.snapshotLength; i++) {
    const reelsSpan = xpathResult.snapshotItem(i);
    
    if (!reelsSpan) continue;
    
    let parent = reelsSpan.parentNode;
    while (parent) {
      if (parent.classList && parent.classList.contains('html-div')) {
        parent.style.display = 'none';
        break;
      }
      parent = parent.parentNode;
    }
  }
}


hideFacebookReels();
hideShorts();

setInterval(() => { hideFacebookReels(); hideShorts(); }, 1000);
