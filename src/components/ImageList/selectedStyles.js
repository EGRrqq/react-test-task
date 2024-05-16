export function handleSelectedStyles(
  { prevTarget, curTarget },
  { notSelectedClass, selectedClass }
) {
  if (prevTarget.current) {
    notSelectedClass &&
      prevTarget.current.parentElement.classList.add(notSelectedClass);
    selectedClass &&
      prevTarget.current.parentElement.classList.remove(selectedClass);
  }

  notSelectedClass &&
    curTarget.parentElement.classList.remove(notSelectedClass);
  selectedClass && curTarget.parentElement.classList.add(selectedClass);

  prevTarget.current = curTarget;
}

export const getSelectedStyles = (notSelectedClass, selectedClass) => {
  return {
    notSelectedClass: notSelectedClass,
    selectedClass: selectedClass,
  };
};

export const getTargets = (prevTarget, curTarget) => {
  return {
    prevTarget: prevTarget,
    curTarget: curTarget,
  };
};
