/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

const _window: any = window;

@Injectable()
export class BrowserNotificationService {
  private notifSupported;
  private enabled = false;

  constructor() {
    this.notifSupported = (<any>window).Notification && (<any>Notification).permission !== 'denied' ? true : false;
  }

  async checkNotification(): Promise<any> {
    if (!this.enabled) {
      return Notification.requestPermission((result) => {
        return result === 'granted' ? (
          this.enabled = true
        ) : false;
      });
    }
  }

  public disable(): void {
    this.enabled = false;
  }

  public show(name: string): void {
    if (!this.notifSupported || !this.enabled) {
      return;
    }

    Notification.requestPermission((status) => {
      const n = new Notification('Now playing', {
        body: name,
        icon: 'assets/logo_git.png'
      });
    });
  }

}
