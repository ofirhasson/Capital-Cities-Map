import { useBuildMap } from "../../hooks/useBuildMap";
import "./Map.css";

export function MapComponent(): JSX.Element {
    const { toggleBasemapGallery, mapRef } = useBuildMap();
    return (
        <div>
            <button className="toggle-button" onClick={toggleBasemapGallery}>Choose Map Style</button>
            <div className="Map" ref={mapRef}/>
        </div>
    );
}
