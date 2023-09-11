export function unprocessableEntity() {
  return {
    type: "unprocessableEntity",
    message: `A data do voo deve ser maior do que a data atual!`,
  };
}
