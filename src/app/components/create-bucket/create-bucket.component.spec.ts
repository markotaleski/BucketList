import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBucketComponent } from './create-bucket.component';

describe('CreateBucketComponent', () => {
  let component: CreateBucketComponent;
  let fixture: ComponentFixture<CreateBucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBucketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
