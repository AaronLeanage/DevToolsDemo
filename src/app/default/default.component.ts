import { Component } from '@angular/core';
import DisableDevtool from 'disable-devtool'; // https://github.com/theajack/disable-devtool

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {
  ngOnInit(): void {
    DisableDevtool();
  }
}
