/** A store for our redux application
 * A store is Single source of truth, meaning the entire applications STATE.
 * The global state of your application is stored in an object tree within a single store.
 * This makes it easy to create universal apps, as the state from your server can be serialized and hydrated into the client with no extra coding effort. A single state tree also makes it easier to debug or inspect an application; it also enables you to persist your app's state in development, for a faster development cycle.
 */

import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoAPI";
import { newsApi } from "../services/newsApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
});
