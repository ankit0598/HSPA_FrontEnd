import { Component } from "@angular/core";




@Component({
    
    selector : 'app-property-card',
   // template : '<h1 style="text-align: center;">I am a card </h1>',

    
   templateUrl : 'property-card-component.html',
   styleUrl : 'property-card-component.css',

    standalone : true
}
)
export class PropertyCardComponent{

    Property : any = {
        "Id" : 1,
        "Name" : "Birla House",
        "Type" : "House",
        "Price" : 12000,
    }

}