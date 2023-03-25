 import { IDiary } from '../global/global';

interface action {
    id: number;
    type: string;
    payload: IDiary;
}

const diaryReducer = (state:IDiary[] = [], action:action) => {
    if ( action.type === 'DIARY/WRITE' ) {
        state = [...state, action.payload ];
    } else if ( action.type === 'DIARY/DELETE' ) {
        state = state.filter((diary) => diary.id != action.id );
    }

    return state;
}
export default diaryReducer;