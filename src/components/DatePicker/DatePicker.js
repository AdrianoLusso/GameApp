import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./style";
import {ActionButton} from '../Button/Button'

const MyDatePicker = ({ addDate }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Release date undefined");
  const[dateUploaded,setDateUploaded] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();

    setText(fDate);
    addDate(fDate);
    setDateUploaded(true);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  return (
    <View style={[styles.container,dateUploaded?styles.dateUploaded:styles.dateForUpload]}>
      <Text style={styles.text}>{text}</Text>
      <View style={{ margin: 10}}>
        <ActionButton
          height={50}
          name="Upload release date"
          action={() => {
            showMode("date");
          }}
        />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default MyDatePicker;
