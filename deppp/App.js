import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Entypo } from 'react-native-vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

      <View style={styles.view1}>
        <Text style={styles.txt1}>Оройн мэнд</Text>
        <MaterialCommunityIcons name="ticket-percent" style={styles.icon1}></MaterialCommunityIcons>
        <Image source={require("./assets/download.png")} style={styles.img1} />
      </View>


      <View style={styles.view2}>
        <View style={styles.box1}>
          <Text style={styles.boxtxt}>Товч ном</Text>
          <Entypo name="triangle-right" style={styles.boxicon}></Entypo>
        </View>
        <View style={styles.box2}><Text style={styles.boxtxt}>Цахим ном</Text></View>
        <View style={styles.box3}><Text style={styles.boxtxt}>Аудио ном</Text></View>
        <View style={styles.box4}><Text style={styles.boxtxt}>Подкаст</Text></View>
      </View>


      <View style={styles.view3}>
        <Text style={styles.txt2}>Аймшгийн зохиол</Text>
        <Text style={styles.txt3}>Энэ 7 хоногийн онцлох</Text>
        <Image source={require('./assets/downloadd.png')} style={styles.image}/>
      </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdcdc",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  view1: {
    height: 50,
    alignItems: "center",
    flexDirection: 'row',
  },
  txt1: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
  },
  icon1: {
    fontSize: 35,
    color: 'blue',
    marginLeft: 100,
  },
  img1: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 10,
  },
  view2: {
    height: 250,
    width:350,
    margin:14,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  box1: {
    width: 150,
    height: 90,
    backgroundColor: "aqua",
    borderRadius: 20,
    margin: 10,
  },
  box2: {
    width: 150,
    height: 90,
    backgroundColor: "orange",
    borderRadius: 20,
    margin: 10,
  },
  box3: {
    width: 150,
    height: 90,
    backgroundColor: "yellow",
    borderRadius: 20,
    margin: 10,
  },
  box4: {
    width: 150,
    height: 90,
    backgroundColor: "violet",
    borderRadius: 20,
    margin: 10,
  },
  boxtxt: {
    fontSize: 20,
    fontWeight: 700,
    margin: 10,
  },
  boxicon: {
    fontSize: 35,
  },
  view3:{
    width:350,
    height:450,
    backgroundColor:'white',
    borderRadius:20,
    margin:14,
    overflow: 'hidden',
  },
  txt2:{
    fontSize:15,
    color:'gray',
    textTransform:'uppercase',
    marginLeft:20,
  },
  txt3:{
    fontSize:35,
    fontWeight:'bold',
    marginLeft:20,
  },
  image:{
    resizeMode: "stretch",
    flex:1,
    width: "100%",
  },
})

