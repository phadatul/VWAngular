import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular ";
  title = "Welcome to Angular";
  arr = ["Apple", "mango", "Banana", "Orange", "Pineapple", "Pears"];
  loginFlag = false;
  count = 1;

  hello() {
    this.title = "You clicked button";
    console.log("hello world");
    if (this.loginFlag == false) {
      this.loginFlag = true;
    } else {
      this.loginFlag = false;
    }
  }
  bye() {
    console.log("hi this is from text box");
    this.name = "hi" + this.count;
    this.count++;
  }
}
