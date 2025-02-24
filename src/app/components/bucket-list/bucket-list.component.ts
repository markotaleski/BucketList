import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BucketService, Bucket } from '../../services/bucket.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class BucketListComponent {
  buckets: Bucket[] = [];

  constructor(private router: Router, private bucketService: BucketService) {}

  ngOnInit(): void {
    this.buckets = this.bucketService.getBuckets();
  }

  goToCreateBucket() {
    this.router.navigate(['/create']);
  }

  viewBucket(bucketName: string) {
    this.router.navigate(['/bucket', bucketName]);
  }
}
