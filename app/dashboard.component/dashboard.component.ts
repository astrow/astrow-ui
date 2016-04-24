import { Component, Input } from "angular2/core";
import { StrokeGraphComponent } from '../stroke-graph.component/stroke-graph.component';
import { SessionService } from "../session.service/session.service"

@Component({
    selector: "dashboard",
    templateUrl: "app/dashboard.component/dashboard.component.html",
    directives: [StrokeGraphComponent],
    styleUrls: ["app/dashboard.component/dashboard.component.css"]
})
export class DashboardComponent {

    @Input() public rower: any;

    constructor(private sessionService: SessionService) {
        
    }

}

