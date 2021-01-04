import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
    keyword = new FormControl('')

    constructor(
        private router: Router,
      ) {}

    ngOnInit() {}

    search() {
        if (this.keyword.value) {
            this.router.navigate(['/product'], { queryParams: { keyword: this.keyword.value }})
        }
    }
}