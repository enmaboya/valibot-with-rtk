import { useGetSomeItemsQuery } from '../api';

export function useSomeItems() {
    const { isLoading, isFetching, data } = useGetSomeItemsQuery();

    return {
        isLoading,
        isFetching,
        data,
    };
}
