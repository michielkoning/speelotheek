<template>
  <div>
    <h2>{{ $t('address.title') }}</h2>
    <address itemscope itemtype="http://schema.org/Organization">
      <p
        itemprop="address"
        itemscope
        itemtype="http://schema.org/PostalAddress"
      >
        <span class="text">
          <icon-building aria-hidden="true" width="20" height="20" />
          <span itemprop="name">{{ $t('address.companyName') }}</span>
          <br>
          <span itemprop="streetAddress">{{ $t('address.street') }}</span><br>
          <span itemprop="postal-code">{{ $t('address.zipcode') }}</span>,
          <span itemprop="locality">{{ $t('address.city') }}</span>,
          <span itemprop="country">{{ $t('address.country') }}</span>
        </span>
      </p>
      <p>
        <span class="text">
          <icon-envelope aria-hidden="true" width="20" height="20" />
          <a :href="`tel:${$t('address.phoneNumber')}`" itemprop="telephone">
            {{ $t('address.phoneNumber') }}
          </a>
        </span>
        <span class="text">
          <icon-phone aria-hidden="true" width="20" height="20" />
          <a
            :href="`mailto:${$t('address.email')}`"
            itemprop="email"
          >{{ $t('address.email') }}
          </a>
        </span>
      </p>
    </address>
  </div>
</template>
<script>
import IconEnvelope from '@/assets/icons/envelope.svg'
import IconPhone from '@/assets/icons/phone.svg'
import IconBuilding from '@/assets/icons/building.svg'

export default {
  components: {
    IconEnvelope,
    IconPhone,
    IconBuilding
  }
}
</script>

<style lang="postcss" scoped>
p {
  margin-bottom: 0.5em;
}

.text {
  position: relative;
  padding-left: 1.5em;
  display: block;
}

svg {
  position: absolute;
  left: 0;
  top: 0.25em;
}

a {
  word-wrap: break-word;
}
</style>
