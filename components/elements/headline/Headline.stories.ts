import { Headline } from "C:/www/checkout/components/elements/headline/index"
import type { Meta, StoryObj } from '@storybook/vue3';

// Meta-Definition für Storybook
const meta: Meta<typeof Headline> = {
    title: 'Elements/Headline', // Titel der Story in der Storybook-UI
    component: Headline,
    argTypes: {
        tag: {
            control: { type: 'select' }, // Dropdown für die Auswahl des Tags
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], // Mögliche Werte für `tag`
        },
        size: {
            control: { type: 'select' }, // Dropdown für die Auswahl der Größe
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], // Mögliche Werte für `size`
        },
    },
    args: { // Standardwerte für die Props
        tag: 'h1',
        size: 'h1',
    },
};

export default meta;

// Story-Typdefinition
type Story = StoryObj<typeof Headline>;

// Standard-Story
export const Default: Story = {
    args: {
        tag: 'h1',
        size: 'h1',
    },
    render: (args) => ({
        components: { Headline },
        setup() {
            return { args };
        },
        template: '<Headline v-bind="args">This is a headline</Headline>',
    }),
};

// Story für eine H2-Überschrift
export const H2: Story = {
    args: {
        tag: 'h2',
        size: 'h2',
    },
    render: (args) => ({
        components: { Headline },
        setup() {
            return { args };
        },
        template: '<Headline v-bind="args">This is an H2 headline</Headline>',
    }),
};

// Story für eine H3-Überschrift
export const H3: Story = {
    args: {
        tag: 'h3',
        size: 'h3',
    },
    render: (args) => ({
        components: { Headline },
        setup() {
            return { args };
        },
        template: '<Headline v-bind="args">This is an H3 headline</Headline>',
    }),
};

// Story für eine H4-Überschrift
export const H4: Story = {
    args: {
        tag: 'h4',
        size: 'h4',
    },
    render: (args) => ({
        components: { Headline },
        setup() {
            return { args };
        },
        template: '<Headline v-bind="args">This is an H4 headline</Headline>',
    }),
};

// Story für eine H5-Überschrift
export const H5: Story = {
    args: {
        tag: 'h5',
        size: 'h5',
    },
    render: (args) => ({
        components: { Headline },
        setup() {
            return { args };
        },
        template: '<Headline v-bind="args">This is an H5 headline</Headline>',
    }),
};

// Story für eine H6-Überschrift
export const H6: Story = {
    args: {
        tag: 'h6',
        size: 'h6',
    },
    render: (args) => ({
        components: { Headline },
        setup() {
            return { args };
        },
        template: '<Headline v-bind="args">This is an H6 headline</Headline>',
    }),
};