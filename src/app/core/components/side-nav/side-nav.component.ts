import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  sections = [
    {
      headerTitle: 'Getting Started',
      opened: true,
      routes: [
        { title: 'Intro', path: '/intro/getting-started' },
        {
          title: 'Who is the target audience?',
          path: '/intro/target-audience'
        },
        {
          title: 'Setting up your environment',
          path: '/intro/setting-up-environment'
        },
        {
          title: 'Angular building blocks',
          path: '/intro/angular-building-blocks'
        },
        { title: 'Angular Modules', path: '/intro/angular-modules' },
        { title: 'Why core module?', path: '/intro/why-core' },
        { title: 'Why shared module?', path: '/intro/why-shared' }
      ]
    },
    {
      headerTitle: 'Topics',
      opened: false,
      routes: [
        { title: 'Components', path: '' },
        { title: 'Services', path: '' },
        { title: 'Directives', path: '' },
        { title: 'Modules', path: '' },
        { title: 'Angular', path: '' }
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
