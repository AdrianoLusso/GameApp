import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from "./style";
const GameDetails = ({ route }) => {
  const { name } = route.params;
  const { price } = route.params;
  const { imageUri } = route.params;
  const { platform } = route.params;
  const { releaseDate } = route.params;
  const { genre } = route.params;
  return (
    <View style={styles.background}>
      <View style={styles.listImageBox}>
        <Image source={{ uri: imageUri }} style={styles.listImage} />
      </View>
      
      <Text style={styles.title}>{name}</Text>
      <View style={styles.infoRow}>
        <Text style={styles.info}>Price: {price}$</Text>
        <Text style={styles.info}>Platform: {platform}</Text>
      </View>
      <Text style={styles.info}>Genre: {genre}</Text>
      <Text style={styles.info}>Release on {releaseDate}</Text>

    </View>
  )
}

export default GameDetails;