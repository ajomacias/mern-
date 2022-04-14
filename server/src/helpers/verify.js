export function isEmptyObject(object) {
  if(!object) return true;
  for (const property in object) {
    return false;
  }

  return true;
}
