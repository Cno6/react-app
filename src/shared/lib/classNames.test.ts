import { classNames } from './classNames';

describe('classNames', () => {
  it('only first argument return string with class', () => {
    expect(classNames('class')).toBe('class');
  });

  it('with additional class', () => {
    expect(classNames('class', {}, ['class1', 'class2'])).toBe('class class1 class2');
  });

  it('with mods & additional class', () => {
    expect(
      classNames('class', { class3: true, class4: true }, ['class1', 'class2']),
    )
      .toBe('class class1 class2 class3 class4');
  });

  it('with mods class where one is false', () => {
    expect(
      classNames('class', { class3: true, class4: false }),
    )
      .toBe('class class3');
  });

  it('with mods class where one is undefined', () => {
    expect(
      classNames('class', { class3: true, class4: undefined }),
    )
      .toBe('class class3');
  });
});
