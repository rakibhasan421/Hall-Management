import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { HallManagementService } from '../hall-management.service';
import { ProvostInfo } from '../models/hallManagement';

@Component({
    selector: 'app-info-menu',
    templateUrl: './info-menu.component.html',
    styleUrls: ['./info-menu.component.css']
})
export class InfoMenuComponent implements OnInit {

    viewComponent = false

    provostInfo!: ProvostInfo

    constructor(private breakpointObserver: BreakpointObserver, private hallManagementService: HallManagementService) { }

    ngOnInit(): void {
        this.viewComponent = true
    }

}
