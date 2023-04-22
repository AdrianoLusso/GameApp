import React from 'react'
import {Pressable, Text,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {styles} from './Styles'

/*fontS es una funcion que automatiza el tamanio del texto de lso botones, en funcion del alto y largo del boton,
y de la cantidad de palabras del texto.

Obtenida a traves de un sistema de 3 ecuaciones(3 botones elegidos como base) y 3 variables(explicadas anteriormente)*/

//Boton con la funcion de navegar a una pagina, siendo la referencia enviada por props..
export function NavButton (props){

    const [navigation,name,nav,w,h,disbld]=
    [useNavigation()
    ,props.name
    ,props.nav
    ,props.width==null? 140:props.width
    ,props.height==null? 35:props.height
    ,props.disabled==null?false:props.disabled];

    //Si la propiedad disabled es true, entonces se generara un boton accion de tipo deshabilitado.Sino, habilitado. 
    return (disbld? disabledButton(name,w,h):enabledButton(()=>navigation.navigate(nav),name,w,h));
}
//Boton con la funcion de realizar una accion enviada por props.
export function ActionButton(props){
    const [action,name,w,h,disbld]=
    [props.action,
    props.name,
    props.width==null? 140:props.width,
    props.height==null? 35:props.height,
    props.disabled==null?false:props.disabled];

    //Si la propiedad disabled es true, entonces se generara un boton accion de tipo deshabilitado.Sino, habilitado. 
    return (disbld? disabledButton(name,w,h):enabledButton(action,name,w,h));
}

function enabledButton(action,name,w,h)
{
    const fontS = -0.1573*h + 0.1199*w+2.3602* name.split(' ').length;

    return <TouchableOpacity style = {[styles.button,styles.enabledButton,{height:h,width:w}]} 
    onPress={action}>
    <Text style = {[styles.buttonText,{fontSize:fontS}]}>{name}</Text>
    </TouchableOpacity>;
}

function disabledButton(name,w,h)
{
    const fontS = -0.1573*h + 0.1199*w+2.3602* name.split(' ').length;

    return(
        <Pressable disabled={true} style = {[styles.button,styles.disabledButton,{height:h,width:w}]}>
        <Text style = {[styles.buttonText,{fontSize:fontS}]}>{name}</Text>
        </Pressable>
    );
}



