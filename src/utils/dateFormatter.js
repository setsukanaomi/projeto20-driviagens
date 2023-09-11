export function dateConvert(date) {
  const parts = date.split("-");
  if (partes.length === 3) {
    return parts[2] + "-" + parts[1] + "-" + parts[0];
  }
  return null;
}

export function dateFormat(date) {
  const pattern = /^\d{2}-\d{2}-\d{4}$/;
  return pattern.test(date);
}

export function dateDesconvert(date) {
  const parts = date.split("-");
  const [day, month, year] = parts;
  const newDate = `${year}-${month}-${day}`;
  return newDate;
}
