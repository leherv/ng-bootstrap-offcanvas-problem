import { Component } from '@angular/core';

@Component({
  selector: 'app-offcanvas-drawer',
  standalone: true,
  imports: [],
  template: `
    <div class="offcanvas-header border-bottom text-center">
      <h5 class="w-100">Title</h5>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        data-bs-dismiss="offcanvas"
      ></button>
    </div>

    <div class="offcanvas-body p-0">
      <ul class="list-group rounded-0 p-0 m-0">
        @for (action of actions; track $index) {
          <li>
            <button
              type="button"
              class="btn btn-rimo-drawer p-3 w-100"
              (click)="onActionClicked()"
              (keyup.enter)="onActionClicked()"
              tabindex="0"
            >
              {{ action.name }}
            </button>
          </li>
        }
      </ul>
    </div>
    <button
      type="button"
      class="btn btn-rimo-cancel p-3 w-100"
      (click)="close()"
      (keyup.enter)="close()"
      aria-label="Close"
    >
      Cancel
    </button>
  `,
  styles: ``
})
export class OffcanvasDrawerComponent {
  get actions() {
    return [{
      name: 'test',
    }]
  }

  onActionClicked() {
    this.close();
  }

  close() {
  }

}
