import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdviceComponent } from './home-advice.component';

describe('HomeAdviceComponent', () => {
  let component: HomeAdviceComponent;
  let fixture: ComponentFixture<HomeAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
