<template>
  <form data-netlify="true" action method="post" @submit="$emit('submit')">
    <slot />
    <error-message :error-message="errorMessage" />
    <app-button type="submit">
      {{ buttonTitle }}
    </app-button>
  </form>
</template>

<script>
import AppButton from '@/components/shared/AppButton.vue'
import ErrorMessage from '@/components/forms/ErrorMessage.vue'

export default {
  components: {
    AppButton,
    ErrorMessage
  },
  props: {
    buttonTitle: {
      type: String,
      required: true
    },
    errorMessage: {
      type: String,
      default: ''
    }
  }
}
</script>
