
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(App(), document.getElementById('root'));

setInterval(() => ReactDOM.render(App(), document.getElementById('root')), 1000);
