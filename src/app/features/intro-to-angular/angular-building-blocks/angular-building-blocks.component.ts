import { Component, OnInit } from '@angular/core';
import { SyntaxStyle } from 'ngx-syntax-highlighter';

@Component({
  selector: 'app-angular-building-blocks',
  templateUrl: './angular-building-blocks.component.html',
  styleUrls: ['./angular-building-blocks.component.scss']
})
export class AngularBuildingBlocksComponent implements OnInit {
  styles = SyntaxStyle;
  typescript = `class MyClass {
    public static myValue: string;
    constructor(init: string) {
      this.myValue = init;
    }
  }
  import fs = require("fs");
  module MyModule {
    export interface MyInterface extends Other {
      myProperty: any;
    }
  }
  declare magicNumber number;
  myArray.forEach(() => { }); // fat arrow syntax
  `;

  constructor() {}

  ngOnInit() {}
}
