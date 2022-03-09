import Vue from "vue"
import type { Post } from "./mocks"
// ref => 1, 'asf', boolean
//reactive => {}

interface State {
  posts: PostsState
}

//store.state.posts.ids
//store.state.posts.all[1]

interface PostsState {
  // o(n)
  ids: string[] // [1, 2, 3]
  // o(1)
  all: Map<string, Post> // {1 => {}}
  loaded: boolean
}
class Store {
  private state: State

  constructor(initial: State) {
    this.state = Vue.reactive(initial)
  }

  getState() {
    return Vue.readonly(this.state)
  }
}

const store = new Store({
  posts: {
    all: new Map(),
    ids: [],
    loaded: false
  }
})

store.getState().posts
