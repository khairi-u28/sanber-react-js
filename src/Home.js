import React from 'react';
import App from './NoteApp/App';
import { Jumbotron } from './components/Jumbotron';

export const Home = () => (
	<div>
		<Jumbotron />
		<h2>Make Some Note</h2>
		<p>Would you mind to try add some note? Write at the text box down below</p>
		<App />
	</div>
);
