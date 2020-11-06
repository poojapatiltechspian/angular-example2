// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button data',
  component: ButtonComponent,
  argTypes: {
    props: {
          FormValue: 'value',
          disabledFlag: true,
          labelbutton: 'save'
    }
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Button = Template.bind({});
Button.args = {
  disabledFlag: true,
  labelbutton: 'Button',
};

export const Edit = Template.bind({});
Edit.args = {
  disabledFlag: true,
  labelbutton: 'Edit',
};

export const Delete = Template.bind({});
Delete.args = {
  disabledFlag: false,
  labelbutton: 'Delete',
};
