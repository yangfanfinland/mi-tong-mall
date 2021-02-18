import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
    selector: 'user-layout',
    templateUrl: './user-layout.component.html',
    styleUrls: ['./user-layout.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserLayoutComponent implements OnInit {
    ngOnInit() {}
}