require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      // autocasts as new PortalItem()
      id: "9054004086ab429da6938614b153565b"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});