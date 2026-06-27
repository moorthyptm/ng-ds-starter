import { Directive } from '@angular/core';

@Directive({
  selector: 'button[ptmButton], a[ptmButton]',
  host: {
    class:
      'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2',
  },
})
export class PtmButtonDirective {}
