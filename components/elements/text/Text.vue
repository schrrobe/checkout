<template>
  <component :is="tag" :style="{ '--font-size': fontSize, '--font-weight': fontWeight }">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { textTags, fontWeight } from '~/components/elements/text/types';
import FontSize from '~/components/foundation/FontSize';

const props = defineProps({
  tag: {
    type: String as PropType<textTags>,
    default: 'p',
  },
  size: {
    type: String as PropType<keyof typeof FontSize>,
    default: 'base',
  },
  /**
   * Define the font weight of the headline as defined in the design
   * @type {'regular' | 'medium' | 'semibold' | 'bold' | 'extra-bold'}
   * */
  fontWeight: {
    type: String as PropType<fontWeight>,
    default: 'regular', // Standardwert
  },
});

// Berechne die Schriftgröße basierend auf der `size`-Prop
const fontSize = computed(() => FontSize[props.size]);

// Verwende die `fontWeight`-Prop direkt als reaktive Variable
const fontWeight = computed(() => props.fontWeight);
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

  &:last-child {
    margin-bottom: 0;
  }
}
</style>