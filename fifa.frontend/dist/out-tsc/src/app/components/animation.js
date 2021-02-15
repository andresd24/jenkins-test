import { animate, style, transition, trigger } from '@angular/animations';
export var fadeIn = trigger('fadeIn', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate('300ms linear', style({
            opacity: 1
        }))
    ])
]);
//# sourceMappingURL=animation.js.map