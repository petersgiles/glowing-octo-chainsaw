import { configure, addDecorator } from '@storybook/angular';
import { configureViewport } from '@storybook/addon-viewport';
import { withOptions, Options } from '@storybook/addon-options';

addDecorator(withOptions({
  name: "DF-Components",
  url: 'https://cntfs.ssp.pmc.gov.au/DefaultCollection/DFC/_git/DF-Components',
  addonPanelInRight: true
}))

// automatically import all files ending in *.stories.ts
const req = require.context('../src/stories', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
configureViewport()