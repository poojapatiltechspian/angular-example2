import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Header',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [HeaderComponent],
      imports: [CommonModule],
    }),
  ],
};

export const HeaderContainer = () => ({
  component: HeaderComponent,
  template: `
  <app-header></app-header>`,

});
