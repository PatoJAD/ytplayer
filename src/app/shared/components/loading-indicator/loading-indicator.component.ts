import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input
} from '@angular/core';

@Component({
  selector: 'loader',
  styleUrls: ['./loading-indicator.component.scss'],
  template: './loading-indicator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingIndicatorComponent {
  @Input() message = '';
  @Input() loading = false;

  @HostBinding('class.show-loader')
  get show() {
    return this.loading;
  }
}
