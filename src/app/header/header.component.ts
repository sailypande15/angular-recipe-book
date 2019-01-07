import { Component,EventEmitter,Output } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    @Output('featureEvent') featureEvent = new EventEmitter<String>()
    onselectEvent(selectedVal){
            this.featureEvent.emit(selectedVal)
    }
}