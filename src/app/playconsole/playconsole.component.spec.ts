import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayconsoleComponent } from './playconsole.component';

describe('PlayconsoleComponent', () => {
  let component: PlayconsoleComponent;
  let fixture: ComponentFixture<PlayconsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayconsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayconsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
