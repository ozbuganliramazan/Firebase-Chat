import { useRef, useState } from 'react';

import Auth from './components/Auth';
import Chat from './components/Chat';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  const [room, setRoom] = useState(null);

  const inputRef = useRef(null);
  // eğer kullanıcı henüz giriş yapmadıysa yönlendir
  if (!isAuth) {
    return (
      <div className="container">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  // eğer giriş yaptıysa
  return (
    <div className="container">
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room-container">
          <h1>Chat Odası</h1>
          <p>Hangi Odaya Gireceksin ?</p>
          <input
            ref={inputRef}
            type="text"
            placeholder="oda ismini yazınız..."
          />
          <button onClick={() => setRoom(inputRef.current.value)} id="enter">
            Odaya Gir
          </button>
          <button id="leave">Çıkış Yap</button>
        </div>
      )}
    </div>
  );
}

export default App;

