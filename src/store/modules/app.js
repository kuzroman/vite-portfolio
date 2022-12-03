import router from '~/router'

export default {
  namespaced: true,
  state: {
    isSiteFirstLoaded: true,
    isMenuNavigationOpened: false,
    hidePageControl: false,
    isActiveBurger: false,
    transitionDirection: '', // to-left || to-right
    isPageLoaderHide: false, // useful in develop mode
    navigation: []
  },
  getters: {
    isSiteFirstLoaded: (state) => state.isSiteFirstLoaded,
    isMenuNavigationOpened: (state) => state.isMenuNavigationOpened,
    isActiveBurger: (state) => state.isActiveBurger,
    transitionDirection: (state) => state.transitionDirection,
    hidePageControl: (state) => state.hidePageControl,
    isPageLoaderHide: (state) => state.isPageLoaderHide,
    navigation: (state) => state.navigation,
  },
  mutations: {
    // setIsSiteFirstLoaded(state, bool) {
    //   state.isSiteFirstLoaded = bool
    // },
    setIsMenuNavigation(state, bool) {
      state.isMenuNavigationOpened = bool
    },
    setHidePageControl(state, bool) {
      state.hidePageControl = bool
    },
    findDirection(state, route) {
      const { routes } = router?.options
      const currentIndex = routes.findIndex((x) => x.name === router.currentRoute.value.name)
      const goToIndex = routes.findIndex((x) => x.name === route.name)
      // console.log(currentIndex < goToIndex ? 'to-right' : 'to-left');
      return currentIndex < goToIndex ? 'to-right' : 'to-left'
    },
    setDirection(state, direction) {
      console.log('setDirection', direction);
      state.transitionDirection = direction
    },
    toPage(store, { route, direction }) {

      // console.log('direction', direction, this.commit('app/findDirection', route));

      this.commit('app/setIsMenuNavigation', false)
      this.commit('app/setHidePageControl', true)
      this.commit('app/setDirection',
          direction || this.commit('app/findDirection', route)
      )
      setTimeout(() => router.push(route), 600)
      setTimeout(() => this.commit('app/setHidePageControl', false), 900)
    },
    setIsPageLoaderHide(state, bool) {
      state.isPageLoaderHide = bool
    },
    setNavigation(state, arr) {
      const orderList = ['game','portfolio','about','contacts']
      state.navigation = orderList.map(name => arr.find(x=>x.name === name))
    },
  },
}
