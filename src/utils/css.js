export function getTransformStyle(transform) {
  return {
    transform,
    MozTransform: transform,
    WebkitTransform: transform,
    OTransform: transform,
    MsTransform: transform
  }
}
