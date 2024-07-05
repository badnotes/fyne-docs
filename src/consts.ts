export const SITE = {
  title: 'Fyne-docs',
  description: 'Cross platform GUI toolkit in Go inspired by Material Design.',
  defaultLanguage: 'en-us'
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'default-og-image.png',
    alt:
      'Cross platform GUI toolkit in Go inspired by Material Design, ' +
      'Quality and Design, Simple Development, We Love Usability, Easy to install.'
  },
  twitter: 'x'
}

export const KNOWN_LANGUAGES = {
  Deutsch: 'de',
  English: 'en',
  中文: 'zh'
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const EDIT_URL = `https://github.com/badnotes/fyne-docs/tree/main`

export const COMMUNITY_INVITE_URL = `https://github.com/badnotes/fyne-docs`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'fyne-docs',
  appId: 'TZC6S8RUV8',
  apiKey: 'b5304cdbe7ed2cced201a93a9063b18d'
}

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>
export const SIDEBAR: Sidebar = {
  de: {
    Überschrift: [
      { text: 'Einführung', link: 'de/introduction' },
    ],
  },
  en: {
    'Getting Started': [
      { text: 'Introduction', link: 'en/introduction' },
      { text: 'Getting Started', link: 'en/fyne-started-getting-started' },
      { text: 'Creating your first Fyne app', link: 'en/fyne-started-creating-your-first-fyne-app' },
      { text: 'Run Fyne Demo', link: 'en/fyne-started-run-fyne-demo' },
      { text: 'Application and RunLoop', link: 'en/fyne-started-application-and-runloop' },
      { text: 'Updating Content in your GUI', link: 'en/fyne-started-updating-content-in-your-gui' },
      { text: 'Window Handling', link: 'en/fyne-started-window-handling' },
      { text: 'Testing Graphical Apps', link: 'en/fyne-started-testing-graphical-apps' },
      { text: 'Packaging for Desktop', link: 'en/fyne-started-packaging-for-desktop' },
      { text: 'Mobile Packaging', link: 'en/fyne-started-mobile-packaging' },
      { text: 'Run in a Browser', link: 'en/fyne-started-run-in-a-browser' },
      { text: 'App Metadata', link: 'en/fyne-started-app-metadata' },
      { text: 'Distributing to App Stores', link: 'en/fyne-started-distributing-to-app-stores' },
      { text: 'Compiling for different platforms', link: 'en/fyne-started-compiling-for-different-platforms' },
    ],
    'Exploring Fyne': [
      { text: 'Canvas and CanvasObject', link: 'en/fyne-explore-canvas-and-canvas-object' },
      { text: 'Container and Layouts', link: 'en/fyne-explore-container-and-layouts' },
      { text: 'Widget List', link: 'en/fyne-explore-widgets-list' },
      { text: 'Layout List', link: 'en/fyne-explore-layouts-list' },
      { text: 'Dialog List', link: 'en/fyne-explore-dialogs-list' },
      { text: 'Theme Icons', link: 'en/fyne-explore-theme-icons' },
      { text: 'Adding Shortcuts to an App', link: 'en/fyne-explore-adding-shortcuts-to-an-app' },
      { text: 'Using the Preferences API', link: 'en/fyne-explore-using-the-preferences-api' },
      { text: 'System Tray Menu', link: 'en/fyne-explore-system-tray-menu' },
      { text: 'Data Binding', link: 'en/fyne-explore-data-binding' },
      { text: 'Compile Options', link: 'en/fyne-explore-compiling-options' },
    ],
    'Drawing and Animation': [
      { text: 'Rectangle', link: 'en/fyne-canvas-rectangle' },
      { text: 'Text', link: 'en/fyne-canvas-text' },
      { text: 'Line', link: 'en/fyne-canvas-line' },
      { text: 'Circle', link: 'en/fyne-canvas-circle' },
      { text: 'Image', link: 'en/fyne-canvas-image' },
      { text: 'Raster', link: 'en/fyne-canvas-raster' },
      { text: 'Gradient', link: 'en/fyne-canvas-gradient' },
      { text: 'Animation', link: 'en/fyne-canvas-animation' },
    ],
    'Containers and Layout': [
      { text: 'Box', link: 'en/fyne-container-box' },
      { text: 'Grid', link: 'en/fyne-container-grid' },
      { text: 'Grid Wrap', link: 'en/fyne-container-gridwrap' },
      { text: 'Border', link: 'en/fyne-container-border' },
      { text: 'Form', link: 'en/fyne-container-form' },
      { text: 'Center', link: 'en/fyne-container-center' },
      { text: 'Max', link: 'en/fyne-container-max' },
      { text: 'AppTabs', link: 'en/fyne-container-apptabs' },
    ],
    'Widgets': [
      { text: 'Label', link: 'en/fyne-widget-label' },
      { text: 'Button', link: 'en/fyne-widget-button' },
      { text: 'Entry', link: 'en/fyne-widget-entry' },
      { text: 'Choices', link: 'en/fyne-widget-choices' },
      { text: 'Form', link: 'en/fyne-widget-form' },
      { text: 'ProgressBar', link: 'en/fyne-widget-progressbar' },
      { text: 'Toolbar', link: 'en/fyne-widget-toolbar' },
    ],
    'Collections': [
      { text: 'List', link: 'en/fyne-collection-list' },
      { text: 'Table', link: 'en/fyne-collection-table' },
      { text: 'Tree', link: 'en/fyne-collection-tree' },
    ],
    'Data Binding': [
      { text: 'Data Binding', link: 'en/fyne-data-binding-index' },
      { text: 'Binding Simple Widgets', link: 'en/fyne-data-binding-simple' },
      { text: 'Two-Way Binding', link: 'en/fyne-data-binding-twoway' },
      { text: 'Data Conversion', link: 'en/fyne-data-binding-conversion' },
      { text: 'List Data', link: 'en/fyne-data-binding-list' },
    ],
    'Extending Fyne': [
      { text: 'Building a Custom Layout', link: 'en/fyne-extend-custom-layout' },
      { text: 'Writing a Custom Widget', link: 'en/fyne-extend-custom-widget' },
      { text: 'Bundling resources', link: 'en/fyne-extend-bundle' },
      { text: 'Creating a Custom Theme', link: 'en/fyne-extend-custom-theme' },
      { text: 'Extending Widgets', link: 'en/fyne-extend-extending-widgets' },
      { text: 'Numerical Entry', link: 'en/fyne-extend-numerical-entry' },
    ],
    'Architecture': [
      { text: 'Geometry', link: 'en/fyne-architecture-geometry' },
      { text: 'Scaling', link: 'en/fyne-architecture-scaling' },
      { text: 'Widgets', link: 'en/fyne-architecture-widgets' },
      { text: 'Organisation and Packages', link: 'en/fyne-architecture-organisation' },
    ],
    'Frequently Asked Questions': [
      { text: 'Layout and Widget Size', link: 'en/fyne-faq-layout' },
      { text: 'Theme and Customisation', link: 'en/fyne-faq-theme' },
      { text: 'Troubleshooting', link: 'en/fyne-faq-troubleshoot' },
    ],
    // 'API Documentation': [{ text: 'Page 1', link: 'en/page-4' }],
  },
  zh: {
    '介绍Fyne': [
      { text: '介绍Fyne', link: 'zh/introduction' },
    ]
  }
}
