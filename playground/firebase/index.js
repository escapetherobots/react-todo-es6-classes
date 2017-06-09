import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCYKLvglqBvv9OG8jALqgrMknCNypZxba4",
    authDomain: "crux-react-todo.firebaseapp.com",
    databaseURL: "https://crux-react-todo.firebaseio.com",
    projectId: "crux-react-todo",
    storageBucket: "crux-react-todo.appspot.com",
    messagingSenderId: "687286328698"
  };

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

//===========================================
// SET - does not append, this is a write only

firebaseRef.set({
	app: {
		name: 'TodoApp',
		version: '1.0.0'
	},
	isRunning: true,
	user: {
		name: 'JimmyJones',
		age: 20
	}
}).then( (response) => {
	return console.log('promise response from firebase: ', response);
}, (error) => {
	return console.log('promise error: ', error );
});

firebaseRef.child('app').set({
	name: 'Crux TodoApp'
});


//===========================================
// UPDATE - updates only props at current level
firebaseRef.update({
	isRunning: false
});


//===========================================
// MultiPath Updates - use strings to define paths to child props
firebaseRef.update({
	isRunning: true,
	'app/name': 'Todo App'
});

//OR

firebaseRef.child('app').update({address: '1234 street'});

//===========================================
// Remove - use strings to define paths to child props
//firebaseRef.remove() // wipes everything

firebaseRef.child('app/address').remove();


//===========================================
// Once - fetch (with promise)
firebaseRef.once('value').then( (snapshot) => {
	console.log('snapshot: ',snapshot.val());
}, (e) => {
	console.log('error', e.val());
});


//Once with specified key, and snapshot.key
firebaseRef.child('user').once('value').then( (snapshot) => {
	console.log('snapshot: ',snapshot.val(), snapshot.key);
}, (e) => {
	console.log('error', e.val());
});


//===========================================
// ON - fetch (no promise), this returns multiple times
// uses a callback function
firebaseRef.on('value', (snapshot) => {
	console.log('Got value from On: ', snapshot.val());
});

setTimeout( () => {
	firebaseRef.child('app').update({city: 'merica'});
}, 2000);


//===========================================
// Arrays - Object key value pairs

var notesRef = firebaseRef.child('notes');

var newNoteRef = notesRef.push({
	text: 'Walk the dog'
});

console.log(newNoteRef.key);


var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
	console.log('NEW TODO ADD: ', snapshot.key, snapshot.val());
});

todosRef.push({
	text: 'Todo 1 something'
});

todosRef.push({
	text: 'Todo 2 something else'
});

