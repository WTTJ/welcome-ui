export interface AspectRatioOptions {
  /**
   * The aspect ratio of the component.
   * @default '4-3'
   *
   * Options:
   * - 'square' → 1 / 1
   * - '4-3'    → 4 / 3
   * - '3-2'    → 3 / 2
   * - 'video'  → 16 / 9
   */
  ratio?: '3-2' | '4-3' | 'square' | 'video'
}

export type AspectRatioProps = AspectRatioOptions
