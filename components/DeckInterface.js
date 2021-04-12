import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { deleteDeck } from "../actions";
import { deleteSingleDeck } from "../utils/api";
import {Ionicons} from '@expo/vector-icons'


class DeckInterface extends Component {

    onDeleteDeck = ()=> {
        const { deckName, navigation, dispatch } = this.props;
       
        deleteSingleDeck(deckName)
        navigation.navigate('Home')
        dispatch(deleteDeck(deckName))
    }

    deleteAlert = ()=> {
        const {deckName} = this.props
        Alert.alert(
            `Delete ${deckName} Deck`,
            'This action cannot be undone. Do you want to continue?',
            [
                {
                    text: 'No',
                    onPress: () => null,
                    style: 'cancel'
                },
                {
                    text: 'Yes',
                    onPress: ()=> this.onDeleteDeck()
                }
            ]
        )
    }

    render() {

        const {navigation, route, cardNumber} = this.props
        const { title } = route.params;
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.deckTitle}>{title}</Text>
                    {cardNumber === 0 ? (
                        <Text style={styles.cardNumber} >There are no cards in this deck</Text>
                    ) :(
                        <Text  style={styles.cardNumber} >
                            {cardNumber} {cardNumber > 1 ? <Text>Cards</Text> : <Text>Card</Text>}
                        </Text>
                    )}

                    <View style={cardNumber > 0 ? { flexDirection: 'row'}:  {flexDirection: 'column'} }>
                        <TouchableOpacity onPress={()=> navigation.navigate('Add Card', {title, title})} style={[styles.button, styles.buttonLeft]}>
                            <Text style={styles.buttonText}>Add Card</Text>
                        </TouchableOpacity>

                        {cardNumber > 0 && (
                            <TouchableOpacity onPress={()=> navigation.navigate('Quiz', {title: title})} style={styles.button}>
                                <Text style={styles.buttonText}>Start Quiz</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>

                <TouchableOpacity onPress={this.deleteAlert} style={styles.delete}>
                    <Text style={styles.deleteText}>Delete Deck  <Ionicons name='trash-bin-outline' size={20} color={'purple'} /> </Text>
                </TouchableOpacity>
            </View>
        )
    }
}


function mapStateToProps(decks, props) {
  const deckName = props.route.params.title
  const cardNumber = decks[deckName] ? decks[deckName].questions.length : 0;

  return {
    cardNumber,
    deck: decks ? decks[deckName] : null,
    deckName
  }
}

export default connect(mapStateToProps)(DeckInterface)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    innerContainer:{
        backgroundColor: 'purple',
        marginTop: 40,
        padding: 30,
        borderRadius: 8
    },
    deckTitle:{
        fontSize: 25,
        marginTop: 5,
        color: 'white',
        textAlign: 'center'
    },
    cardNumber:{
        textAlign: 'center',
        color: 'white',
        marginTop: 10,
        fontSize: 18
    },
    button:{
        backgroundColor: 'white',
        padding: 15,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 8
    },
    buttonLeft:{
        marginRight: 15
    },
    buttonText:{
        fontSize: 17,
        textAlign: 'center'
    },
    delete:{
        backgroundColor: 'white',
        padding: 15,
        marginTop: 30,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: 'purple',
        borderRadius: 8,
    },
    deleteText:{
        fontSize: 17
    }
})