import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi } from '../entities/Pokemon/api';

const rootReducer = combineReducers({
    [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        pokemonApi.middleware,
    ]),
});

setupListeners(store.dispatch);
