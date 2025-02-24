import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BucketService } from '../../services/bucket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-bucket',
  templateUrl: './create-bucket.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CreateBucketComponent {
  bucketName: string = '';
  bucketLocation: string = 'Kranj';

  constructor(private router: Router, private bucketService: BucketService) {}

  createBucket() {
    if (this.bucketName && this.bucketLocation) {
      this.bucketService.createBucket(this.bucketName, this.bucketLocation);
      this.router.navigate(['/']);
    }
  }
}
