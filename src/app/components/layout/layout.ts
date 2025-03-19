import { ContentSectionComponent } from "./content-section/content-section.component";
import { FooterSectionComponent } from "./footer-section/footer-section.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NavMenuBarComponent } from "./nav-menu-bar/nav-menu-bar.component";
import { NotificationBarComponent } from "./notification-bar/notification-bar.component";

export const layout: any[] = [
ContentSectionComponent,
NotificationBarComponent,
NavMenuBarComponent,
FooterSectionComponent,
HeaderComponent,
FooterComponent
    // NotificationBarComponent,
    // NavMenuBarComponent,
    // FooterSectionComponent,
   
    // HeaderComponent,
    // FooterComponent
]