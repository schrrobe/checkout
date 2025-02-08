<template>

</template>

<script setup lang="ts">

</script>

<style lang="scss">
a,
button,
.button {
  position: relative;
  display: inline-block;
  overflow: visible;
  border: 0;
  border-radius: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  width: auto;
  align-self: baseline;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  background-color: transparent;
  background-image: none;
  color: inherit;
  text-decoration: none;
  text-align: inherit;
  text-transform: inherit;
  text-shadow: none;
  cursor: pointer;
  appearance: none;
  vertical-align: baseline;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;

  &:focus {
    outline: none;
  }
}

a {
  &:hover {
    color: var(--color-primary-dark);
  }
}

.button {

  .icon {
    top: -1px;
  }

  &.button--icon-right {
    .icon {
      margin-left: var(--space-xs);
    }
  }

  &.button--icon-left {
    .icon {
      margin-right: var(--space-xs);
    }
  }

  &.button--icon-only {
    height: var(--input-height);
    width: var(--input-height);
  }

  // =======================
  // Primary
  // =======================
  &.button--variant-primary {
    padding: var(--space-xs) var(--space-s);
    border: 1px solid transparent;
    color: var(--color-white);
    background-color: var(--color-primary);
    font-size: var(--font-size-s);
    font-family: var(--font-primary);
    font-weight: 600;
    line-height: var(--line-height-xl);
    text-decoration: none;
    text-align: center;
    letter-spacing: -.5px;
    cursor: pointer;

    &:hover {
      background-color: var(--color-primary-dark);
    }

    &:active {
      background-color: var(--color-primary-darker);
    }

    &:focus {
      outline: 3px solid var(--color-secondary-dark);
      outline-offset: 0;
    }

    .loading-spinner {
      top: -3px;
    }

    &.button--loading {
      height: var(--input-height);
    }

    &.button--icon-only {
      padding-inline: 0;
    }
  }

  // =======================
  // Primary Inverse
  // =======================
  &.button--variant-primary-inverse {
    @extend .button--variant-primary;
    background-color: var(--color-white);
    color: var(--color-orange-400);
    fill: var(--color-orange-400);

    &:hover {
      background-color: var(--color-white);
      color: var(--color-orange-600);
      fill: var(--color-orange-600);
    }

    .loading-spinner {
      .ls-bubble {
        background-color: var(--color-orange-400);
      }
    }
  }

  // =======================
  // Secondary
  // =======================
  &.button--variant-secondary {
    @extend .button--variant-primary;
    padding-block: 7px;
    background-color: var(--color-white);
    color: var(--color-orange-400);
    fill: var(--color-orange-400);
    border: 2px solid var(--color-orange-400);

    &:hover {
      background-color: var(--color-white);
      color: var(--color-orange-600);
      fill: var(--color-orange-600);
      border-color: var(--color-orange-600);
    }

    .loading-spinner {
      .ls-bubble {
        background-color: var(--color-orange-400);
      }
    }
  }

  // =======================
  // Secondary Inverse
  // =======================
  &.button--variant-secondary-inverse {
    @extend .button--variant-primary;
    padding-block: 7px;
    background-color: transparent;
    color: var(--color-white);
    fill: var(--color-white);
    border: 2px solid var(--color-white);

    &:hover {
      background-color: var(--color-white);
      color: var(--color-orange-600);
      fill: var(--color-orange-600);
      border-color: var(--color-white);
    }
  }

  // =======================
  // Filter
  // =======================
  &.button--variant-filter {
    @extend .button--variant-primary;
    padding-block: 7px;
    background-color: white;
    color: var(--color-shade-dark);
    fill: var(--color-shade-dark);
    border: 1px solid var(--color-shade);
    font-weight: var(--font-weight-regular);

    &:hover {
      background-color: #f6f6f6;
      border-color: var(--color-shade-dark);
    }
  }

  // =======================
  // Filter Active
  // =======================
  &.button--variant-filter-active {
    @extend .button--variant-filter;
    color: var(--color-black);
    fill: var(--color-black);

    &:hover {
      background-color: #f6f6f6;
      border-color: var(--color-shade-dark);
    }
  }

  // =======================
  // Link
  // =======================
  &.button--variant-link {
    color: var(--color-primary);
    fill: var(--color-primary);
  }

  // =======================
  // Disabled
  // =======================
  &.button--disabled {
    cursor: default;
    pointer-events: none;
    opacity: .4;
  }

  // =======================
  // Loading
  // =======================
  &.button--loading {
    pointer-events: none;
  }

  // =======================
  // Block
  // =======================
  &.button--block {
    display: block;
    width: 100%;
  }
}
</style>