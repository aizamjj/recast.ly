// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import data from '/src/data/exampleVideoData.js';

ReactDOM.render(<App videoData={data} />, document.getElementById('app'));

