import { Component, Input } from 'angular2/core';
import { StrokeGraphComponent } from '../stroke-graph.component/stroke-graph.component';
import { SessionService } from '../session.service/session.service';

@Component({
    selector: 'rower',
    templateUrl: 'app/rower.component/rower.component.html',
    styleUrls: ['app/rower.component/rower.component.css']
})
export class RowerComponent {
    @Input() public rower: any;
    
    constructor(private sessionService: SessionService) {
    }
}
