import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LogoComponent } from "./logo/logo.component";
import { SideBarComponent } from "./side-bar/side-bar.component";

export const AllheaderComponents: any[] = [
 LogoComponent
];

export const layoutComponents: any[] = [
  ...AllheaderComponents,
  HeaderComponent,
  SideBarComponent,
  FooterComponent,
  
];
