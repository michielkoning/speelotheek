<template>
  <p v-if="submitted">
    {{ $t('form.forms.contact.success') }}
  </p>

  <form
    v-else
    action
    data-netlify="true"
    method="post"
    name="contact"
    @submit.prevent="submit"
  >
    <input type="hidden" name="form-name" value="contact">
    <form-fieldset :title="$t('form.forms.contact.title')">
      <form-input-text
        v-model.trim.lazy="$v.form.name.$model"
        type="text"
        name="name"
        :title="$t('form.fields.name')"
        :error-message="errorMessageName"
      />
      <form-input-text
        v-model.trim.lazy="$v.form.email.$model"
        name="email"
        type="email"
        :title="$t('form.fields.email')"
        :error-message="errorMessageEmail"
      />
      <form-textarea
        v-model.trim="form.message"
        name="message"
        rows="4"
        type="message"
        :title="$t('form.fields.message')"
      />
      <button type="submit" class="btn">
        {{ $t('form.buttons.send') }}
      </button>
    </form-fieldset>
  </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import axios from 'axios'
import FormFieldset from '@/components/forms/FormFieldset.vue'
import FormInputText from '@/components/forms/FormInputText.vue'
import FormTextarea from '@/components/forms/FormTextarea.vue'

export default {
  components: {
    FormFieldset,
    FormInputText,
    FormTextarea
  },
  data () {
    return {
      submitted: false,
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email
      }
    }
  },
  computed: {
    errorMessageName () {
      if (this.$v.form.name.$anyError) {
        if (!this.$v.form.name.required) {
          return this.$t('form.errors.general.required', {
            field: this.$t('form.fields.name').toLowerCase()
          })
        }
      }
      return null
    },
    errorMessageEmail () {
      if (this.$v.form.email.$anyError) {
        if (!this.$v.form.email.required) {
          return this.$t('form.errors.general.required', {
            field: this.$t('form.fields.email').toLowerCase()
          })
        }

        if (!this.$v.form.email.email) { return this.$t('form.errors.fields.email.invalidEmail') }
      }
      return null
    }
  },
  methods: {
    encodeFormData (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    validate () {
      this.$v.$touch()
      return !this.$v.$invalid
    },
    async submit () {
      this.errorMessageForm = ''
      if (this.validate()) {
        await axios.post(
          '/',
          this.encodeFormData({
            'form-name': 'contact',
            ...this.form
          }),
          {
            header: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }
        )
        this.submitted = true
      }
    }
  }
}
</script>
