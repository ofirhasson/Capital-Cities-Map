import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { MapComponent } from './Components/Map/Map';

import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

defineMapElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets" });

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <MapComponent />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
