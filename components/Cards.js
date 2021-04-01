import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {decks} from '../utils/helpers'

let title = 1

const Cards = () => {
    const [question, setQuestion] = useState(true)

    onClickButton = ()=> {
      setQuestion(!question)
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
                <View key={i} style={styles.deckContainer} >
                    {question === true ? (
                        <View style={styles.cardContainer} >
                         <Text style={styles.deckText}> {item.question}</Text>

                         <TouchableOpacity onPress= {onClickButton} style={styles.toggleButton} >
                            <Text style={styles.toggleAnswer} >See Answer</Text>
                         </TouchableOpacity>
                         </View>             
                    ):(
                    <View style={styles.cardContainer} >
                         <Text style={styles.deckText}> 🌟 {item.answer}</Text>

                        <TouchableOpacity onPress={onClickButton} style={styles.toggleButton}>
                            <Text style={styles.toggleAnswer} >Back to Question</Text>
                        </TouchableOpacity>

                        {/* buttons to choose if their answer was correct or not */}
                        <View styles={styles.wrongOrRight}>
                        <TouchableOpacity onPress={onClickButton} style={styles.right}>
                            <Text style={styles.toggleAnswer} >Back to Question</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onClickButton} style={styles.wrong}>
                            <Text style={styles.toggleAnswer} >Back to Question</Text>
                        </TouchableOpacity>
                        </View>
                     </View>)
                    }
                   
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
    },
    deckContainer:{
        padding: 7,
        width: '85%',
        textAlign: 'center',
        marginBottom: 15,
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
        borderRadius: 10,
    },
    cardContainer:{
        alignItems: 'center'
    },
    deckText:{
        color: '#ffe',
        fontSize: 20,
        textAlign: 'center'
    },
    toggleButton:{
        backgroundColor: '#ffe',
        textAlign: 'center',
        padding: 6,
        borderRadius: 2,
        marginTop: 10
    },
    toggleAnswer:{
        color: 'purple'
    },
    wrongOrRight:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    right:{
        color: 'white',
        backgroundColor: '#ffe'
    },
    wrong:{
        color: 'white',
        backgroundColor: '#ffe'
    }
})
