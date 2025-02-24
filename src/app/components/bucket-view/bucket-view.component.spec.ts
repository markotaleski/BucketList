import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketViewComponent } from './bucket-view.component';

describe('BucketViewComponent', () => {
  let component: BucketViewComponent;
  let fixture: ComponentFixture<BucketViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BucketViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BucketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
