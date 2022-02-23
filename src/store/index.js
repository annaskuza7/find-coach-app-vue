import { createStore } from 'vuex';

import coachModule from './modules/coaches/coaches';
import requestsModule from './modules/requests/requests';
import authModule from './modules/auth/auth';

const store = createStore({
  modules: {
    coaches: coachModule,
    requests: requestsModule,
    auth: authModule,
  },
});

export default store;
