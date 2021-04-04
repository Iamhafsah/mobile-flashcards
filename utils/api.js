import AsyncStorage from '@react-native-async-storage/async-storage';
import {decks} from './helpers'


const DECK_STORAGE_KEY = 'flashcards'

AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))

const getDecks = ()=> {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then(deck=> {
      const newDecks = JSON.parse(deck)
       return console.log(newDecks)
    })
}


// export const addNewDeck = async(decks) => {
//     try{
//         const jsonDecks = JSON.stringify(decks)
//         await AsyncStorage.setItem(DECK_STORAGE_KEY, jsonDecks)
//     }catch(e){
//         console.log(e)
//     }
//     console.log('done')
// }

