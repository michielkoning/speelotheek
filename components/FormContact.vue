<template>
  <p v-if="submitted">
    {{ $t("form.forms.contact.success") }}
  </p>

  <app-form
    v-else
    action
    data-netlify="true"
    method="post"
    name="contact"
    button-title="Verzenden"
    :error-message="errorMessage"
    @submit.prevent="submit"
  >
    <form-fieldset :title="$t('form.forms.contact.title')">
      <form-input-text
        id="name"
        v-model.trim.lazy="$v.form.name.$model"
        type="text"
        name="name"
        :title="$t('form.fields.name')"
        :error-message="errorMessageName"
      />
      <form-input-text
        id="email"
        v-model.trim.lazy="$v.form.email.$model"
        name="email"
        type="email"
        :title="$t('form.fields.email')"
        :error-message="errorMessageEmail"
      />
      <form-textarea
        id="message"
        v-model.trim="form.message"
        name="message"
        rows="4"
        type="message"
        :title="$t('form.fields.message')"
      />
    </form-fieldset>
  </app-form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import axios from 'axios'
import FormFieldset from '@/components/forms/FormFieldset.vue'
import FormInputText from '@/components/forms/FormInputText.vue'
import FormTextarea from '@/components/forms/FormTextarea.vue'
import AppForm from '~/components/forms/AppForm.vue'

export default {
  components: {
    AppForm,
    FormFieldset,
    FormInputText,
    FormTextarea
  },
  data () {
    return {
      errorMessage: null,
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

        if (!this.$v.form.email.email) {
          return this.$t('form.errors.fields.email.invalidEmail')
        }
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
      this.errorMessage = ''
      if (this.validate()) {
        await axios.post(
          '/',
          this.encodeFormData({
            ...this.form
          }),
          {
            header: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }
        )
        this.submitted = true
      } else {
        this.errorMessage = 'Er ging iets mis bij het posten'
      }
    }
  }
}
</script>
