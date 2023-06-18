import React, { useEffect, useState } from 'react';
import {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from '../../../firebase/firebase';

async function validarMensajeVisto(messageId) {
  const colSala = collection(db, 'col-sala');
  const docTattoo = doc(colSala, 'tattoobox');
  const colChat = collection(docTattoo, 'col-chat');
  const mensajeDocRef = doc(colChat, messageId);

  try {
    const docSnapshot = await getDoc(mensajeDocRef);

    if (docSnapshot.exists()) {
      const mensaje = docSnapshot.data();

      if (mensaje && !mensaje.visto) {
        // El mensaje no ha sido visto
        console.log('El mensaje no ha sido visto');
      } else {
        // El mensaje ya ha sido visto o no existe
        console.log('El mensaje ha sido visto o no existe');
      }
    } else {
      console.log('El mensaje no existe');
    }
  } catch (error) {
    console.error('Error al obtener el mensaje:', error);
  }
}

export const BurbleChats = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    cargarMensajes();
  }, []);

  async function cargarMensajes() {
    const colSala = collection(db, 'col-sala');
    const docTattoo = doc(colSala, 'tattoobox');
    const colChat = collection(docTattoo, 'col-chat');

    try {
      const unsubscribe = onSnapshot(
        query(colChat, orderBy('timestamp')), // Ordenar los mensajes por el campo 'timestamp'
        (querySnapshot) => {
          const mensajesData = [];

          querySnapshot.forEach((doc) => {
            const mensaje = doc.data();
            mensajesData.push(mensaje);
          });

          setMessages(mensajesData);
        }
      );

      return unsubscribe; // Devuelve la función para desuscribirse de los cambios
    } catch (error) {
      console.error('Error al obtener los mensajes:', error);
    }
  }

  console.log(messages);

  if (messages.length < 0) {
    return <p>Cargando..</p>;
  }

  return (
    <div className='burble-chats'>
      {messages.map(({ sender, message, timestamp }, index) => {
        const fecha = new Date(timestamp?.seconds * 1000); // Convertir el timestamp a objeto de fecha
        const fechaFormateada = fecha.toLocaleDateString('es-MX', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        });

        return sender === 'advisor' ? (
          <div className='chat-advisor' key={index}>
            <p>{message}</p>
            <span>{fechaFormateada}</span>
          </div>
        ) : (
          <div className='chat-user' key={index}>
            <p>{message}</p>
            <span>{fechaFormateada}</span>
          </div>
        );
      })}
    </div>
  );
};
