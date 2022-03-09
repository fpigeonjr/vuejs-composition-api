import { reactive, readonly } from "vue"
import axios from "axios"
import { type Post, today, thisWeek, thisMonth } from "./mocks"
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
    this.state = reactive(initial)
  }

  getState() {
    return readonly(this.state)
  }

  async fetchPosts() {
    const response = await axios.get<Post[]>("/posts")
    const postsState: PostsState = {
      ids: [],
      all: new Map(),
      loaded: true
    }
    for (const post of response.data) {
      postsState.ids.push(post.id)
      postsState.all.set(post.id, post)
    }
    this.state.posts = postsState
  }
}

const all = new Map<string, Post>()
all.set(today.id, today)
all.set(thisWeek.id, thisWeek)
all.set(thisMonth.id, thisMonth)

const store = new Store({
  posts: {
    all,
    ids: [today.id, thisWeek.id, thisMonth.id],
    loaded: false
  }
})

// use
// composables
// provide / inject
export function useStore() {
  return store
}

store.getState().posts
