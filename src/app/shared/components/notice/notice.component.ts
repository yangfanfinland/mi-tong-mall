import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-notice',
    templateUrl: './notice.component.html',
    styleUrls: ['./notice.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoticeComponent implements OnInit {
    ngOnInit() {}
}