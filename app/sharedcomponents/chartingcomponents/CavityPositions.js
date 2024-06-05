export const upperCavityPosition = (index) => {
  if (index === 5 || index === 10) {
    return "bottom-0 w-full";
  }
  if (index === 2 || index === 3 || index === 13 || index === 12) {
    return "bottom-3 w-full";
  }
  return "bottom-4";
};
