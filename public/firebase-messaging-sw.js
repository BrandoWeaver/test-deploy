importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js')
importScripts(
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js'
)

const firebaseConfig = {
  apiKey: 'AIzaSyCaGTzO7-WmuPDN7sWLtp5dc9kXmWL3m7c',
  authDomain: 'thortok-1a1bb.firebaseapp.com',
  projectId: 'thortok-1a1bb',
  storageBucket: 'thortok-1a1bb.firebasestorage.app',
  messagingSenderId: '163162339053',
  appId: '1:163162339053:web:ac68cfd98ea23882703ee4',
  measurementId: 'G-KB8BP68EZF',
}

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message:',
    payload
  )

  const notificationTitle = payload.notification.title || 'New Message'
  const notificationOptions = {
    body: payload.notification.body || 'You have a new message.',
    icon: '/firebase-logo.png',
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})
