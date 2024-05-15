export function handleSelectedStyles(
  { prevTarget, curTarget },
  { notSelectedClass, selectedClass }
) {
  if (prevTarget.current) {
    prevTarget.current.classList.add(notSelectedClass);
    prevTarget.current.classList.remove(selectedClass);
  }

  curTarget.classList.remove(notSelectedClass);
  curTarget.classList.add(selectedClass);
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
