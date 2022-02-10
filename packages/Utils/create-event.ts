export interface CreateEvent {
  preventDefault: () => void
  target: Record<string, unknown>
}

export const createEvent = (
  props: Record<string, unknown>
): { preventDefault: CreateEvent['preventDefault']; target: CreateEvent['target'] } => ({
  preventDefault: () => null,
  target: { ...props },
})
