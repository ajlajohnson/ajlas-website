import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutajlaComponent } from './aboutajla.component';

describe('AboutajlaComponent', () => {
  let component: AboutajlaComponent;
  let fixture: ComponentFixture<AboutajlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutajlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutajlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
