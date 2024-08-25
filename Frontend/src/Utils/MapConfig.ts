import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import MapView from "@arcgis/core/views/MapView";
import Search from "@arcgis/core/widgets/Search";
import Map from "@arcgis/core/Map";
import Legend from "@arcgis/core/widgets/Legend";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";

//add layers to the map
export const addLayers = (map: Map) => {
    const featureLayer = new FeatureLayer({
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Cities/FeatureServer/0",
        popupTemplate: new PopupTemplate({
            title: `<div class='popup-title'>
                        <p><strong>City:</strong> {CITY_NAME}</p>
                        <p><strong>Population:</strong> {POP}</p>
                    </div>`,
            fieldInfos: [{
                fieldName: "POP",
                format: {
                    digitSeparator: true,
                    places: 0,
                },
            }],
        }),
    });
    map.add(featureLayer);
};

interface Widgets {
    legendWidget: Legend;
    basemapGalleryWidget: BasemapGallery;
}

// Add widgets to the view
export const addWidgets = (view: MapView): Widgets=> {
    const searchWidget = new Search({ view });
    view.ui.add(searchWidget, "top-right");
    
    const legendWidget = new Legend({ view });
    // setLegend(legendWidget);

    const basemapGalleryWidget = new BasemapGallery({ view });
    // setBasemapGallery(basemapGalleryWidget);
    return { legendWidget, basemapGalleryWidget };
};
