import Text from './Text.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const meta: Meta<typeof Text> = {
    title: 'Elements/Text',
    component: Text,
    argTypes: {
        tag: {
            control: { type: 'select' },
            options: ['p', 'span', 'div'],
        },
        size: {
            control: { type: 'select' },
            options: ['base', 'xxs', 'xs', 's', 'm', 'l', 'xl',],
        },
        fontWeight: {
            control: { type: 'select' },
            options: ['regular', 'medium', 'semibold', 'bold', 'extra-bold'],
        },
    },
    args: {
        tag: 'p',
        size: 'base',
        fontWeight: 'regular',
    },
};

export default meta;

type Story = StoryObj<typeof Text>;

// Story mit allen Schriftgrößen
export const AllSizes: Story = {
    render: () => ({
        components: { Text },
        setup() {
            const sizes = meta.argTypes?.size?.options || [];
            return { sizes };
        },
        template: `
            <div class="story-grid">
                <div v-for="size in sizes" :key="size" class="story-item">
                    <Text :size="size" tag="p">
                        {{ size.toUpperCase() }}: ${loremIpsum}
                    </Text>
                </div>
            </div>
        `,
    }),
};

// Interaktive Story mit Controls
export const Playground: Story = {
    args: {
        tag: 'p',
        size: 'base',
        fontWeight: 'regular',
    },
    argTypes: {
        tag: { control: 'select', options: ['p', 'span', 'div'] },
        size: { control: 'select', options: meta.argTypes?.size?.options },
        fontWeight: { control: 'select', options: meta.argTypes?.fontWeight?.options },
    },
    render: (args) => ({
        components: { Text },
        setup() {
            return { args };
        },
        template: `
            <Text v-bind="args">
                ${loremIpsum}
            </Text>
        `,
    }),
};

// Styling für die Story-Darstellung
const style = `
.story-grid {
    display: grid;
    gap: 2rem;
    padding: 2rem;
}

.story-item {
    border-bottom: 1px solid #eee;
    padding-bottom: 2rem;
}
`;

// Füge CSS zur Storybook-Dokumentation hinzu
const styleTag = document.createElement('style');
styleTag.innerHTML = style;
document.head.appendChild(styleTag);