export function conflictError(resource) {
  return {
    type: "conflictError",
    message: `${resource} já existe!`,
  };
}
