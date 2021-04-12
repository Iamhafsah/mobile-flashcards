import React, {Component} from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Text, View , TouchableOpacity, ScrollView, Alert} from 'react-native';
import {receiveDecks, deleteAllDecks} from '../actions'
import {getDecks, deleteDecks } from '../utils/api'
import {Ionicons} from '@expo/vector-icons'


class Decks extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    getDecks().then(decks => dispatch(receiveDecks(decks)));
  }

  
  deleteDecks() {
    const { dispatch } = this.props;
    dispatch(deleteAllDecks());
    deleteDecks();
  }

  deleteDecksAlert = ()=> {
    Alert.alert(
        `Delete all Decks`,
        'You are attempting to delete all decks from storage. Do you want to continue?',
        [
            {
                text: 'No',
                onPress: () => null,
                style: 'cancel'
            },
            {
                text: 'Yes',
                onPress: ()=> this.deleteDecks()
            }
        ]
    )
}
  render() {
    const {deckList, navigation, deckLength} = this.props

    return (
      <ScrollView>
       {deckLength > 0 && (       
          <TouchableOpacity  onPress={() => this.deleteDecksAlert()}>
          <Text style={{textAlign: 'right', padding: 10}} >Clear All Decks</Text>
          </TouchableOpacity>
       )}
        <View style={styles.container}>
       

        {!deckLength > 0 ? (
          <View style={styles.wrap}>
          <Text style={styles.addText}>No decks available. Create new deck. </Text>
          <TouchableOpacity style={styles.addButton} onPress={()=> this.props.navigation.navigate('New Deck')} >
            <Ionicons name='add-outline' size={70} color={'white'} style={{marginLeft: 5}} />
          </TouchableOpacity>
        </View>
        ):
        (
          <View >
            {deckList.map((deck, i)=> (
             <TouchableOpacity 
             key={i} 
             style={styles.deck}
             onPress={() => navigation.navigate("Deck", { title: deck.title })}
             >
              <Text style={styles.title}>{deck.title}</Text>
              <Text style={styles.title}>
  
                {deck.questions.length > 1 ? (
                <Text>{deck.questions.length} cards</Text>
              ):(
                <Text>{deck.questions.length} card</Text>
              )}

              </Text>
             </TouchableOpacity>
            ))}
          </View>
        )}

        </View>
      </ScrollView>
    )
  }
}

function mapStateToProps(decks) {
  const deckList = Object.values(decks);
  const deckLength = deckList.length

  return {
    deckList,
    deckLength
  };
}


export default connect(mapStateToProps)(Decks)



const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: '5%'
      },
      wrap:{
        alignItems: 'center',
        marginTop: '50%',
        flex: 1
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
        padding: 10,
        width: '80%',
        marginBottom: 15,
        // height: '5%',
        justifyContent: 'center',
        alignSelf: 'center',
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
        fontSize: 20,
      },
      addButton:{
        backgroundColor: 'purple',
        width: '21%',
        borderRadius: 50,
        justifyContent: 'center',
        // alignItems: 'center'
      },
      addText:{
        fontSize: 17,
        marginBottom: 10
      }
})
