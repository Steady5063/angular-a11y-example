import { Component, OnInit, ElementRef } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { CheckboxModule } from "primeng/checkbox";

@Component({
  selector: "app-keyboard-nav",
  templateUrl: "./keyboard-nav.component.html",
  styleUrls: ["./keyboard-nav.component.css"]
})
export class KeyboardNavComponent implements OnInit {
  constructor(
    private titleService: Title,
    private element: ElementRef
  ) {}

  ngOnInit() {
    this.titleService.setTitle("Keyboard Navigation");
    this.element.nativeElement.querySelector("h2").focus();
  }
}
