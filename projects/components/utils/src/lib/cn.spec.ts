import { cn } from './cn';

describe('cn utility', () => {
  it('should merge class names', () => {
    const class1 = 'class1';
    const class2 = 'class2';

    const result = cn(class1, class2);

    expect(result).toBe('class1 class2');
  });

  it('should handle falsy values', () => {
    const class1 = 'class1';
    const class2 = 'class2';

    const result = cn(class1, null, undefined, false, '', class2);

    expect(result).toBe('class1 class2');
  });

  it('should resolve tailwind class conflicts correctly', () => {
    const baseClasses = 'px-2 py-1 bg-red-500';
    const overrideClasses = 'px-4 bg-blue-500';

    const result = cn(baseClasses, overrideClasses);

    expect(result).toBe('py-1 px-4 bg-blue-500');
  });

  it('should handle object arguments', () => {
    const classObject = { 'class-a': true, 'class-b': false };

    const result = cn(classObject);

    expect(result).toBe('class-a');
  });

  it('should handle array arguments', () => {
    const classArray = ['class-a', 'class-b'];

    const result = cn(classArray);

    expect(result).toBe('class-a class-b');
  });
});
