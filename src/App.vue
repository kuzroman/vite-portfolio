<template>
  <div class="app">
<!--    <PageLoader v-if="!isPageLoaderHide" />-->
    <MenuNavigation />
    <IconBurger />
    <SoundBar />
    <ComeBack />

    <main class="content">

<!--      <router-view v-slot="{ Component }">-->
<!--        <transition name="fade">-->
<!--          <component :is="Component" :class="routeStyles"  />-->
<!--        </transition>-->
<!--      </router-view>-->

      <transition>
        <router-view :class="routeStyles"></router-view>
      </transition>

      <div class="content-arrow left" v-if="showArrow" :class="{ hide: isGameReady }">
        <a @click="toPage({ route: prevRoute, direction: 'to-left' })">
          <PageControl direction="left" :text="prevRoute?.name" />
        </a>
      </div>

      <div class="content-arrow right" v-if="showArrow" :class="{ hide: isGameReady }">
        <a @click="toPage({ route: nextRoute, direction: 'to-right' })">
          <PageControl direction="right" :text="nextRoute?.name" />
        </a>
      </div>
    </main>

  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import PageLoader from '~/components/PageLoader.vue'
import MenuNavigation from '~/components/MenuNavigation.vue'
import IconBurger from '~/components/IconBurger.vue'
import SoundBar from '~/components/SoundBar.vue'
import ComeBack from '~/components/ComeBack.vue'
import PageControl from '~/components/PageControl.vue'
// import router from '~/router/index'


export default {
  components: { PageLoader, IconBurger, ComeBack, MenuNavigation, PageControl, SoundBar },

  computed: {
    ...mapGetters('app', [
      'transitionDirection',
      'isSiteFirstLoaded',
      'isPageLoaderHide',
      'navigation',
    ]),

    ...mapGetters('game', ['isGameReady']),

    routes() {
      return this.navigation
    },
    routesLen() {
      return this.navigation.length
    },
    routeStyles() {
      let styles = []
      styles.push(this.transitionDirection)
      // if (this.isSiteFirstLoaded) {
      //   styles.push('first-loaded')
      // }
      return styles
    },
    currentPath() {
      return this.$route.path
    },
    currentRouteIndex() {
      return this.routes.findIndex((x) => x.path === this.currentPath)
    },
    showArrow () {
      return !this.$route.params.id
    },
    prevRoute() {
      return this.currentRouteIndex === 0
          ? this.routes[this.routesLen - 1]
          : this.routes[this.currentRouteIndex - 1]
    },
    nextRoute() {
      return this.currentRouteIndex === this.routesLen - 1
          ? this.routes[0]
          : this.routes[this.currentRouteIndex + 1]
    },
  },

  methods: {
    ...mapMutations('app', ['toPage', 'setNavigation']),
  },

  // hook for server & client!
  created() {
    let navigation = []
    this.$router.options.routes.forEach(x => {
      let split = x.name.split('-id')
      if (split[1] !== '') navigation.push(x)
    })
    this.setNavigation(navigation)
  }
}
</script>

<style lang="scss">
@import "./assets/styles/index.scss";

.app {
  height: 100%;

  .content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: $color-12;

    .view {
      width: 100vw;
      height: 100vh;
      padding: 0 15%;
      margin: auto;
      background: $color-9;
      position: absolute;
    }

    &-arrow {
      display: flex;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      height: 100%;

      @media (max-width: $mq-phone) {
        //z-index: $zIndex-1;
        display: none;
      }

      &.left {
        left: 2em;
        transform: translateX(0);
        transition: transform 0.3s;

        &.hide {
          transform: translateX(-10em);
        }
      }

      &.right {
        right: 2em;
        transform: translateX(0);
        transition: transform 0.3s;

        &.hide {
          transform: translateX(10em);
        }
      }
    }
  }

  $speed: .6s;

  .to-left {
    &.fade-leave-active {
      animation: rotateNextLeave $speed forwards;
    }

    &.fade-enter-active {
      animation: rotateNextEnter $speed forwards;
    }
  }

  .to-right {
    &.fade-leave-active {
      animation: rotatePrevLeave $speed forwards;
    }

    &.fade-enter-active {
      animation: rotatePrevEnter $speed forwards;
    }
  }

  .fade-leave-active {
    z-index: $zIndex-1;
    animation: rotateNextLeave $speed forwards;
  }

  .fade-enter-active {
    animation: rotateNextEnter $speed forwards;
  }

  //.first-loaded {
  //  &.fade-enter-active {
  //    animation: rotateNextEnter 0s forwards;
  //  }
  //}

  @keyframes rotateNextLeave {
    0% {
      left: 0;
      transform: rotateY(0deg);
    }
    100% {
      left: 50%;
      transform: perspective(100em) rotateY(90deg);
    }
  }

  @keyframes rotateNextEnter {
    0% {
      left: -100%;
    }
    100% {
      left: 0;
    }
  }

  @keyframes rotatePrevLeave {
    0% {
      left: 0;
      transform: rotateY(0deg);
    }
    100% {
      left: -50%;
      transform: perspective(100em) rotateY(270deg);
    }
  }

  @keyframes rotatePrevEnter {
    0% {
      left: 100%;
    }
    100% {
      left: 0;
    }
  }
}
</style>
