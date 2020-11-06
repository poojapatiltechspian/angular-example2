// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { IndiviualProductCardComponent } from './indiviual-product-card.component';

const bookData = {
      id: '1',
      name: 'Wise and Otherwise: A salute to Life',
      display_name: 'Wise and Otherwise',
      author: 'Sudha Murty',
      price: '250',
      description: 'Understanding human and human nature is one of the toughest jobs .Many time what seems right and good or vice versa can be completely different if explored to proper depth. In many instance, we all come across people and forms an opinion about the people we meet without actually knowing anything about them. But hearing and learning about such instances helps us to redefine our thought process and become wiser. Sudha Murty’s book Wise and otherwise will take you to a journey across the length and breadth of India through narrations of 51 stories inspired by the extensive travels of the author herself.',
      img_path: 'assets/img/sudhamurti1.jpeg'
    };
const bookData2 = {
    id: 2,
    name: 'The Gopi Diaries',
    description: 'The Gopi Diaries is a series of three books for children about a dog called Gopi. Told in Gopi voice, the first book, Coming Home, begins with Gopi going to his new home, and tells the story of how he settles down with his loving, human family. How Gopi sees the world around him and what he thinks of the people in his life give the story a truly unique flavour. Written in Sudha Murty inimitable style, these are books children and adults will treasure as the simple stories talk of basic values even when told.',
    price: '390',
    quantity: '23',
    img_path: 'assets/img/sudhamurti2.jpeg'
  };

export default {
  title: 'Indiviual Card data',
  component: IndiviualProductCardComponent,
  argTypes: {
    props: {
      product: bookData,
    }
  },
} as Meta;

const Template: Story<IndiviualProductCardComponent> = (args: IndiviualProductCardComponent) => ({
  component: IndiviualProductCardComponent,
  props: args,
});

export const Indiviualcard1 = Template.bind({});
Indiviualcard1.args = {
  product: bookData,
};

export const Indiviualcard2 = Template.bind({});
Indiviualcard2.args = {
  product: bookData2,
};
