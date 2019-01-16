import { Component, OnInit } from '@angular/core';
import { Language } from 'ngx-syntax-highlighter';

@Component({
  selector: 'app-creating-new-project',
  templateUrl: './creating-new-project.component.html',
  styleUrls: ['./creating-new-project.component.scss']
})
export class CreatingNewProjectComponent implements OnInit {
  languages = Language;
  generateProject = `# Navigate to the directory you wish to generate the project in
  > cd c:\\git
  > ng new MyAwesomeProject --routing=true --style=scss`;

  openProject = `# Navigate to project directory
  > cd MyAwesomeProject
    # Open project in VSCode.  You can do this through the menu too if you like.
  > code .`;

  runProject = `# Run ng serve in the terminal to see the fruits of your labor
  > ng serve`;

  generateCoreShared = `# Generate Core module
  > ng generate module core
    # Generate Shared module
  > ng generate module shared`;

  constructor() {}

  ngOnInit() {}
}
