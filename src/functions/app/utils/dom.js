const SCROLL_OFFSET = 150;

export const getSectionsPositionsFromElement = ($element, sections) =>
  sections.reduce((reducedSections, { id }) => {
    const validId = `#${id}`;

    if ($element) {
      const section = $element.querySelector(validId);
      const link = $element.querySelector(`a[href="${validId}"]`);

      if (section && link) {
        reducedSections.push({ position: section.offsetTop, link });
      }
    }

    return reducedSections;
  }, []);

export const isScrollEnd = $element => $element ?
  window.innerHeight + window.scrollY + SCROLL_OFFSET >= $element.getBoundingClientRect().height : false;

export const handleSelectActiveElement = () => {

};

export const handleElementsSelection = ($element, sections, activationClass) => {
  const scrollPosition = window.scrollY;
  let selectedSectionIndex = 0;

  sections.forEach(({position}, sectionIndex) => {
    if (scrollPosition + SCROLL_OFFSET >= position) {

      selectedSectionIndex = sectionIndex;

      return;
    }

    if (isScrollEnd($element)) {
      selectedSectionIndex = sections.length - 1;
    }
  });

  sections.forEach(({link}, sectionIndex) => {
    if (sectionIndex === selectedSectionIndex) {
      link.classList.add(activationClass);
    } else {
      link.classList.remove(activationClass);
    }
  });
};
