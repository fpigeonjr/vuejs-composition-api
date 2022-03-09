import Vue from "vue"
// ref => 1, 'asf', boolean
//reactive => {}

interface State {
  test: string
}

class Store {
  private state: State

  constructor(initial: State) {
    this.state = Vue.reactive(initial)
  }

  getState() {
    return Vue.readonly(this.state)
  }

  updateTest(test: string) {
    this.state.test = test
  }
}

const store = new Store({
  test: "test"
})

store.getState().test
