export const createEvent = (
  props: Record<string, unknown>
): { preventDefault: () => void; target: Record<string, unknown> } => ({
  preventDefault: () => null,
  target: { ...props },
})
