import { Directive, input, computed } from '@angular/core';
import { cn } from '@ptm/components/utils';
import { buttonVariants, type ButtonVariants } from './button.variants';

@Directive({
  selector: 'button[ptmButton], a[ptmButton]',
  host: {
    '[class]': 'computedClass()',
  },
})
export class PtmButtonDirective {
  readonly variant = input<ButtonVariants['variant']>('primary');
  readonly size = input<ButtonVariants['size']>('default');

  // eslint-disable-next-line @angular-eslint/no-input-rename
  readonly userClass = input<string>('', { alias: 'class' });

  protected readonly computedClass = computed(() =>
    cn(buttonVariants({ variant: this.variant(), size: this.size() }), this.userClass()),
  );
}
