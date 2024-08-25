import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Legend from "@arcgis/core/widgets/Legend";

interface buttonFunctionsProps {
    screenSize: number;
    basemapGallery: BasemapGallery;
    legend: Legend;
}

export const useButtonFunctions = ({ basemapGallery, legend, screenSize }: buttonFunctionsProps) => {

    let isBasemapGalleryVisible = false;

    //toggle to control if the gallery will be open or closed
    const toggleBasemapGallery = () => {
        if (screenSize < 600)
            closeLegend();
        if (basemapGallery) {
            if (isBasemapGalleryVisible) {
                basemapGallery.view.ui.remove(basemapGallery);
            } else {
                basemapGallery.view.ui.add(basemapGallery, "bottom-right");
                const basemapContainer = basemapGallery.container as HTMLElement;
                basemapContainer.classList.add("margin-bottom");
            }
            isBasemapGalleryVisible = !isBasemapGalleryVisible;
        }
    };

    let isLegendVisible = false;
    //toggle to control if the legend will be open or closed
    const toggleLegend = () => {
        if (screenSize < 600)
            closeBasemapGallery();
        if (legend) {
            if (isLegendVisible) {
                legend.view.ui.remove(legend);
            } else {
                legend.view.ui.add(legend, "bottom-left");
                const legendContainer = legend.container as HTMLElement;
                legendContainer.classList.add("margin-bottom");
            }
            isLegendVisible = !isLegendVisible;
        }
    };

    const closeBasemapGallery = () => {
        isBasemapGalleryVisible = false;
        basemapGallery.view.ui.remove(basemapGallery);
    }
    const closeLegend = () => {
        isLegendVisible = false;
        legend.view.ui.remove(legend);
    }
    //if screen size is small close both features
    const closeFeatures = () => {
        if (screenSize < 600) {
            closeBasemapGallery();
            closeLegend();
        }
        else {
            closeBasemapGallery();
        }
    }

    return {
        toggleBasemapGallery,
        closeFeatures,
        toggleLegend
    }

}