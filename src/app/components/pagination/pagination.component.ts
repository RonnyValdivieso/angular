import { Component, OnInit, ChangeDetectionStrategy, AfterContentInit } from '@angular/core';
import { LeadService } from 'src/app/services/lead/lead.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
  page: number = 0;
  totalDocs: number = 100;
  itemsPerPage : number = 3;
  data: any = [];
  loading:boolean = false;

  constructor(private leadService: LeadService) {
    console.log("Constructor");
  }

  getLeadsByPage(event: any) {
    // debugger;
    console.log(event);
    const params = {
      form_id: "5c522b9b574d787302579594",
      page: event.page + 1,
      type: "all",
      filter: "all"
    };
    
    this.leadService.getLeadsByPage(params)
      .subscribe((response:any) => {
        this.data = response.data;
        this.page = response.page;
        this.totalDocs = response.totalDocs;
        this.loading = true;
        console.log("Response");
      });
  }

  ngOnInit() {
    console.log("OnInit");
    console.log(this.data);
  }

  ngAfterContentInit() {
    this.getLeadsByPage({page:this.page});
    console.log("AfterContentInit");
    console.log(this.data);
  }

}
