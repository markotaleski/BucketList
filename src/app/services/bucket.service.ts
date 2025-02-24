import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Bucket {
  name: string;
  location: string;
  files: any[];
}

@Injectable({
  providedIn: 'root'
})
export class BucketService {
  private buckets: Bucket[] = [];

  constructor(private http: HttpClient) {
    this.loadBuckets();
  }

  private loadBuckets(): void {
    this.http.get<Bucket[]>('assets/data/buckets.json')
      .subscribe(data => {
        this.buckets = data;
        console.log('Buckets loaded from JSON:', this.buckets);
      });
  }

  getBuckets(): Bucket[] {
    return this.buckets;
  }

  getBucket(name: string): Bucket | undefined {
    return this.buckets.find(bucket => bucket.name === name);
  }

  createBucket(name: string, location: string) {
    const newBucket: Bucket = { name, location, files: [] };
    this.buckets.push(newBucket);
  }

  addFileToBucket(bucketName: string, file: File) {
    const bucket = this.getBucket(bucketName);
    if (bucket) {
      bucket.files.push({ name: file.name, size: file.size, modified: new Date() });
    }
  }

  deleteFileFromBucket(bucketName: string, fileName: string) {
    const bucket = this.getBucket(bucketName);
    if (bucket) {
      bucket.files = bucket.files.filter(file => file.name !== fileName);
    }
  }

  deleteBucket(bucketName: string) {
    this.buckets = this.buckets.filter(bucket => bucket.name !== bucketName);
  }

  getBucketSize(bucketName: string): number {
    const bucket = this.getBucket(bucketName);
    return bucket ? bucket.files.reduce((total: number, file: any) => total + file.size, 0) : 0;
  }
}
