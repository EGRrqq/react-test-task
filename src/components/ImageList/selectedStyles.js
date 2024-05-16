export function handleSelectedStyles(
  { prevTarget, curTarget },
  { notSelectedClass, selectedClass }
) {
  console.log({ prevTarget, curTarget }, { notSelectedClass, selectedClass });
  if (prevTarget.current) {
    prevTarget.current.parentElement.classList.add(notSelectedClass);
    prevTarget.current.parentElement.classList.remove(selectedClass);
  }

  curTarget.parentElement.classList.remove(notSelectedClass);
  curTarget.parentElement.classList.add(selectedClass);
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
