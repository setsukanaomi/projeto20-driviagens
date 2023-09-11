export function doesntExist(resource) {
  return {
    type: "doesntExist",
    message: `${resource} não existe!`,
  };
}
