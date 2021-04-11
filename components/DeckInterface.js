import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DeckInterface extends Component {
    render() {

        const {navigation, route, cardNumber} = this.props
        const { title } = route.params;
        console.log(title);
        return (
            <View>
                <Text >{title}</Text>
                {cardNumber === 0 ? (
                    <Text>There are no cards in this deck</Text>
                ) :(
                    <Text >{cardNumber} Card(s)</Text>
                )}

                <TouchableOpacity onPress={()=> navigation.navigate('Add Card', {title, title})}>
                    <Text>Add Card</Text>
                </TouchableOpacity>

                {cardNumber > 0 && (
                    <TouchableOpacity>
                        <Text>Take Quiz</Text>
                    </TouchableOpacity>
                )}

                <TouchableOpacity>
                    <Text>Delete Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(decks, { deckTitle }) {
  return {
    cardNumber: decks[deckTitle] ? decks[deckTitle].length : 0
  };
}

export default connect(mapStateToProps) (DeckInterface)
