import { Component, provide } from "angular2/core";
import { SessionService } from "../session.service/session.service"

@Component({
    selector: "dashboard",
    templateUrl: "app/dashboard.component/dashboard.component.html",
    styleUrls: ["app/dashboard.component/dashboard.component.css"]
})
export class DashboardComponent {


    constructor(private sessionService: SessionService) {
        
    }

}

