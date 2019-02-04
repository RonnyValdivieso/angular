import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'customDatePipe' })
export class CustomDateTime implements PipeTransform {
	transform(value: any, getDateTime: any): any {

		// 2019/01/20 9:40am
		
		let getTime = getDateTime.substr(11, 6);
		return value = getTime;
		
	}
}