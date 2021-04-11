export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const DELETE_DECK = 'DELETE_DECK'
export const DELETE_ALL = 'DELETE_ALL' ;

export function receiveDecks(decks){
    return{
        type: RECEIVE_DECKS,
       decks
    }
}

export function addDeck(deck){
    return{
        type: ADD_DECK,
        deck
    }
}

export function addCard(card, title){
    return{
        type: ADD_CARD,
        card,
        title
    }
}

export function deleteDeck(deckTitle){
    return{
        type: DELETE_DECK,
        deckTitle
    }
}

export function deleteAllDecks(){
    return{
        type: DELETE_DECK
    }
}