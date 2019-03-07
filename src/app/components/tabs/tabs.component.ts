import { Component, ViewChild, OnInit, AfterContentChecked } from "@angular/core";
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-tabs',
	templateUrl: 'tabs.component.html'
})
export class TabsComponent implements OnInit, AfterContentChecked {
	@ViewChild('tabs') public tabs: NgbTabset;
	selectedTab = 'tab-selectbyid2';

	constructor() {}

	ngOnInit() {
		console.log(this.tabs);
	}

	ngAfterContentChecked() {
		this.tabs.activeId = this.selectedTab;
	}

}