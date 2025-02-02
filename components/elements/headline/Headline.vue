
<template>
  <component
  :is="tag"
  :class="classes">
    <slot></slot>

  </component>

</template>

<script setup lang="ts">
import { HeadlineType } from '../../foundation';
import type {PropType} from "vue";
import {computed} from "vue";

const props = defineProps({
  tag: {
    type: String as PropType<HeadlineType>,
    default: HeadlineType.H1
  },
  size: {
    type: String as  PropType<HeadlineType>,
    default: HeadlineType.H1
  },
})

const classes = computed(()=>{
  return {
    headline: true,
    [`headline-size-${props.size}`]:props.size,

  }

})

</script>

<style scoped lang="scss">

h1,
h2,
h3,
h4,
h5,
h6,
.headline {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  font-family: var(--font-headline);
  font-weight: inherit;
  color: inherit;
  text-transform: inherit;
  text-align: inherit;

  &:last-child {
    margin-bottom: 0;
  }
  &.headline-size-h1 {
    font-size: var(--font-size-8xl);
    font-weight: 800;
  }
  &.headline-size-h2 {
    font-size: var(--font-size-6xl);
    font-weight: 600;
  }
  &.headline-size-h3 {
    font-size: var(--font-size-4xl);
    font-weight: 600;
  }
  &.headline-size-h4 {
    font-size: var(--font-size-2xl);
    font-weight: 500;
  }
  &.headline-size-h5 {
    font-size: var(--font-size-xl);
    font-weight: 500;
  }
  &.headline-size-h6 {
    font-size: var(--font-size-l);
    font-weight: 500;
  }
}

</style>