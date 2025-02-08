import Headline from './Headline.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { HeadlineType } from '../../foundation';

const meta: Meta<typeof Headline> = {
    title: 'Typography/Headline',
    component: Headline,
    argTypes: {
        tag: {
            control: { type: 'select' },
            options: Object.values(HeadlineType),
        },
        size: {
            control: { type: 'select' },
            options: Object.values(HeadlineType),
        },
    },
    args: {
        tag: HeadlineType.H1,
        size: HeadlineType.H1,
    },
};

export default meta;
type Story = StoryObj<typeof Headline>;

// Story zur Darstellung aller Größen
export const AllSizes: Story = {
    render: () => ({
        components: { Headline },
        setup() {
            const sizes = Object.values(HeadlineType);
            return { sizes };
        },
        template: `
      <div class="headline-stories">
        <div v-for="size in sizes" :key="size" class="headline-story-item">
          <Headline :tag="size" :size="size">
            {{ size.toUpperCase() }} Headline
          </Headline>
          <p class="size-label">Size: {{ size }}</p>
        </div>
      </div>
    `,
    }),
};

// Interaktive Playground-Story
export const Playground: Story = {
    args: {
        tag: HeadlineType.H1,
        size: HeadlineType.H1,
    },
    render: (args) => ({
        components: { Headline },
        setup() {
            return { args };
        },
        template: `
      <Headline v-bind="args">
        {{ args.tag.toUpperCase() }} Headline with {{ args.size }} size
      </Headline>
    `,
    }),
};

// Styling für die Story-Darstellung
const style = `
.headline-stories {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
}

.headline-story-item {
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
  
  &:last-child {
    border-bottom: none;
  }
}

.size-label {
  margin-top: 0.5rem;
  font-size: 0.8em;
  color: #666;
}
`;

const styleTag = document.createElement('style');
styleTag.innerHTML = style;
document.head.appendChild(styleTag);