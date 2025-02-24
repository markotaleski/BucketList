import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BucketService } from '../../services/bucket.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bucket-view',
  templateUrl: './bucket-view.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class BucketViewComponent {
  bucket: any;
  selectedFile: File | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bucketService: BucketService
  ) {
    const bucketName = this.route.snapshot.paramMap.get('name');
    this.bucket = this.bucketService.getBucket(bucketName || '');
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.bucket && this.selectedFile) {
      this.bucketService.addFileToBucket(this.bucket.name, this.selectedFile);
      this.selectedFile = null;
    }
  }

  deleteFile(fileName: string) {
    if (this.bucket) {
      this.bucketService.deleteFileFromBucket(this.bucket.name, fileName);
    }
  }

  viewBucketDetails() {
    this.router.navigate(['/bucket', this.bucket.name, 'details']);
  }
}
