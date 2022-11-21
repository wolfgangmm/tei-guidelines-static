import{L as t,p as e,r as i,h as s,c as a}from"./pb-mixin-ae9e2885.js";import"./es-global-bridge-6abe3a88.js";const o=["type","url","label","base","show"];class r extends t{static get properties(){return{type:{type:String},url:{type:String},base:{type:Boolean},show:{type:Boolean},label:{type:String},attribution:{type:String},minZoom:{type:Number,attribute:"min-zoom"},maxZoom:{type:Number,attribute:"max-zoom"},zoomOffset:{type:Number,attribute:"zoom-offset"},opacity:{type:Number},tileSize:{type:Number},id:{type:String},accessToken:{type:String,attribute:"access-token"}}}constructor(){super(),this.type="tile",this.url=null}get options(){const t={};return Object.keys(r.properties).forEach(e=>{o.indexOf(e)<0&&this[e]&&(t[e]=this[e])}),console.log("<pb-leaflet-map-layer> Options: %o",t),t}async data(){return new Promise(t=>{fetch(this.url).then(t=>t.json()).then(e=>t(e))})}}function l(t,e){try{return t.split(/\s*,\s*/).map(t=>parseInt(t,10))}catch(e){return console.error("<pb-map-icon> Invalid size specified: "+t),null}}customElements.define("pb-map-layer",r);class n extends t{static get properties(){return{name:{type:String},iconUrl:{type:String,attribute:"icon-url"},iconSize:{type:Array,converter:l,attribute:"icon-size"},iconAnchor:{type:Array,converter:l,attribute:"icon-anchor"},shadowUrl:{type:String,attribute:"shadow-url"},shadowSize:{type:Array,converter:l,attribute:"shadow-size"},shadowAnchor:{type:Array,converter:l,attribute:"shadow-anchor"},popupAncor:{type:Array,converter:l,attribute:"popup-anchor"}}}constructor(){super(),this.name="default",this.type="image",this.iconUrl=null}get options(){const t={};return Object.keys(n.properties).forEach(e=>{this[e]&&(t[e]=this[e])}),console.log("<pb-map-icon> Options: %o",t),t}}customElements.define("pb-map-icon",n);class c extends(e(t)){static get properties(){return Object.assign(Object.assign({},super.properties),{},{latitude:{type:Number},longitude:{type:Number},zoom:{type:Number},crs:{type:String},fitMarkers:{type:Boolean,attribute:"fit-markers"},cluster:{type:Boolean},disableClusteringAt:{type:Number,attribute:"disable-clustering-at"},noScroll:{type:Boolean,attribute:"no-scroll"},accessToken:{type:String,attribute:"access-token"},toggle:{type:Boolean},imagesPath:{type:String,attribute:"images-path"},cssPath:{type:String,attribute:"css-path"},_map:{type:Object}})}constructor(){super(),this.latitude=51.505,this.longitude=-.09,this.zoom=15,this.crs="EPSG3857",this.accessToken="",this.imagesPath="../images/leaflet/",this.cssPath="../css/leaflet",this.toggle=!1,this.noScroll=!1,this.disabled=!0,this.cluster=!1,this.fitMarkers=!1,this.disableClusteringAt=null,this._icons={}}connectedCallback(){super.connectedCallback(),this._layers=this.querySelectorAll("pb-map-layer"),this._markers=this.querySelectorAll("pb-map-icon"),this.subscribeTo("pb-update-map",t=>{this._markerLayer.clearLayers(),t.detail.forEach(t=>{const e=L.marker([t.latitude,t.longitude]);t.label&&e.bindTooltip(t.label),e.addEventListener("click",()=>{this.emitTo("pb-leaflet-marker-click",t)}),e.bindTooltip(t.label),this.setMarkerIcon(e),this._markerLayer.addLayer(e)}),this._fitBounds()}),this.subscribeTo("pb-update",t=>{this._markerLayer.clearLayers();t.detail.root.querySelectorAll("pb-geolocation").forEach(t=>{const e=L.latLng(t.latitude,t.longitude),i=L.marker(e).addTo(this._markerLayer);t.label&&i.bindTooltip(t.label),t.popup&&i.bindPopup(t.popup),i.addEventListener("click",()=>{this.emitTo("pb-leaflet-marker-click",t)}),this.setMarkerIcon(i)}),this._fitBounds()}),this.subscribeTo("pb-geolocation",t=>{if(t.detail.coordinates){if(this.latitude=t.detail.coordinates.latitude,this.longitude=t.detail.coordinates.longitude,this._hasMarker(this.latitude,this.longitude))console.log("<pb-leaflet-map> Marker already added to map");else{const e=L.marker([this.latitude,this.longitude]);e.addEventListener("click",()=>{this.emitTo("pb-leaflet-marker-click",t.detail.element)}),t.detail.label&&e.bindTooltip(t.detail.label),t.detail.popup&&e.bindPopup(t.detail.popup),this.setMarkerIcon(e),e.addTo(this._markerLayer),t.detail.fitBounds&&this._fitBounds(),console.log("<pb-leaflet-map> added marker")}this.toggle&&(this.disabled=!1);const e=t.detail.event;this._locationChanged(this.latitude,this.longitude,t.detail.zoom,e)}})}setMarkerIcon(t){this._icons&&this._icons.default&&t.setIcon(this._icons.default)}firstUpdated(){this.toggle||(this.disabled=!1),window.ESGlobalBridge.requestAvailability();const t=i("../lib/leaflet-src.js"),e=i("../lib/leaflet.markercluster-src.js");window.ESGlobalBridge.instance.load("leaflet",t).then(()=>window.ESGlobalBridge.instance.load("plugin",e)),window.addEventListener("es-bridge-plugin-loaded",this._initMap.bind(this),{once:!0})}render(){const t=i(this.cssPath);return s`
            <link rel="Stylesheet" href="${t}/leaflet.css">
            <link rel="Stylesheet" href="${t}/MarkerCluster.Default.css">
            <div id="map" style="height: 100%; width: 100%"></div>
        `}static get styles(){return a`
            :host {
                display: block;
            }

            :host([disabled]) {
                visibility: hidden;
            }

            .close {
                border-radius: 4px;
                background-color: #fff;
                color: inherit;
                padding: 8px;
                font-size: 18px;
                font-weight: bold;
                text-decoration: none;
                cursor: pointer;
            }
        `}_initMap(){if(this._map)return;L.Icon.Default.imagePath=i(this.imagesPath);const t=L.CRS[this.crs]||L.CRS.EPSG3857;if(this._map=L.map(this.shadowRoot.getElementById("map"),{zoom:this.zoom,center:L.latLng(this.latitude,this.longitude),crs:t}),this._configureLayers(),this._configureMarkers(),this.cluster){const t={};this.disableClusteringAt&&(t.disableClusteringAtZoom=this.disableClusteringAt),this._markerLayer=L.markerClusterGroup(t)}else this._markerLayer=L.layerGroup();if(this._markerLayer.addTo(this._map),this.signalReady(),L.control.scale().addTo(this._map),this.toggle){let t;L.Control.CloseButton=L.Control.extend({options:{position:"topright"},onAdd:e=>(t=L.DomUtil.create("div"),t.className="close",t.innerHTML="X",L.DomEvent.on(t,"click",this._hide.bind(this)),t),onRemove:e=>{L.DomEvent.off(t,"click",this._hide.bind(this))}}),L.control.closeButton=t=>new L.Control.CloseButton(t),L.control.closeButton({position:"topright"}).addTo(this._map)}}_configureMarkers(){0!==this._markers.length&&(this._icons={},this._markers.forEach(t=>{t.iconUrl&&(this._icons[t.name]=L.icon(t.options))}))}_configureLayers(){if(0===this._layers.length)return void L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',maxZoom:18,zoomOffset:-1,tileSize:512,accessToken:this.accessToken}).addTo(this._map);const t=L.control.layers(null,null,{collapsed:!1});this._layers.forEach(e=>{let i;switch(e.type){case"geojson":e.data().then(s=>{i=L.geoJSON([s]),this._addLayer(e,i,t)});break;default:i=L.tileLayer(e.url,e.options),this._addLayer(e,i,t)}}),this._layers.length>1&&t.addTo(this._map),this._layers=null}_addLayer(t,e,i){t.show&&e.addTo(this._map),t.label&&(t.base?i.addBaseLayer(e,t.label):i.addOverlay(e,t.label))}_fitBounds(){if(!this.fitMarkers)return;const t=L.latLngBounds();let e=0;this._markerLayer.eachLayer(i=>{t.extend(i.getLatLng()),e+=1}),0===e?this._map.fitWorld():1===e?this._map.fitBounds(t,{maxZoom:this.zoom}):this._map.fitBounds(t)}_locationChanged(t,e,i,s){if(this._map){const a=L.latLng([t,e]);this._markerLayer.eachLayer(t=>{t.getLatLng().equals(a)?(i&&!this.noScroll?(t.openTooltip(),this._map.setView(a,i)):this.cluster?this._markerLayer.zoomToShowLayer(t,()=>t.openTooltip()):(t.openTooltip(),this._map.setView(a,this.zoom)),s&&this._icons&&this._icons.active&&t.setIcon(this._icons.active)):this._icons&&this._icons.default&&t.getIcon()!==this._icons.default&&t.setIcon(this._icons.default)})}}_hasMarker(t,e){const i=L.latLng([t,e]);let s=null;return this._markerLayer.eachLayer(t=>{t instanceof L.Marker&&t.getLatLng().equals(i)&&(s=t)}),s}_hide(){this.disabled=!0}}customElements.define("pb-leaflet-map",c);export{c as PbLeafletMap};
