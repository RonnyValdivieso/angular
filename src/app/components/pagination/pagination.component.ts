import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LeadService } from 'src/app/services/lead/lead.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
  page: number = 1;
  totalDocs: number = 100;
  itemsPerPage : number = 3;
  data: any = [];
  loading:boolean = false;

  constructor(private leadService: LeadService) {
    this.getLeadsByPage(this.page);
  }

  getLeadsByPage(page: number) {
    // debugger;
    const params = {
      form_id: "5c522b9b574d787302579594",
      page: page,
      type: "all",
      filter: "all"
    };
    // this.page = page;
    this.leadService.getLeadsByPage(params)
      .subscribe((response:any) => {
        this.data = response.data;
        this.page = response.page;
        this.totalDocs = response.totalDocs;
        this.loading = true;
      });
  }

  ngOnInit() {
    
  }

}
