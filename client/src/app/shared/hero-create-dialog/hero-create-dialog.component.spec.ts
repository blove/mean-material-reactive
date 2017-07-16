import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCreateDialogComponent } from './hero-create-dialog.component';

describe('HeroCreateDialogComponent', () => {
  let component: HeroCreateDialogComponent;
  let fixture: ComponentFixture<HeroCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
