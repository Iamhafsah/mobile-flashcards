import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {decks} from '../utils/helpers'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

let title = 0

const Cards = () => {
    const [question, setQuestion] = useState(true)
    onClickButton = (prev)=> {
        setQuestion((prev)=>())
    }

    return (
        <View style={styles.container}>
           {/* {Object.values(decks).map((deck)=> deck.questions.map((card, i) => (
               <View key={i}>
                   <Text>{card.question}</Text>
                   <Text>{card.answer}</Text>
               </View>
           )))} */}

            {Object.values(decks)[title].questions.map((item, i)=> (
                <View key={i}>
                    <Text>{item.question}</Text>
                    <Text>{item.answer}</Text>
                </View>
            ))}
        </View>
    )
}

export default Cards

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        paddingTop: 30
    }
})
