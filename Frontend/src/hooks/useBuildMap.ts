import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Legend from "@arcgis/core/widgets/Legend";
import { useCallback, useEffect, useRef, useState } from "react";
import { addLayers, addWidgets } from "../Utils/MapConfig";

export const useBuildMap = () => {
    const [basemapGallery, setBasemapGallery] = useState<BasemapGallery | null>(null);
    const [legend, setLegend] = useState<Legend | null>(null);
    const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
    const mapRef = useRef<HTMLDivElement>(null);

    // Initialize map and view
    const initializeMap = useCallback(() => {
        if (mapRef.current) {
            const map = new Map({
                basemap: "streets-navigation-vector",
            });

            const view = new MapView({
                container: mapRef.current,
                map: map,
                zoom: 7,
                center: [34.8, 31.5], // Zoom in on Israel
            });

            addLayers(map);
            const { legendWidget, basemapGalleryWidget } = addWidgets(view);
            setBasemapGallery(basemapGalleryWidget);
            setLegend(legendWidget);

            // Cleanup on unmount
            return () => {
                if (view) view.destroy();
            };
        }
    }, [mapRef]);

    // Handle screen resizing
    const handleResize = useCallback(() => {
        setScreenSize(window.innerWidth);
    }, []);

    useEffect(() => {
        const cleanup = initializeMap(); 
        window.addEventListener("resize", handleResize);

        return () => {
            cleanup?.();
            window.removeEventListener("resize", handleResize);
        };
    }, [initializeMap, handleResize]);

    return {
        mapRef,
        basemapGallery,
        legend,
        screenSize,
    };
};
