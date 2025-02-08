<template>
  <component :is="tag" :class="classes" :style="{ '--font-size': sizeOfFont, '--font-weight': fontWeight }">
    <slot></slot>
    {{size}}
  </component>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { textTags, fontWeight } from '~/components/elements/text/types';
// import FontSize from '~/components/foundation/FontSize';
import FontSize from '~/components/elements/text/types';

const props = defineProps({
  /**
   * Define the font size of the text as defined in the design
   * @type { 'p' | 'div' | 'span' }
   * */
  tag: {
    type: String as PropType<textTags>,
    default: 'p',
  },

  /**
   * Define the font size of the text as defined in the design
   * @type {'base' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'}
   * */
  size: {
    type: String as PropType<keyof typeof FontSize>,
    default: 'base',
  },

  /**
   * Define the font weight of the text as defined in the design
   * @type {'regular' | 'medium' | 'semibold' | 'bold' | 'extra-bold'}
   * */

  fontWeight: {
    type: String as PropType<fontWeight>,
    default: 'regular', // Standardwert
  },
});

// Berechne die Schriftgröße basierend auf der `size`-Prop
const sizeOfFont = computed(() => FontSize[props.size]);

// Verwende die `fontWeight`-Prop direkt als reaktive Variable
const fontWeight = computed(() => props.fontWeight);

const classes = computed(()=> {
  return {
    paragraph: true,
    [`font-size--${props.size}`]: props.size,
  }
})
</script>

<style scoped lang="scss">
p,
span,
div,
.paragraph {
  display: block;
  margin: 0;
  padding: 0;
  font-size: var(--font-size, var(--font-size-m)); // Fallback auf 'm'
  font-weight: var(--font-weight, var(--font-weight-regular)); // Fallback auf 'regular'
  line-height: inherit;
  color: inherit;
  text-transform: inherit;
  text-align: inherit;
  line-height: calc(var(--font-size) * 1.1);

  &:last-child {
    margin-bottom: 0;
  }
}
</style>