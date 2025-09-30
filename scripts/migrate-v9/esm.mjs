export const getModule = module => {
  return typeof module === 'function' ? module : module.default
}
