import { useEffect, useState } from 'react';
import { db } from '../firebase';

export const useChat = () => {

  const [error, setError ] = useState(null);
  const [loading, setLoading ] = useState(true);
  const [messages, setMesages ] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('messages').onSnapshot(
      snapshot => {
        setLoading(false);
        const messages = snapshot.docs.map (d => ({ id: d.id, ...d.data()}))
        const orderedMessages = messages.slice().sort((a, b) => a.timestamp - b.timestamp)
        setMesages(orderedMessages)
      },
      err => {
        setError(err)
      })
      return () => unsubscribe()
  }, [setMesages]
  )

  return { error, loading, messages }
}