import React, {Component} from 'react'
import {connect} from 'react-redux'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import {receiveDecks} from '../actions'
import {getDecks} from '../utils/api'
import {Ionicons} from '@expo/vector-icons'
class Decks extends Component {
 componentDidMount(){
  const {dispatch} = this.props
}
 
  render() {
    const {deckList, decks, navigation} = this.props
    const deckLength = decks.length
    return (
      <>
        {!decks ? (
          <View style={styles.wrap}>
          <Text style={styles.addText}>No decks available </Text>
          <TouchableOpacity style={styles.addButton} onPress={()=> this.props.navigation.navigate('New Deck')} >
            <Ionicons name='add-outline' size={70} color={'white'} style={{marginLeft: 5}} />
          </TouchableOpacity>
        </View>
        ):
        (
          <View style={styles.container}>
            {deckList.map((deckTitle)=> (
             <TouchableOpacity 
             key={deckTitle} 
             style={styles.deck} 
             onPress={() => navigation.navigate("Deck", { title: deckTitle })}
             >
              <Text style={styles.title}>{deckTitle}</Text>
             </TouchableOpacity>
            ))}
          </View>
        )}
      </>
    )
  }
}

function mapStateToProps(decks) {
  const deckList = Object.keys(decks);
  return {
    deckList,
    decks
  };
}


export default connect(mapStateToProps)(Decks)



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: '15%'
      },
      wrap:{
        justifyContent: 'center',
        alignItems: 'center',
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
      },
      addButton:{
        backgroundColor: 'purple',
        width: '21%',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
      },
      addText:{
        fontSize: 17,
        marginBottom: 10
      }
})
