import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGFORComponent } from './ngfor.component';

describe('NGFORComponent', () => {
  let component: NGFORComponent;
  let fixture: ComponentFixture<NGFORComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NGFORComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NGFORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
