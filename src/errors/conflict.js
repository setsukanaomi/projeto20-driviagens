export function conflictError(resource) {
  console.log(resource);
  return {
    type: "conflictError",
    message: `${resource} já existe!`,
  };
}
