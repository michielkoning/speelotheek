<template>
  <header>
    <div class="header-wrapper">
      <skip-links />
      <mobile-navigation @toggleMenu="toggleMenu" />
      <nuxt-link class="logo-wrapper" to="/">
        <icon-logo class="logo" aria-hidden="true" width="156" height="88" />
        <span class="sr-only">{{ $t('address.companyName') }}</span>
      </nuxt-link>

      <transition
        name="fade2"
        @after-enter="afterEnter"
        @after-leave="afterLeave"
        @before-leave="beforeLeave"
      >
        <div v-show="showMenu" class="bg">
          <transition name="fade">
            <div v-show="showMenu" ref="bg" class="content">
              <main-navigation />
            </div>
          </transition>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
import SkipLinks from '@/components/SkipLinks.vue'
import MainNavigation from '@/components/MainNavigation.vue'
import MobileNavigation from '@/components/MobileNavigation.vue'
import IconLogo from '@/assets/icons/logo.svg'

const bodyScrollLock = require('body-scroll-lock')

export default {
  components: {
    SkipLinks,
    MainNavigation,
    MobileNavigation,
    IconLogo

  },
  data () {
    return {
      showMenu: false
    }
  },

  methods: {
    toggleMenu (status) {
      this.showMenu = status
    },
    afterEnter () {
      const bg = this.$refs.bg
      bodyScrollLock.disableBodyScroll(bg)
    },
    beforeLeave () {
      const bg = this.$refs.bg
      bg.scrollTop = 0
    },
    afterLeave () {
      const bg = this.$refs.bg
      bodyScrollLock.enableBodyScroll(bg)
    }
  }
}
</script>

<style lang="postcss" scoped>
header {
  @mixin color-negative;
}

.header-wrapper {
  @mixin center;
}

.content {
  padding: 5em var(--gutter) var(--gutter);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 100vh;

  @media (--show-full-navigation) {
    padding: 0 var(--gutter) 0 0;
    overflow: visible;
    transform: translateY(0);
    display: block !important;
    max-height: none;
  }
}

.usps {
  order: -1;
}

.logo-wrapper {
  @mixin link-reset;
  flex: 0 0 auto;
}

.bg {
  flex: 1 1 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  overflow: hidden;
  z-index: var(--main-navigation);
  padding: 0 env(safe-area-inset-right) 0 env(safe-area-inset-left);
  background: var(--color-primary);

  @media (--show-full-navigation) {
    height: auto;
    position: static;
    padding: 0;
    overflow: visible;
    display: block !important;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s 0.2s;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(-2em);
  opacity: 0;
}

.fade2-enter-active,
.fade2-leave-active {
  transition: transform 0.3s;
}

.fade2-enter,
.fade2-leave-to {
  transform: translateY(-100vh);
}

.logo-wrapper {
  align-self: center;
}

.logo {
  fill: var(--color-primary);
  display: none;
  @media (--show-full-navigation) {
    display: block;
  }
}

</style>
