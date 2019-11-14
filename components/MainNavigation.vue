<template>
  <nav aria-labelledby="menu-title">
    <h2 id="menu-title" class="sr-only" tabindex="-1">
      {{ $t('header.mainNavigation') }}
    </h2>
    <ul ref="menu">
      <li>
        <nuxt-link :to="localePath('index')">
          <span class="title">{{ $t('pages.home.menuTitle') }}</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('become-member')">
          <span class="title">lid worden</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('toys')">
          <span class="title">speelgoed</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('volunteers')">
          <span class="title">vrijwilligers</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('contact')">
          <span class="title">
            {{ $t('pages.contact.menuTitle') }}
          </span>
        </nuxt-link>
      </li>
      <nuxt-link :to="switchLocalePath('en')">
        EN
      </nuxt-link>
      <nuxt-link :to="switchLocalePath('nl')">
        NL
      </nuxt-link>
    </ul>
    <div
      class="arrow"
      :class="{ active: mounted }"
      :style="{ transform: arrowPosition, width: arrowWidth }"
    />
  </nav>
</template>

<script>
export default {
  data () {
    return {
      arrowPosition: 0,
      arrowWidth: 0,
      mounted: false
    }
  },

  watch: {
    $route () {
      this.$nextTick(() => {
        this.setArrowPosition()
      })
    }
  },
  mounted () {
    this.setArrowPosition()
    setTimeout(() => {
      this.mounted = true
    }, 0)
  },
  methods: {
    setArrowPosition () {
      const activeLink = this.$refs.menu.querySelector(
        '.nuxt-link-active[aria-haspopup=true], .nuxt-link-exact-active'
      )
      if (activeLink) {
        this.arrowPosition = `translateX(${activeLink.parentElement.offsetLeft}px)`
        this.arrowWidth = `${activeLink.offsetWidth}px`
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
nav {
  position: relative;
}

ul {
  @mixin list-reset;

  border-top: 1px dashed var(--color-gray);

  @media (--show-full-navigation) {
    display: flex;
    border-top: 0;
    justify-content: space-between;
  }
}

.title {
  transition: box-shadow 0.1s ease-out;
  &.link-active {
    box-shadow: 0 2px 0 0 var(--color-primary);
  }
}

@media (--show-full-navigation) {
  li + li {
    margin-left: 1em;
  }
}

a {
  @mixin link-reset;

  align-items: center;
  display: flex;
  position: relative;
  text-decoration: none;
  line-height: 1.1;
  padding: 0.45em 0;
  border-bottom: 1px dashed var(--color-gray);

  &:hover {
    text-decoration: none;
    & .title {
      box-shadow: 0 3px 0 0 var(--color-primary);
    }
  }
  @media (--show-full-navigation) {
    border-bottom: 0;
    padding: 0.25em 0;
  }
}

.arrow {
  height: 2px;
  background: currentColor;
  display: none;

  @media (--show-full-navigation) {
    display: block;
  }
  &.active {
    transition: all 0.2s ease-out;
  }
}
</style>
