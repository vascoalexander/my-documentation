// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  grundlagenSidebar: [{type: 'autogenerated', dirName: "01-Grundlagen"}],
  entwicklungSidebar: [{type: 'autogenerated', dirName: "02-Entwicklung"}],
  sprachenSidebar: [{type: 'autogenerated', dirName: "03-Sprachen"}],
  frameworksSidebar: [{type: 'autogenerated', dirName: "04-Frameworks"}],
  webSidebar: [{type: 'autogenerated', dirName: "05-Web"}],
  infrastrukturSidebar: [{type: 'autogenerated', dirName: "06-Infrastruktur"}],
  resourcenSidebar: [{type: 'autogenerated', dirName: "07-Resourcen"}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
