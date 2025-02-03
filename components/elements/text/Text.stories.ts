import Text from './Text.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

// Lorem Ipsum Text
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const meta: Meta<typeof Text> = {
    title: 'Components/Text',
    component: Text,
    argTypes: {
        tag: {
            control: { type: 'select' },
            options: ['p', 'span', 'div'],
        },
        size: {
            control: { type: 'select' },
            options: ['base', 'xxs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl', '10xl', '11xl'],
        },
        fontWeight: {
            control: { type: 'select' },
            options: ['inherit', 'light', 'regular', 'bold', 'extra-bold'],
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

// Standard-Story
export const Default: Story = {
    args: {
        tag: 'p',
        size: 'base',
        fontWeight: 'regular',
    },
    render: (args) => ({
        components: { Text },
        setup() {
            return { args };
        },
        template: `<Text v-bind="args">${loremIpsum}</Text>`,
    }),
};

// Story für eine Überschrift mit großer Schriftgröße und fettem Text
export const LargeBoldText: Story = {
    args: {
        tag: 'p',
        size: '3xl',
        fontWeight: 'bold',
    },
    render: (args) => ({
        components: { Text },
        setup() {
            return { args };
        },
        template: `<Text v-bind="args">${loremIpsum}</Text>`,
    }),
};

// Story für einen Span mit kleiner Schriftgröße und leichtem Text
export const SmallLightText: Story = {
    args: {
        tag: 'span',
        size: 'xs',
        fontWeight: 'light',
    },
    render: (args) => ({
        components: { Text },
        setup() {
            return { args };
        },
        template: `<Text v-bind="args">${loremIpsum}</Text>`,
    }),
};

// Story für einen Div mit extra großer Schriftgröße und extra fettem Text
export const ExtraLargeExtraBoldText: Story = {
    args: {
        tag: 'div',
        size: '10xl',
        fontWeight: 'bold',
    },
    render: (args) => ({
        components: { Text },
        setup() {
            return { args };
        },
        template: `<Text v-bind="args">${loremIpsum}</Text>`,
    }),
};

// Story für einen Text mit geerbter Schriftstärke
export const InheritFontWeight: Story = {
    args: {
        tag: 'p',
        size: 'm',
        fontWeight: 'inherit',
    },
    render: (args) => ({
        components: { Text },
        setup() {
            return { args };
        },
        template: `<Text v-bind="args">${loremIpsum}</Text>`,
    }),
};