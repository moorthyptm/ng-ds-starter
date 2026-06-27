import { Component, input, inputBinding, signal } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PtmButtonDirective } from './button.directive';
import { ButtonVariants } from './button.variants';

@Component({
  template: `<button ptmButton [variant]="variant()" [size]="size()" [class]="userClass()">
    Button
  </button>`,
  imports: [PtmButtonDirective],
})
class TestHostComponent {
  readonly variant = input<ButtonVariants['variant']>('primary');
  readonly size = input<ButtonVariants['size']>('default');
  // eslint-disable-next-line @angular-eslint/no-input-rename
  readonly userClass = input<string>('', { alias: 'class' });
}

describe('PtmButtonDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  const variantSignal = signal<ButtonVariants['variant']>('primary');
  const sizeSignal = signal<ButtonVariants['size']>('default');
  const classSignal = signal<string>('');

  beforeEach(async () => {
    variantSignal.set('primary');
    sizeSignal.set('default');
    classSignal.set('');

    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent, {
      bindings: [
        inputBinding('variant', variantSignal),
        inputBinding('size', sizeSignal),
        inputBinding('class', classSignal),
      ],
    });
  });

  it('should apply primary variant and default size by default', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.directive(PtmButtonDirective))
      .nativeElement as HTMLButtonElement;

    expect(button.className).toContain('bg-primary');
    expect(button.className).toContain('h-10');
    expect(button.className).toContain('px-4');
  });

  it('should apply destructive variant and sm size', () => {
    variantSignal.set('destructive');
    sizeSignal.set('sm');

    fixture.detectChanges();
    const button = fixture.debugElement.query(By.directive(PtmButtonDirective))
      .nativeElement as HTMLButtonElement;

    expect(button.className).toContain('bg-destructive');
    expect(button.className).toContain('h-9');
    expect(button.className).toContain('px-3');
  });

  it('should apply outline variant and lg size', () => {
    variantSignal.set('outline');
    sizeSignal.set('lg');

    fixture.detectChanges();
    const button = fixture.debugElement.query(By.directive(PtmButtonDirective))
      .nativeElement as HTMLButtonElement;

    expect(button.className).toContain('border-input');
    expect(button.className).toContain('h-11');
    expect(button.className).toContain('px-8');
  });

  it('should apply secondary variant and icon size', () => {
    variantSignal.set('secondary');
    sizeSignal.set('icon');

    fixture.detectChanges();
    const button = fixture.debugElement.query(By.directive(PtmButtonDirective))
      .nativeElement as HTMLButtonElement;

    expect(button.className).toContain('bg-secondary');
    expect(button.className).toContain('h-10');
    expect(button.className).toContain('w-10');
  });

  it('should apply ghost and link variants', () => {
    variantSignal.set('ghost');

    fixture.detectChanges();
    let button = fixture.debugElement.query(By.directive(PtmButtonDirective))
      .nativeElement as HTMLButtonElement;

    expect(button.className).toContain('hover:bg-accent');

    variantSignal.set('link');

    fixture.detectChanges();
    button = fixture.debugElement.query(By.directive(PtmButtonDirective))
      .nativeElement as HTMLButtonElement;

    expect(button.className).toContain('underline-offset-4');
  });

  it('should merge custom classes intelligently using tailwind-merge', () => {
    classSignal.set('custom-class bg-red-500');

    fixture.detectChanges();
    const button = fixture.debugElement.query(By.directive(PtmButtonDirective))
      .nativeElement as HTMLButtonElement;

    expect(button.className).toContain('custom-class');
    expect(button.className).toContain('bg-red-500');
    expect(button.className).not.toMatch(/(^|\s)bg-primary(\s|$)/);
  });
});
