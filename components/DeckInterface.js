import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
import { deleteDeck } from "../actions";
import { deleteSingleDeck } from "../utils/api";


class DeckInterface extends Component {

    onDeleteDeck = ()=> {
        const { deckName, navigation, dispatch } = this.props;
       
        deleteSingleDeck(deckName)
        navigation.navigate('Home')
        dispatch(deleteDeck(deckName))
        console.log(deckName)
        
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
            <View>
                <Text >{title}</Text>
                {cardNumber === 0 ? (
                    <Text>There are no cards in this deck</Text>
                ) :(
                    <Text >
                        {cardNumber} {cardNumber > 1 ? <Text>Cards</Text> : <Text>Card</Text>}
                    </Text>
                )}

                <TouchableOpacity onPress={()=> navigation.navigate('Add Card', {title, title})}>
                    <Text>Add Card</Text>
                </TouchableOpacity>

                {cardNumber > 0 && (
                    <TouchableOpacity onPress={()=> navigation.navigate('Quiz', {title: title})}>
                        <Text>Start Quiz</Text>
                    </TouchableOpacity>
                )}

                <TouchableOpacity onPress={this.deleteAlert} >
                    <Text>Delete Deck</Text>
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
