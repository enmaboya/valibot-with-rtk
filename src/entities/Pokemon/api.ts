import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { SomeItem } from './model';

type ResponseArray<T> = {
    results: T[],
    next: string,
    previous: string,
    count: number
}


type PaginatedResponse<T> = {
    results: T[],
    pagination: {
        next: string,
        previous: string,
        total: number
    }
}

const rootApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: () => ({}),
});

const apiWithTag = rootApi.enhanceEndpoints({ addTagTypes: ['pokemons'] });

export const pokemonApi = apiWithTag.injectEndpoints({
    endpoints: (builder) => ({
        getSomeItems: builder.query<PaginatedResponse<SomeItem>, void>({
            query: () => ({
                url: 'item',
            }),
            providesTags: ['pokemons'],
            transformResponse: (response: ResponseArray<SomeItem>) => {
                return {
                    results: response.results,
                    pagination: {
                        next: response.next,
                        previous: response.previous,
                        total: response.count
                    }
                }
            },
        }),
    }),
});

export const { useGetSomeItemsQuery } = pokemonApi;
