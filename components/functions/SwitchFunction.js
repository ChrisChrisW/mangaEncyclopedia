export function switchType(
  value,
  setSwitchValue,
  setType,
  setPage,
  setFirstPage
) {
  setSwitchValue(value);
  setPage(0);
  setFirstPage(false); // Revenir à la première page
  if (value) {
    setType("anime");
  } else {
    setType("manga");
  }
}

export function switchTypeTop(value, setSwitchValue, setType) {
  setSwitchValue(value);
  if (value) {
    setType("anime");
  } else {
    setType("manga");
  }
}
