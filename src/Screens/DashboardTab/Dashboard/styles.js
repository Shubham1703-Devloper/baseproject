import { StyleSheet, Dimensions } from "react-native"

const screenWidth = Dimensions.get("screen").width
const screenHeight = Dimensions.get("screen").height

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container2: {
    marginLeft: 10,
    marginRight: 10,
  },
  menuButtonView: {
  },
  usernametext: {
    fontSize: 28,
    color: "black",
    fontWeight: "bold",
    marginStart: 10,
  },
  FlatListView: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  FlatListView1: {
    marginTop: 10,
    backgroundColor: "#EEF1F6",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  flatlist: {
    overflow: "visible",
    marginTop: 20,
  },
  heading: {
    flexDirection: 'row',
    marginBottom: 10
  },
  hellotext: {
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 16
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  subContainer: {
    width: screenWidth,
    height: 500,
    borderColor: "black",
  },
  modalView: {
    height: 620,
    width: screenWidth,
    margin: 20,
    marginBottom: -50,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  subModalView: {
    flexDirection: 'row',
    marginTop: 18, marginHorizontal: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  dateTextStyle: {
    fontSize: 16,
    color: 'black',
    marginStart: 15,
    fontWeight: 'bold',
  },
  searchSection: {
    marginTop: 20,
    marginStart: 15,
    width: '43%',
    // backgroundColor: 'red',
  },
  dateSectionStyle: {
    width: '43%',
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDF1F7',
    borderColor: '#fff',
    height: 50,
    borderRadius: 5,
    marginTop: 3
  },
  buttonImageIconStyle: {
    tintColor: 'black',
    padding: 10,
    marginStart: 30,
    marginHorizontal: 5,
    marginVertical: 10,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    marginStart: -55,
    color: 'grey',
  },
  buttonEndStyle: {
    flexDirection: 'row',
    marginStart: 15,
    marginTop: 20
  },
  filterTextStyle: {
    fontSize: 25,
    color: 'black',
    flex: 1,
    fontWeight: 'bold',
  },
  item: {
    height: screenHeight / 10,
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    marginStart: 10,
    marginTop: 20,
    backgroundColor: 'blue',

  },

  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },

})
