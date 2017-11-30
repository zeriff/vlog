import { SETLOADING } from './types';

export const setLoading = (loading) => ({
    type: SETLOADING,
    payload: loading
});
