import { SETLOADING } from '../actions/types';

export default (state = false, action) => {
    switch (action.type) {
        case SETLOADING:
            return action.payload;
        default:
            return state;
    }
};
