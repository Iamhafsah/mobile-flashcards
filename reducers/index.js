import {RECEIVE_DECKS, ADD_DECK, ADD_CARD, DELETE_DECK, DELETE_ALL} from '../actions'

const deckReducer =(state={}, action)=> {
    const {deck, title, card, deckTitle} = action
    switch(action.type){
        case RECEIVE_DECKS:
            return{
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return{
                ...state,
                [deck]:{
                    title: deck,
                    questions: []
                }
            }
        case ADD_CARD:
            return{
                ...state,
                [title]:{
                    ...state[title],
                    questions: state[title].questions.concat(card)
                }
            }
        case DELETE_DECK:
            return Object.keys(state).reduce((newState, key)=>{
                if (key !== deckTitle){
                    return{
                        ...newState,
                        [key]:state[key]
                    }
                }
                return newState
            }, {})
        case DELETE_ALL:
            return {}
        default: return state
    }
}

export default deckReducer