import { Component, provide } from "angular2/core";
import { SessionService } from "../session.service/session.service"
import { DashboardComponent } from "../dashboard.component/dashboard.component";
import { RowerListComponent } from "../rower-list.component/rower-list.component";

@Component({
    selector: "session",
    templateUrl: "app/session.component/session.component.html",
    directives: [DashboardComponent, RowerListComponent],
    providers: [SessionService],
    styleUrls:["app/session.component/session.component.css"]
})
export class SessionComponent {
    private socket;

    constructor(private sessionService: SessionService) {
    }
}

