import {
  View, Text, KeyboardAvoidingView,
  TextInput, TouchableOpacity, Keyboard, Modal, Switch,ScrollView
} from 'react-native';
import React, { useState } from 'react';
import Task from './components/Task';
import styles from './styles/mainStyle';


const App = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  let [modalVisible, setModalVisible] = React.useState(false)

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index, item) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      {/*ส่วนแสดงหน้าหลัก*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>สิ่งที่ต้องทำ</Text>
        <ScrollView style={styles.items}>
          {/*รายการงานกิจกรรม*/}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity Key={index} onPress={() => completeTask(index, item)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
      {/*ปุ่มกดไปยังหน้าเพิ่มงาน*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TouchableOpacity onPress={() => { setModalVisible(true) }}>
          <View style={styles.addWrapper}><Text>+</Text></View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

{/*Modal*/}
<Modal animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>

        <View style={styles.modal}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 18 }}> เพิ่มงานของคุณ </Text>
            <TextInput style={styles.input}
              multiline={true} numberOfLines={3}
              placeholder={'เพิ่มงาน'} value={task}
              onChangeText={text => (setTask(text))} />

              <TextInput style={styles.input} multiline={true} placeholder={'คำอธิบายเพิ่มเติม'}/>
              <TouchableOpacity style={styles.fileSelector}><Text>เลือกวันเวลาการแจ้งเตือน</Text></TouchableOpacity>
              <View style={styles.AlarmRow}>
              <TouchableOpacity style={styles.fileSelector}><Text>เลือกเสียงแจ้งเตือน</Text></TouchableOpacity>
              <TouchableOpacity style={styles.uploadBtn}><Text>อัพโหลด</Text></TouchableOpacity>
              </View>

            <View style={styles.inline}>
              {/*cancel button */}
              <TouchableOpacity activeOpacity={0.25}
                style={styles.modalButtonCancel}
                onPress={() => { setModalVisible(!modalVisible), setTask(null) }}>
                <Text style={styles.mordalButtonText, { color: 'red' }}>Cancel</Text>
              </TouchableOpacity>
              {/*OK button */}
              <TouchableOpacity activeOpacity={0.25}
                style={styles.modalButtonOK}
                onPress={() => { setModalVisible(!modalVisible), handleAddTask() }}>
                <Text style={styles.mordalButtonText, { color: 'green' }}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};



export default App;