import { Component } from 'angular2/core';
import { SessionService } from '../session.service/session.service';

@Component({
    selector: 'rower',
    templateUrl: 'app/rower.component/rower.component.html',
    styleUrls: ['app/rower.component/rower.component.css']
})
export class RowerComponent {
    
    constructor(private sessionService: SessionService) {
    }
}
