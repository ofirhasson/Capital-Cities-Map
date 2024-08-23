import Map from "@arcgis/core/Map";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapView from "@arcgis/core/views/MapView";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Legend from "@arcgis/core/widgets/Legend";
import Search from "@arcgis/core/widgets/Search";
import { useEffect, useRef, useState } from "react";

export const useBuildMap = () => {

    const [basemapGallery, setBasemapGallery] = useState<BasemapGallery | null>(null);
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapRef.current) {
            //creating new map
            const map = new Map({
                basemap: "streets-navigation-vector",
            });

            //creating view of a map
            const view = new MapView({
                container: mapRef.current,
                map: map,
                zoom: 7,
                center: [34.8, 31.5] // zoom in on israel
            });

            //adding the layer of the capital cities
            const featureLayer = new FeatureLayer({
                url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Cities/FeatureServer/0", // Replace with your Feature Service URL
                popupTemplate: new PopupTemplate({
                    title: `<div class='popup-title'>
                                <p><strong>City:</strong> {CITY_NAME}</p>
                                <p><strong>Population:</strong> {POP}</p>
                            </div>`,
                    fieldInfos: [
                        {
                            fieldName: "POP",
                            format: {
                                digitSeparator: true,
                                places: 0
                            }
                        }
                    ]
                })
            });
            map.add(featureLayer);

            //adding search widget
            const searchWidget = new Search({
                view: view,
            });
            view.ui.add(searchWidget, "top-right");

            //adding legend widget
            const legendWidget = new Legend({
                view: view,
            });
            view.ui.add(legendWidget, "bottom-left");

            //adding choosing styled map gallery
            const basemapGallery = new BasemapGallery({
                view: view,
            });
            setBasemapGallery(basemapGallery);

            return () => {
                if (view) {
                    view.destroy();
                }
            };
        }
    }, []);

    let isBasemapGalleryVisible = false;

    //toggle to control if the gallery will be open or closed
    const toggleBasemapGallery = () => {
        if (basemapGallery) {
            if (isBasemapGalleryVisible) {
                basemapGallery.view.ui.remove(basemapGallery);
            } else {
                basemapGallery.view.ui.add(basemapGallery, "bottom-right");
                const container = basemapGallery.container as HTMLElement;
                container.style.marginBottom = "50px";
            }
            isBasemapGalleryVisible = !isBasemapGalleryVisible;
        }
    };

    return {
        toggleBasemapGallery,
        mapRef
    }

}