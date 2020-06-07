import { providers, auth } from '../firebase';

export default {
  signIn: () => auth.signInWithPopup(providers.google),
  signOut: () => auth.signOut(),
  onChange: cb => auth.onAuthStateChanged(cb)
}