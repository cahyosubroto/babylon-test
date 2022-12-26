import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/babylon-test/markdown-page',
    component: ComponentCreator('/babylon-test/markdown-page', '4ac'),
    exact: true
  },
  {
    path: '/babylon-test/my-markdown-page',
    component: ComponentCreator('/babylon-test/my-markdown-page', '054'),
    exact: true
  },
  {
    path: '/babylon-test/my-react-page',
    component: ComponentCreator('/babylon-test/my-react-page', '5f9'),
    exact: true
  },
  {
    path: '/babylon-test/',
    component: ComponentCreator('/babylon-test/', 'dcc'),
    routes: [
      {
        path: '/babylon-test/',
        component: ComponentCreator('/babylon-test/', '195'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/babylon-test/chainbuilding',
        component: ComponentCreator('/babylon-test/chainbuilding', 'd9f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/babylon-test/error',
        component: ComponentCreator('/babylon-test/error', 'fe3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/babylon-test/installation',
        component: ComponentCreator('/babylon-test/installation', '946'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/babylon-test/introduction',
        component: ComponentCreator('/babylon-test/introduction', 'b20'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
