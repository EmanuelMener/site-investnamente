import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB6Iy8aNj6Pegl0BVK09PgbQOVfig8YABI",
    authDomain: "site-investnamente.firebaseapp.com",
    projectId: "site-investnamente",
    storageBucket: "site-investnamente.appspot.com",
    messagingSenderId: "1089566588373",
    appId: "1:1089566588373:web:3fb70a971f2e6a6037515c"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const firestore = firebase.firestore();

export const uploadFiles = (imageFile, /*videoFile,*/ audioFile, title, description, setUploadStatus, setUploadProgress) => {
    const storageRef = storage.ref();
    const imageRef = storageRef.child(`images/${imageFile.name}`);
    //const videoRef = storageRef.child(`videos/${videoFile.name}`);
    const audioRef = storageRef.child(`audios/${audioFile.name}`);
  
    const imageUploadTask = imageRef.put(imageFile);
    //const videoUploadTask = videoRef.put(videoFile);
    const audioUploadTask = audioRef.put(audioFile);
    
    // Manipular o progresso do upload aqui
    audioUploadTask.on('state_changed', (audioSnapshot) => {
      const audioProgress = (audioSnapshot.bytesTransferred / audioSnapshot.totalBytes) * 100;
      console.log('Progresso do upload de áudio:', audioProgress);
      setUploadProgress(audioProgress);
    });
    
    // Manipular o sucesso do upload e salvar URLs no Firestore aqui
    Promise.all([audioUploadTask, /*videoUploadTask,*/ imageUploadTask])
      .then(() => {
        console.log('Todos os arquivos foram enviados com sucesso.');
        setUploadProgress(0);
    
        Promise.all([
          audioRef.getDownloadURL(),
          //videoRef.getDownloadURL(),
          imageRef.getDownloadURL()
        ])
          .then(([audioURL, /*videoURL,*/ imageURL]) => {
            // Salvar as URLs no Firestore ou realizar as ações desejadas
            console.log('URLs do áudio, vídeo e imagem:', audioURL, /*videoURL,*/ imageURL);
    
            // Exemplo de como salvar no Firestore
            firestore.collection('infoEp').add({
              audioURL,
              /*videoURL,*/
              imageURL,
              titulo: title,
              descricao: description
            })
              .then((docRef) => {
                const docId = docRef.id;
                console.log('Documento salvo no Firestore com ID:', docId);
        
                setUploadStatus("Upload concluído com sucesso!");
              })
              .catch((error) => {
                console.error('Erro ao salvar no Firestore:', error);
              });
          })
          .catch((error) => {
            console.error('Erro ao obter URLs de download:', error);
          });
      })
      .catch((error) => {
        console.error('Erro ao enviar os arquivos:', error);
      });
    
  };
  