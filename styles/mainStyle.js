import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
    height: '75%',
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: '100%',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inline: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20, marginBottom: 10,
  },


modal: {
  flex: 1, justifyContent: 'center', alignItems:'center', marginTop: 50, 
},
  modalView: {
    width: 250, backgroundColor: '#cde', borderRadius: 10, padding: 20, alignSelf: 'center', 
    alignContent: 'center',
  },
  inputPassword: {
    height: 32, borderWidth: 1, borderColor: 'lightgray', backgroundColor: 'white', marginTop: 5, marginBottom: 15,
  },
  modalButtonOK: {
    width: 60, height: 34, backgroundColor: '#8AFF8A', justifyContent: 'center', alignSelf: 'center', alignItems: 'center',
    borderRadius: 15, padding: 5, marginHorizontal: 5,
  },
  modalButtonCancel: {
    width: 60, height: 34, justifyContent: 'center', alignSelf: 'center', alignItems: 'center',
    borderRadius: 15, padding: 5, marginHorizontal: 5, borderWidth: 1, borderColor: 'red',
  },
  mordalButtonText: {
    fontSize: 16, color: 'white', 
  },
  addTaskButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AlarmRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fileSelector: {
    width: 150, 
    height: 34, 
    alignItems: 'center',
    padding: 2, 
    borderWidth: 3, 
    borderColor: 'gray',
    backgroundColor: 'lightgray',
    borderRadius: 5,
    marginBottom: 5,
  },
  uploadBtn: {
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    borderWidth:3,
    height:34,
    borderRadius: 5,
    padding: 2,
    marginLeft: 5,
  }
});
export default styles