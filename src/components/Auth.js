import { auth, provider } from '../firabase/FirebaseConfig';
// Giriş yapmak için gerekli fonksiyon
import { signInWithPopup } from 'firebase/auth';

const Auth = ({ setIsAuth }) => {
  // giriş
  const signIn = () => {
    // promise döndürür
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem('token', res.user.refreshToken);
        setIsAuth(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth">
      <h1>Chat Odası</h1>
      <p>Devam Etmek için Giriş Yap</p>
      <button onClick={signIn}>Google ile Gir</button>
    </div>
  );
};

export default Auth;