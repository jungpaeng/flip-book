import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/common/lib/style/GlobalStyle';

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

export const c = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
