import { Component,  
  Input,  
  OnInit,  
  ViewChild,  
  ComponentFactoryResolver,  
  OnDestroy,  
  ViewContainerRef,
  ViewRef } from '@angular/core';
import{SearchComponent} from "./components/search/search.component"
import{ArtistItemComponent} from "./components/artist-item/artist-item.component"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  web:any;

  title = 'WebApplication';
  @ViewChild("viewContainerRef", { read: ViewContainerRef })
  VCR!: ViewContainerRef;
  sampleComponents = [  
    SearchComponent,  ArtistItemComponent
];  
@ViewChild('sample', {  
  read: ViewContainerRef  
}) sample!: ViewContainerRef;  
constructor(private componentFactoryResolver: ComponentFactoryResolver) {}  
ngOnInit() {    
}




}
