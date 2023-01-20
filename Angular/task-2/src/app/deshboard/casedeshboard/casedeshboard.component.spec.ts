import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasedeshboardComponent } from './casedeshboard.component';

describe('CasedeshboardComponent', () => {
  let component: CasedeshboardComponent;
  let fixture: ComponentFixture<CasedeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasedeshboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasedeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
