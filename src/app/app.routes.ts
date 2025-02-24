import { Routes } from '@angular/router';
import { BucketListComponent } from './components/bucket-list/bucket-list.component';
import { CreateBucketComponent } from './components/create-bucket/create-bucket.component';
import { BucketViewComponent } from './components/bucket-view/bucket-view.component';
import { BucketDetailsComponent } from './components/bucket-details/bucket-details.component';

export const routes: Routes = [
  { path: '', component: BucketListComponent }, 
  { path: 'create-bucket', component: CreateBucketComponent }, 
  { path: 'bucket/:name', component: BucketViewComponent }, 
  { path: 'bucket/:name/details', component: BucketDetailsComponent } 
];