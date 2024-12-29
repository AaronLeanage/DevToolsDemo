import { Component } from '@angular/core';
import DisableDevtool from 'disable-devtool'; // https://github.com/theajack/disable-devtool

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent {
  labelText = '';

  ngOnInit(): void {
    const superAdmin = true; // for demo purposes

    if (superAdmin) {
      DisableDevtool({
        url: 'http://localhost:4200',
        ondevtoolopen: (type, next) => {
          // Maybe we should dispatch to destroy the player/block the player loading anything here
          // Do we want to disable the whole application while open, unless superadmin, or just the player?
          this.labelText = `Devtool is opened with type ${type}`;
          next(); // Attempt to close window, remove to handle in-house
        },
        ondevtoolclose: () => {
          // Nice of it to provide this too, could unblock/recreate the player here
          this.labelText = 'Devtool is closed';
        },
        clearLog: true,
        disableSelect: false,
        disableCopy: false,
        disableCut: false,
        disablePaste: false,
      });
    }
  }

  buttonCheck() {
    this.labelText = `${DisableDevtool.isDevToolOpened()}`;
  }
}
