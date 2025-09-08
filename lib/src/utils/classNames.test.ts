import { classNames } from './classNames'

describe('classNames', () => {
  it('should return an empty string when no arguments are provided', () => {
    const cx = classNames()
    expect(cx()).toBe('')
  })

  it('should handle string arguments', () => {
    const cx = classNames()
    expect(cx('class1', 'class2')).toBe('class1 class2')
  })

  it('should handle false, null, and undefined values', () => {
    const cx = classNames()
    expect(cx('class1', false, null, undefined, 'class2')).toBe('class1 class2')
  })

  it('should handle arrays of class names', () => {
    const cx = classNames()
    expect(cx(['class1', 'class2', false, null, undefined], 'class3')).toBe('class1 class2 class3')
  })

  it('should handle objects with truthy values', () => {
    const cx = classNames()
    expect(cx({ class1: true, class2: false, class3: true })).toBe('class1 class3')
  })

  it('should handle mixed arguments', () => {
    const cx = classNames()
    expect(
      cx(
        'class1',
        ['class2', null, 'class3'],
        { class4: true, class5: false },
        // eslint-disable-next-line no-constant-binary-expression
        true && 'class5',
        // eslint-disable-next-line no-constant-binary-expression
        false && 'class6'
      )
    ).toBe('class1 class2 class3 class4 class5')
  })

  it('should deduplicate class names', () => {
    const cx = classNames()
    expect(
      cx('class1', 'class2', 'class1', 'class3', 'class2', ['class1', 'class2'], {
        class2: true,
        class3: true,
        class4: false,
      })
    ).toBe('class1 class2 class3')
  })

  it('should work with CSS modules', () => {
    const fakeModule = {
      button: 'button_xyz',
      primary: 'primary_123',
    }

    const cx = classNames(fakeModule)
    expect(cx('button', 'plain')).toBe('button_xyz plain')
  })
})
