import { Component, provide } from "angular2/core";
import { SessionComponent } from "../session.component/session.component";

@Component({
    selector: "app",
    templateUrl: "app/app.component/app.component.html",
    directives: [SessionComponent],
    styleUrls: ["app/app.component/app.component.css"],
})
export class AppComponent {}

