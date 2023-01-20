import { ComponentFixture, TestBed } from '@angular/core/testing';

import { livedashboardComponent } from './livedashboard.component';

describe('livedashboardComponent', () => {
  let component: livedashboardComponent;
  let fixture: ComponentFixture<livedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ livedashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(livedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
