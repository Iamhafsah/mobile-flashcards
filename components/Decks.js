import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import {decks} from '../utils/helpers'


const Decks = ({navigation}) => {
    return (
        <View style={styles.container}>
        
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Mobile Flashcards</Text>
          <Text style={styles.info}>Click on a deck to view cards</Text>
        </View>

        {Object.values(decks).map((deck, i)=> (
          <TouchableOpacity  
          key={i} 
          style={styles.deck} 
          onPress={()=> navigation.navigate('Cards')}
          >
            <Text style={styles.title}>{deck.title}</Text>
            <Text style={styles.text}>{deck.questions.length} cards</Text>
            <Text>{i}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
}

export default Decks

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: '15%'
      },
      headingWrapper:{
        marginBottom: 22,
      },
      heading:{
        fontSize: 27,
        color:'#000'
      },
      info:{
        color:'black',
        textAlign: 'center'
      },
      deck:{
        padding: 3,
        width: '85%',
        textAlign: 'center',
        marginBottom: 15,
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
        borderRadius: 10
      },
      title:{
        color: '#ffe',
        fontSize: 25
      },
      text:{
        color: '#fef8',
        fontSize: 20
      }
})
