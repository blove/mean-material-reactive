import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MdDialogRef } from "@angular/material";
import { Store } from "@ngrx/store";
import { State } from "../../app.reducers";
import { CreateHeroAction } from "../../heros/heros.actions";
import { Hero } from "../../models/hero";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-create-dialog.component.html',
  styleUrls: ['./hero-create-dialog.component.scss']
})
export class HeroCreateDialogComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mdDialogRef: MdDialogRef<HeroCreateDialogComponent>,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ["", Validators.required]
    });
  }

  public submit() {
    const hero: Hero = this.form.value;
    this.store.dispatch(new CreateHeroAction({ hero: hero }));
    this.mdDialogRef.close();
  }

}
