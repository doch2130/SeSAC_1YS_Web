import { IDate } from '../global/global';

const initState = [
    {id: 1, date: '2022-11-29'},
    {id: 2, date: '2022-11-30'},
    {id: 3, date: '2022-12-01'},
    {id: 4, date: '2022-12-02'},
    {id: 5, date: '2022-12-03'}
];

interface action {
    id: number;
    type: string;
    payload: IDate;
}

const dateReducer = (state = initState, action:action) => {
    if ( action.type === 'DAY/WRITE' ) {
        state = [...state, action.payload ];
    } else if ( action.type === 'DAY/DELETE' ) {
        state = state.filter((day) => day.id != action.id );
    }

    return state;
}
export default dateReducer;