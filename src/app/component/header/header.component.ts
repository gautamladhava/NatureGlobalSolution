import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  togglemenu() {
    document.body.classList.toggle("change")
  }
  closemenu() {
    document.body.classList.remove("change")
  }


  openmenu() {
    let openmenu_content: any = document.getElementById("open_menu");
    openmenu_content.style.display = "block"
   
  }
  // openmenu() {
  //   let openmenu_content: any = document.getElementById("open_menu");
  // let displaystyle =  openmenu_content.style.display
  // console.log(displaystyle)
  //   if(displaystyle == 'none'){
  //     // openmenu_content.style.display == "block"
  //     console.log("sdfh")

  //   }
  // }
  @HostListener('window:click')
  onClick(e: any) {
    let openmenu_content: any = document.getElementById("open_menu");
    if (!openmenu_content) {
      openmenu_content.style.display = 'none';
    }
  }
  @HostListener('window:mouseup')
  onMouseUp() {
    let openmenu_content: any = document.getElementById("open_menu");
    if (!openmenu_content) {
      openmenu_content.style.display = 'none';
    }
  }

}
