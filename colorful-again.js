const grayscaleFilterRe = /grayscale\(.+?\)/;

function removeGrayFilter(el) {
  const style = getComputedStyle(el);
  const filter = style.filter || style.webkitFilter;
  if (filter?.match(grayscaleFilterRe)) {
    const r = filter.replace(grayscaleFilterRe, '').trim();
    el.style.filter = r || 'none';
  }
}

function removeGlobalGrayFilter() {
  removeGrayFilter(document.documentElement);
  removeGrayFilter(document.body);
}

function colorfulAgain() {
  removeGlobalGrayFilter();
  document.addEventListener('', () => {
    removeGlobalGrayFilter();
    // deal with some async added styles
    setTimeout(() => {
      removeGlobalGrayFilter();
    }, 3000)
  });
}

colorfulAgain();
