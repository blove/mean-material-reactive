import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { Hero } from "../../models/hero";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.scss']
})
export class HerosListComponent {

  @Input() public heros: Hero[] = [];

}
