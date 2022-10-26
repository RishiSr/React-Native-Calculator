import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Clickbutton from './Components/Clickbutton'
import Buttonpad from './Components/Buttonpad'

const App = () => {
  return (
   <View style={styles.container} >
    <Buttonpad/>

    
    {/* <Clickbutton sign='8' ht="45" wd="12" /> */}
   </View>
  )
}
const styles = StyleSheet.create({
  container:{
flex:1,
justifyContent:"center",
alignItems:"center"
  }
})
export default App