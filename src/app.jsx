import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBXJ3bX7902mMzahL6OaFS-KRKocRbq3pM",
    authDomain: "casideto-5d226.firebaseapp.com",
      projectId: "casideto-5d226",
        storageBucket: "casideto-5d226.firebasestorage.app",
          messagingSenderId: "946260121723",
            appId: "1:946260121723:web:b2a8032d83006a7bc4aade"
            };

            const app = initializeApp(firebaseConfig);
            const auth = getAuth(app);
            const db = getFirestore(app);

            export default function App() {
              const [items, setItems] = useState([]);

                useEffect(() => {
                    signInAnonymously(auth).catch(err => console.error("Error Auth:", err));
                        const unsubscribe = onSnapshot(collection(db, 'offers'), (snapshot) => {
                              setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                                  }, (error) => console.error("Error Firestore:", error));
                                      return () => unsubscribe();
                                        }, []);

                                          return (
                                              <div style={{ padding: '0', margin: '0', fontFamily: 'sans-serif', backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
                                                    <header style={{ padding: '40px 20px', borderBottom: '1px solid #222', textAlign: 'center' }}>
                                                            <h1 style={{ margin: 0, fontSize: '48px', fontWeight: '900', fontStyle: 'italic' }}>
                                                                      VIRALS<span style={{ color: '#ff0050' }}>.</span>
                                                                              </h1>
                                                                                      <p style={{ color: '#ff0050', fontWeight: 'bold', fontSize: '10px', letterSpacing: '2px' }}>
                                                                                                AMAZON • TEMU • ALIEXPRESS
                                                                                                        </p>
                                                                                                              </header>
                                                                                                                    <div style={{ padding: '20px' }}>
                                                                                                                            {items.length === 0 ? (
                                                                                                                                      <p style={{ textAlign: 'center', color: '#444' }}>No hay ofertas publicadas todavía.</p>
                                                                                                                                              ) : (
                                                                                                                                                        items.map(item => (
                                                                                                                                                                    <div key={item.id} style={{ background: '#111', borderRadius: '24px', padding: '20px', marginBottom: '15px', border: '1px solid #222' }}>
                                                                                                                                                                                  <h3 style={{ margin: '0' }}>{item.title}</h3>
                                                                                                                                                                                                <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#ff0050' }}>{item.price}€</p>
                                                                                                                                                                                                              <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: '#fff', color: '#000', textAlign: 'center', padding: '15px', borderRadius: '15px', textDecoration: 'none', fontWeight: 'bold' }}>
                                                                                                                                                                                                                              VER CHOLLO
                                                                                                                                                                                                                                            </a>
                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                  ))
                                                                                                                                                                                                                                                                          )}
                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                      