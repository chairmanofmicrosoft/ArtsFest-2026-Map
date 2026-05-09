// Create map background --------------------
const map = L.map('map', {
	crs: L.CRS.Simple,
	minZoom: 1,
	zoomControl: false,
	attributionControl: false
});
const imageBounds = [[0, 0], [232.9, 297.1]];
L.imageOverlay('Elements/map.png', imageBounds).addTo(map);
map.fitBounds(imageBounds);

// Create watermark --------------------		
L.Control.Watermark=L.Control.extend({
	onAdd:function(map){
		const container = L.DomUtil.create('div');
		const link = L.DomUtil.create('a', '', container);
		link.href = 'https://rihad.framer.website';
		link.target = '_blank';
		const img = L.DomUtil.create('img', '', link);
		img.src = 'Elements/logo.svg';
		img.style.width = '250px';
		img.style.opacity = 0.75;
		img.alt = 'ArtsFest Logo';
		return container;
	},
	onRemove:function(map){},
});
L.control.watermark = function(opts){
	return new L.Control.Watermark(opts);
}
L.control.watermark({position:'topleft'}).addTo(map);

// Create zoom buttons --------------------
const zoom = L.control.zoom({
	position: 'bottomright'
}).addTo(map);
