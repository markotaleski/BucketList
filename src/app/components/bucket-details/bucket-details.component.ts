import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BucketService } from '../../services/bucket.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bucket-details',
  templateUrl: './bucket-details.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class BucketDetailsComponent {
  bucket: any;
  size: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bucketService: BucketService
  ) {
    const bucketName = this.route.snapshot.paramMap.get('name');
    this.bucket = this.bucketService.getBucket(bucketName || '');
    if (this.bucket) {
      this.size = this.bucketService.getBucketSize(this.bucket.name);
    }
  }

  deleteBucket() {
    if (confirm(`Are you sure you want to delete ${this.bucket.name}?`)) {
      this.bucketService.deleteBucket(this.bucket.name);
      this.router.navigate(['/']);
    }
  }

  goBack() {
    this.router.navigate(['/bucket', this.bucket.name]);
  }
}
