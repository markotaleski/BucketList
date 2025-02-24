import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BucketListComponent } from './components/bucket-list/bucket-list.component';
import { CreateBucketComponent } from './components/create-bucket/create-bucket.component';
import { BucketViewComponent } from './components/bucket-view/bucket-view.component';
import { BucketDetailsComponent } from './components/bucket-details/bucket-details.component';

const routes: Routes = [
  { path: '', component: BucketListComponent },
  { path: 'create', component: CreateBucketComponent },
  { path: 'bucket/:name', component: BucketViewComponent },
  { path: 'bucket/:name/details', component: BucketDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
