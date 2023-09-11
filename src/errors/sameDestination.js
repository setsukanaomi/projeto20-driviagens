export function sameDestinationError() {
  return {
    type: "destinationError",
    message: `Origem não pode ser o mesmo que o destino!`,
  };
}
