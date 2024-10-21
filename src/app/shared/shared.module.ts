import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";


@NgModule({
    declarations :[CardComponent],
/*     by exporting CardModule we are making available to all the components which are mentioned in the AppModule
 */    exports : [CardComponent]
})

export class SharedModule {}