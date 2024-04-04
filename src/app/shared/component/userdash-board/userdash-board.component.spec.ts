import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashBoardComponent } from './userdash-board.component';

describe('UserdashBoardComponent', () => {
  let component: UserdashBoardComponent;
  let fixture: ComponentFixture<UserdashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
