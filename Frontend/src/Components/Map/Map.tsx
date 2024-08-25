import { useBuildMap } from "../../hooks/useBuildMap";
import { useButtonFunctions } from "../../hooks/useButtonFunctions";
import "./Map.css";

export function MapComponent(): JSX.Element {
    const {
        mapRef,
        basemapGallery,
        legend,
        screenSize
    } = useBuildMap();
    const {
        closeFeatures,
        toggleBasemapGallery,
        toggleLegend
    } = useButtonFunctions({ basemapGallery, legend, screenSize });
    return (
        <div>
            <div className="Map" ref={mapRef} onClick={closeFeatures} />
            <button className="toggle-button right" onClick={toggleBasemapGallery}>Choose Map Style</button>
            <button className="toggle-button left" onClick={toggleLegend}>Legend</button>
        </div>
    );
}
