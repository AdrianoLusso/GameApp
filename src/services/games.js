import { firebase } from "../../config/firebase";
import { database } from "../../config/firebase";
import {
  collection,
  addDoc,
  orderBy,
  query,
  getDocs,
  startAfter,
  limit,
} from "firebase/firestore";

const obj = {
  name: "",
  platform: "",
  price: 0,
  genre: "",
  createAt: new Date(),
  releaseDate: "",
  imageUri: "",
};

//Get games
const fetchGames = async (gamesPerLoad,orderFilter) => {
  //TO-IMPROVE-> add a new parameter to order
  const post = new Array();
  const collectionRef = collection(database, "games");
  const q = query(collectionRef, orderBy(orderFilter), limit(gamesPerLoad));
  const querySnapshot = await getDocs(q);

  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  const games = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name,
    platform: doc.data().platform,
    price: doc.data().price,
    createAt: doc.data().createAt,
    genre: doc.data().genre,
    releaseDate: doc.data().releaseDate,
    imageUri: doc.data().imageUri,
  }));
  return { posts: games, lastVisible };
};
//Get More Games
const fetchMoreGames = async (orderedFilter,startAf,gamesPerLoad) => {
  const posts = new Array();
  const collectionRef = collection(database, "games");
  const q = query(collectionRef,orderBy(orderedFilter),startAfter(startAf),limit(gamesPerLoad));
  const querySnapshot = await getDocs(q);

  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  const games = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name,
    platform: doc.data().platform,
    price: doc.data().price,
    createAt: doc.data().createAt,
    genre: doc.data().genre,
    releaseDate: doc.data().releaseDate,
    imageUri: doc.data().imageUri,
  }));
  return { posts: games, lastVisible };
};

//function to add game to db
const uploadGame = async (newItem, selectedImage) => {
  const url = await uploadImage(selectedImage);
  addAttribute(newItem, url);
  await addDoc(collection(database, "games"), obj);
};

const addAttribute = (newItem, downloadUrl) => {
  obj.name = newItem.name;
  obj.platform = newItem.platform;
  obj.price = newItem.price;
  obj.genre = newItem.genre;
  obj.releaseDate = newItem.releaseDate;
  obj.imageUri = downloadUrl;
};

//fuction to upload image to Firebase storage and retrieve a download URL
const uploadImage = async (selectedImage) => {
  const fileName = selectedImage.substring(selectedImage.lastIndexOf("/") + 1);

  const response = await fetch(selectedImage);
  const blob = await response.blob();
  var ref = firebase.storage().ref(`games/images/${fileName}`);

  try {
    //upload image
    await ref.put(blob);
    //get and return download url
    return await ref.getDownloadURL();
  } catch (error) {}
};

export { uploadGame, fetchGames, fetchMoreGames };
