import {RECEIVE_DECKS, ADD_DECK, ADD_CARD} from '../actions'

const deckReducer =(state={}, action)=> {
    const {deck} = action
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
        default: return state
    }
}

export default deckReducer