import { createStore } from 'vuex';

import coachModule from './modules/coaches/coaches';
import requestshModule from './modules/requests/requests';

const store = createStore({
  modules: {
    coaches: coachModule,
    requests: requestshModule,
  },
  state() {
    return {
      userId: 'c1',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
