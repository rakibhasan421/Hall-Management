import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HallManagementService } from '../hall-management.service';
import { ProvostInfo } from '../models/hallManagement';

@Component({
    selector: 'app-current-provost-info',
    templateUrl: './current-provost-info.component.html',
    styleUrls: ['./current-provost-info.component.css']
})
export class CurrentProvostInfoComponent implements OnInit {
    // @Input()
    provostInfo!: ProvostInfo

    viewComponent = false
    constructor(private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService) { }

    ngOnInit(): void {

        this.currentProvost();
    }

    currentProvost() {
        this.hallManagementService.getProvostInfo().subscribe((provost) => {
            if (provost) {
                this.provostInfo = provost;
            }
            this.viewComponent = true
        })
    }
    isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
        map(result => result.matches),
        shareReplay()
    );
}
