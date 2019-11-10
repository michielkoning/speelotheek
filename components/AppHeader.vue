<template>
  <header>
    <div class="header-wrapper">
      <skip-links />
      <mobile-navigation @toggleMenu="toggleMenu" />
      <nuxt-link class="logo-wrapper" to="/">
        <icon-logo class="logo" aria-hidden="true" width="156" height="88" />
        <span class="sr-only">{{ $t('address.companyName') }}</span>
      </nuxt-link>

      <icon-header-bow aria-hidden="true" class="header-bow" />

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
              <app-usps class="usps" />
            </div>
          </transition>
        </div>
      </transition>
    </div>
    <icon-triangle class="triangle" aria-hidden="true" />
  </header>
</template>

<script>
import SkipLinks from '@/components/SkipLinks.vue'
import MainNavigation from '@/components/MainNavigation.vue'
import AppUsps from '@/components/AppUsps.vue'
import MobileNavigation from '@/components/MobileNavigation.vue'
import IconLogo from '@/assets/icons/logo.svg'
import IconTriangle from '@/assets/icons/triangle.svg'
import IconHeaderBow from '@/assets/icons/header-bow.svg'

const bodyScrollLock = require('body-scroll-lock')

export default {
  components: {
    SkipLinks,
    MainNavigation,
    MobileNavigation,
    AppUsps,
    IconLogo,
    IconTriangle,
    IconHeaderBow
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
  background: var(--color-primary);
  position: relative;
  @media (--show-full-navigation) {
    background: linear-gradient(
      90deg,
      transparent 50%,
      var(--color-primary) 50%
    );

    &::after {
      position: absolute;
      display: block;
      content: '';
      width: 50%;
      right: 0;
      top: 0;
      height: 50%;
      background: var(--color-primary-dark);
    }
  }
}

.header-wrapper {
  display: flex;
  @mixin center;
}

.content {
  @mixin color-negative;
  padding: 5em var(--gutter) var(--gutter);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 100vh;

  @media (--show-full-navigation) {
    padding: 0 var(--gutter) 0 0;
    flex-direction: column;
    overflow: visible;
    transform: translateY(0);
    display: flex !important;
    align-items: flex-end;
    max-height: none;
    justify-content: space-around;
    flex: 1 0 auto;
    background: linear-gradient(
      var(--color-primary-dark) 50%,
      var(--color-primary) 50%
    );
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
    display: flex !important;
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

.triangle {
  display: none;
  @media (--viewport-lg) {
    display: block;
    position: absolute;
    left: 0;
    top: 20em;
    width: 10vw;
    height: auto;
  }
}

.header-bow {
  flex: 1 0 auto;
  fill: var(--color-primary);
  display: none;
  width: 15vw;
  max-width: 13em;
  @media (--show-full-navigation) {
    display: block;
  }
}
</style>
