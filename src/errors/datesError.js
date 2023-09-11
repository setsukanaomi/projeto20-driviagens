export function datesError() {
  return {
    type: "datesError",
    message: "Need both parameters. (bigger-date and smaller-date)",
  };
}

export function invalidDates() {
  return {
    type: "invalidDates",
    message: "Dates must be in DD-MM-YYYY format.",
  };
}

export function inconsistentDates() {
  return {
    type: "inconsistentDates",
    message: "Bigger-date must be bigger or equal to smaller-date.",
  };
}
