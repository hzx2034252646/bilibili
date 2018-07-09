import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  tid: 0,
  search: {
    result: [],
    history: [],
    page: 1,
    keyword: '',
    input: '',
    visible: true
  },
  video: {},
  comment: {},
  part: 1,
  play_history: []
}

const mutations = {
  SET_TID (state, tid) {
    state.tid = tid
  },
  SET_SEARCH_RESULT (state, result) {
    state.search.result = result
  },
  SET_SEARCH_INPUT (state, input) {
    state.search.input = input
  },
  SET_VIDEO (state, video) {
    state.video = video
  },
  SET_SEARCH_VISIBLE (state, visible) {
    state.search.visible = visible
  },
  SET_SEARCH_HISTORY (state, history) {
    state.search.history = history
  },
  SET_PLAY_HISTORY (state, history) {
    state.play_history = history
  },
  SET_PART (state, part) {
    state.part = part
  },
  SET_COMMENT (state, comment) {
    state.comment = comment
  }
}

const actions = {
  GET_SEARCH_DATA ({ state }, { keyword, page }) {
    Vue.http.get('/', {
      params: {
        get: 'search',
        keyword,
        page
      }
    }).then(res => {
      let arr = state.search.result
      let data = res.data.data.items.archive || []
      data.forEach(item => {
        arr.push(item)
      })
      state.search.result = arr
    })
  },
  SET_SEARCH_HISTORY ({ state }, keyword) {
    let arr = []
    if (localStorage.getItem('search')) {
      arr = JSON.parse(localStorage.getItem('search'))
    }
    let index = arr.findIndex(item => item === keyword)
    if (index > -1) {
      arr.splice(index, 1)
    }
    if (arr.length === 6) {
      arr.pop()
    }
    arr.unshift(keyword)
    state.search.history = arr
    localStorage.setItem('search', JSON.stringify(arr))
  },
  SET_PLAY_HISTORY ({ state }, json) {
    let arr = []
    if (localStorage.getItem('play_history')) {
      arr = JSON.parse(localStorage.getItem('play_history'))
    }
    let index = arr.findIndex(item => item.aid === json.aid)
    if (index > -1) {
      arr.splice(index, 1)
    }
    arr.unshift({
      aid: json.aid,
      title: json.title,
      pic: json.pic,
      time: new Date().getTime()
    })
    state.play_history = arr
    localStorage.setItem('play_history', JSON.stringify(arr))
  },
  SEARCH ({ state, dispatch }, keyword) {
    state.search.page = 1
    state.search.result = []
    state.search.input = keyword
    state.search.keyword = keyword
    state.search.visible = false
    dispatch('SET_SEARCH_HISTORY', keyword)
    dispatch('GET_SEARCH_DATA', {
      keyword,
      page: 1
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
