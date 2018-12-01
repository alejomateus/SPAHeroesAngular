import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchheroeComponent } from './card-searchheroe.component';

describe('CardSearchheroeComponent', () => {
  let component: CardSearchheroeComponent;
  let fixture: ComponentFixture<CardSearchheroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSearchheroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSearchheroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
