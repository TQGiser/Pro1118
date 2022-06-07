import { createStore } from 'vuex'
const veux_state = { value1: '', value2: '' }
const actions = {}
const mutations = {
    giv(veux_state, value) {
        veux_state.value1 = value
        veux_state.value2 = value + value
    }
}
const store = createStore({
    veux_state,
    actions,
    mutations
})
export default store