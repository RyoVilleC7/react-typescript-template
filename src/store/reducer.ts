interface initialState {
    state: any;
}

type Action = {
    type: string;
}

//initialState
const initialState: initialState = {
    state: true,   //計算開始
}

//Reducer
export const Reducer = (state = initialState, action: Action)=>{
    switch(action.type){
    
        case 'ACTION':
            return {
                ...state,
                state: false
            }

        default:
            return state;
    }
}