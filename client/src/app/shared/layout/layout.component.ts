import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { go } from "@ngrx/router-store";
import { State, getShowSidenav } from "../../app.reducers";
import { CreateHeroDialogOpenAction } from "../../heros/heros.actions";
import { CloseSidenavAction, OpenSidenavAction } from "../../shared/shared.actions";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public open: Observable<boolean>;

  constructor(private store: Store<State>){}

  ngOnInit() {
    this.open = this.store.select(getShowSidenav);
  }

  public add() {
    this.store.dispatch(new CreateHeroDialogOpenAction());
  }

  public closeSidenav() {
    this.store.dispatch(new CloseSidenavAction());
  }

  public heros() {
    this.store.dispatch(go(["/heros"]));
  }

  public openSidenav() {
    this.store.dispatch(new OpenSidenavAction());
  }

}
