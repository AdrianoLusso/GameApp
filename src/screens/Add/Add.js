import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState} from "react";
import { Text} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import MyDatePicker from "../../components/DatePicker/DatePicker";
import CurryImagePicker from "../../components/CurryImagePicker/CurryImagePicker";
import { ActionButton } from "../../components/Button/Button";
import { styles } from "./style";
import { uploadGame } from "../../services/games";

export default function Add() {
  const navigation = useNavigation();

  //este es el estado del objeto que se tiene que guardar, estos atributos se reciben del usuario
  const [newItem, setNewItem] = useState({
    name: "",
    platform: "",
    price: 0,
    genre: "",
    releaseDate: "",
  });

  //Expresiones regulares usadas para validaciones
  const regularExpresion =
  {
    productName: /^([a-zA-Z0-9]+\s?)+(\:[a-zA-Z0-9\s]*)?\w$/,
    platform:/^[a-zA-Z0-9]+$/,
    price:/^\d*(\.\d*)?\d$/,
    genre:/^[a-zA-Z\s]+$/
  };

  const [addD, setNewDate] = useState("");
  const [selectedImage, setNewImage] = useState(null);

  //Estados que marcan si el respectivo input fue correctamente validado
  const[nameValidated,setNameValidated] = useState(false);
  const[platformValidated,setPlatformValidated] = useState(false);
  const[priceValidated,setPriceValidated] = useState(false);
  const[genreValidated,setGenreValidated] = useState(false);
  const[dateValidated,setDateValidated]=useState(false);

  //este booleano sirve como flag para mantener enable o disable el upload button
  const allValidated = nameValidated&&platformValidated&&priceValidated&&genreValidated&&dateValidated&&selectedImage!=null;

  //con esta funcion agrego un nuevo documento a la bd
  const onSend = async () => {
    await uploadGame(newItem,selectedImage);
    navigation.goBack();
  };

  //con esta funcion recibo informacion del componente DatePicker
  const addDate = (newDate) => {
    setDateValidated(true);
    setNewDate(newDate.toString());
    setNewItem({ ...newItem, releaseDate: newDate });
  };

  //con esta funcion recibo informacion del componente CurryImagePicker
  const addImage = (newImage) => {
    setNewImage(newImage);
    console.log('d');
  };
  
  return (
      
      <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Text style={styles.title}>Add a New Game</Text>
      <CurryImagePicker addImage={addImage} />
      <TextInput
        style={[styles.inputContainer,nameValidated?styles.validInput:styles.unvalidInput]}
        placeholderTextColor="white"
        placeholder="Product Name"
        onChangeText={(text) => {setNameValidated(regularExpresion.productName.test(text));
                                setNewItem({ ...newItem, name: text })}}
      />
      <TextInput
        style={[styles.inputContainer,platformValidated?styles.validInput:styles.unvalidInput]}
        placeholderTextColor="white"
        placeholder="Platform"
        onChangeText={(text) => {setPlatformValidated(regularExpresion.platform.test(text));
                              setNewItem({ ...newItem, platform: text })}}
      />
      <TextInput
        style={[styles.inputContainer,priceValidated?styles.validInput:styles.unvalidInput]}
        placeholderTextColor="white"
        placeholder="Price"
        keyboardType="numeric"
        onChangeText={(text) => {setPriceValidated(regularExpresion.price.test(text));
                                setNewItem({ ...newItem, price: text })}}
      />
      <TextInput
        style={[styles.inputContainer,genreValidated?styles.validInput:styles.unvalidInput]}
        placeholderTextColor="white"
        placeholder="Genre"
        onChangeText={(text) => {setGenreValidated(regularExpresion.genre.test(text));
                                setNewItem({ ...newItem, genre: text })}}
      />
      <MyDatePicker addDate={addDate} />
        <ActionButton name="Upload game" disabled={allValidated?false:true} action={onSend}/>
    </ScrollView>
    
  );
}
