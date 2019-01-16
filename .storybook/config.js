import { configure, addDecorator } from '@storybook/angular';
import { configureViewport } from '@storybook/addon-viewport';
import { withOptions } from '@storybook/addon-options';
import { withTests } from '@storybook/addon-jest';
import results from '../jest-test-results.json';

addDecorator(withOptions({
  name: "DF-Components",
  url: 'https://cntfs.ssp.pmc.gov.au/DefaultCollection/DFC/_git/DF-Components',
  addonPanelInRight: true
}))

addDecorator(
  withTests({
    results,
    filesExt: '((\\.specs?)|(\\.tests?))?(\\.ts)?$',
  })
);

// automatically import all files ending in *.stories.ts
const req = require.context('../src/stories', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
configureViewport()