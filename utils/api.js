import AsyncStorage from '@react-native-async-storage/async-storage';
// import {decks} from './helpers'


const DECK_KEY = 'Hafsah:flashcards'

// To return all decks
export const getDecks = async() => {
  const decks = await AsyncStorage.getItem(DECK_KEY)
  return JSON.parse(decks)
}

// To go to a single deck
export const getSingleDeck = async(key) => {
  const decks = await AsyncStorage.getItem(DECK_KEY)
  const data = JSON.parse(decks)
  return data[key]
}

// To delete a single deck
export const deleteDeck = async(key)=> {
  const decks = await AsyncStorage.getItem(DECK_KEY)
  const data = JSON.parse(decks)
  data[key] = undefined
  delete data[key]
  await AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
}

// To delete all decks
export const deleteAllDecks = async()=> {
  await AsyncStorage.clear()
}

// To save a new deck
export const saveDeck = async(deckTitle) => {
  await AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
    [deckTitle]:{
      title: deckTitle,
      question: []
    }
  }))
  return await getDecks()
}

// To add card to deck
export const addCard = async (deckTitle, card) => {
  const decks = await AsyncStorage.getItem(DECK_KEY)
  const data = JSON.parse(decks)
  data[deckTitle].questions.push(card)
  AsyncStorage.setItem(DECK_KEY, JSON.stringify(data));
}