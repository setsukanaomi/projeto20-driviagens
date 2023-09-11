export function notFound() {
  return {
    type: "notFound",
    message: `Uma das cidades não existem!`,
  };
}
