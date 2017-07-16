import { Action } from '@ngrx/store';

export const SIDENAV_CLOSE = '[shared] Close Sidenav';
export const SIDENAV_OPEN = '[shared] Open Sidenav';

export class CloseSidenavAction implements Action {
  readonly type = SIDENAV_CLOSE;
}

export class OpenSidenavAction implements Action {
  readonly type = SIDENAV_OPEN;
}

export type Actions =
  CloseSidenavAction
  | OpenSidenavAction;