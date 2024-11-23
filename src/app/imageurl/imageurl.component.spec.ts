import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageurlComponent } from './imageurl.component';

describe('ImageurlComponent', () => {
  let component: ImageurlComponent;
  let fixture: ComponentFixture<ImageurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageurlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
