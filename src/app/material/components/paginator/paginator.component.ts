import { Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: 'paginator.component.html',
  styleUrls: ['paginator.component.css'],
})
export class PaginatorComponent {
    @Input() length = 100;
    @Input() pageSize = 10;
    @Input() pageSizeOptions: number[] = [5];
    @Input() onPageFiredCallback: Function;

    onPageFired(event: PageEvent) {
        if (typeof this.onPageFiredCallback === "function") {
            this.onPageFiredCallback(event.pageIndex, event.pageSize);
        }
    }
}
