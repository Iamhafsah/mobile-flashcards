import AsyncStorage from '@react-native-async-storage/async-storage';
import {decks} from './helpers'

const decks = decks

const DECK_STORAGE_KEY = 'flashcards'

AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
export let jo = AsyncStorage.getItem(DECK_STORAGE_KEY)
console.log(jo);

// export const addNewDeck = async(decks) => {
//     try{
//         const jsonDecks = JSON.stringify(decks)
//         await AsyncStorage.setItem(DECK_STORAGE_KEY, jsonDecks)
//     }catch(e){
//         console.log(e)
//     }
//     console.log('done')
// }

