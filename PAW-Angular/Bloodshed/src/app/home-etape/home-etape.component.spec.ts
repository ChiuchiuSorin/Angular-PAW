import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEtapeComponent } from './home-etape.component';

describe('HomeEtapeComponent', () => {
  let component: HomeEtapeComponent;
  let fixture: ComponentFixture<HomeEtapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEtapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEtapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
