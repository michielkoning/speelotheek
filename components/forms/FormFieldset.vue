<template>
  <fieldset>
    <legend>
      {{ title }}
    </legend>
    <div class="fields">
      <slot />
    </div>
  </fieldset>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
