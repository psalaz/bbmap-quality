var mapTitle = '';
	
var mapLegends =
{
	'comcast_prov_wline': {
		range: ['0', '1', '2', '>=3']
	},
	'comcast_spd_wline': {
		range: ['0', '1', '2', '3']
	},
	'att_prov_wline': {
		range: ['0', '1', '2', '>=3']
	},
	'att_spd_wline': {
		range: ['0', '1', '2', '3']
	},
	'platinum_prov_wline': {
		range: ['0', '1', '2', '>=3']
	},
	'platinum_spd_wline': {
		range: ['0', '1', '2', '3']
	},
	'verizon_prov_wline': {
		range: ['0', '1', '2', '>=3']
	},
	'verizon_spd_wline': {
		range: ['0', '1', '2', '3']
	},
	'verizon_prov_wless': {
		range: ['0', '0 - 1', '1 - 2', '>=2']
	},
	'verizon_spd_wless': {
		range: ['0', '0 - 0.5', '0.5 - 1', '>=1']
	},
	'att_prov_wless': {
		range: ['0', '0 - 1', '1 - 2', '>=2']
	},
	'att_spd_wless': {
		range: ['0', '0 - 0.5', '0.5 - 1', '>=1']
	},
	'sprint_prov_wless': {
		range: ['0', '0 - 1', '1 - 2', '>=2']
	},
	'sprint_spd_wless': {
		 range: ['0', '0 - 0.5', '0.5 - 1', '>=1']
	},
	'tmobile_prov_wless': {
		range: ['0', '0 - 1', '1 - 2', '>=2']
	},
	'tmobile_spd_wless': {
		 range: ['0', '0 - 0.5', '0.5 - 1', '>=1']
	}	
}
	
jQuery(document).ready(function () {

    // Contextual layer switching
    jQuery('ul.macro li a').click(function (e) {
        var mapID = this.id;
		var mapTitle = jQuery(this).text();	
		
		e.preventDefault();

        if (this.id == 'sprint_prov_wless') {
            activeLayers = ['map-076utqme'];
        }
        if (this.id == 'sprint_spd_wless') {
            activeLayers = ['map-597o7gli'];
        }
        if (this.id == 'verizon_prov_wless') {
            activeLayers = ['map-epwciii0'];
        }
        if (this.id == 'verizon_spd_wless') {
            activeLayers = ['map-8v5cd9fb'];
        }
        if (this.id == 'att_prov_wless') {
            activeLayers = ['map-mm1fgzfr'];			
        }
        if (this.id == 'att_spd_wless') {
            activeLayers = ['map-cbpn6uie'];
        }
        if (this.id == 'tmobile_prov_wless') {
            activeLayers = ['map-opdthzue'];
        }
        if (this.id == 'tmobile_spd_wless') {
            activeLayers = ['map-exmmkhqd'];
        }
        if (this.id == 'verizon_prov_wline') {
            activeLayers = ['map-x5ojy519'];
        }
        if (this.id == 'verizon_spd_wline') {
            activeLayers = ['map-lawz7p93'];
        }
        if (this.id == 'att_prov_wline') {
            activeLayers = ['map-m8fqsyeu'];
        }
        if (this.id == 'att_spd_wline') {
            activeLayers = ['map-ndcx8po2'];
        }
        if (this.id == 'platinum_prov_wline') {
            activeLayers = ['map-jxeufl2e'];
        }
        if (this.id == 'platinum_spd_wline') {
            activeLayers = ['map-pwq8zgj6'];
        }
        if (this.id == 'comcast_prov_wline') {
            activeLayers = ['map-twjczcyi'];
        }
        if (this.id == 'comcast_spd_wline') {
            activeLayers = ['map-s91ty0ri'];
        }
		
		displayLegend(this.id, mapTitle);
        jQuery('ul.macro li a').removeClass('active');
        jQuery(this).addClass('active');

        layers = [activeLayers];
        layers = layers.join(',');
        refreshMap();
    });

    jQuery('form.location-search').submit(function (e) {
        e.preventDefault();
        var inputValue = input.val(),
            encodedInput = encodeURIComponent(inputValue);
        geocode(encodedInput);
    });

});

var raceData = [];
var ageData = [];
var incomeData = [];

var interaction;
// Define the layers and other map variables
var layers = [
    'map-twjczcyi'],
    //cleanLayers;
    //cleanLayers = $.compact(layers);
    layers = layers.join(',');
var urlBase = jQuery.map(['a', 'b', 'c', 'd'], function (sub) {
    return 'http://' + sub + '.tiles.mapbox.com/computech/1.0.0/' + layers + '/';
    //a.tiles.mapbox.com/fcc/1.0.0/800-mhz-cellular-a-block-cgsa/layer.json
}),
    mm = com.modestmaps,
    m, test;

// Update tiles array
function getTiles() {
    return jQuery.map(urlBase, function (base) {
        return base + '{z}/{x}/{y}.png';
    });
};

// Update grid array

function getGrids() {
    return jQuery.map(urlBase, function (base) {
        return base + '{z}/{x}/{y}.grid.json';
    });
};

// Refresh Map

function refreshMap() {
    urlBase = jQuery.map(['a', 'b', 'c', 'd'], function (sub) {
        return 'http://' + sub + '.tiles.mapbox.com/computech/1.0.0/' + layers + '/';
    });
    wax.tilejson(urlBase[0] + 'layer.json', function (tilejson) {
        tilejson.minzoom = 3;
        tilejson.maxzoom = 10;
        tilejson.tiles = getTiles();
        tilejson.grids = getGrids();
        
        m.setProvider(new wax.mm.connector(tilejson));
    });
}

function mapChange() {
    if (!jQuery('#a-block').hasClass('active')) {
        jQuery('#b-block').removeClass('active');
        jQuery('#a-block').addClass('active');

        layers = [
        800 - mhz - cellular - a - block - cgsa];
        cleanLayers = $.compact(layers);
        layers = cleanLayers.join(',');
        refreshMap();
    } else {
        jQuery('#a-block').removeClass('active');
        jQuery('#b-block').addClass('active');

        layers = [
        800 - mhz - cellular - b - block - cgsa];
        cleanLayers = $.compact(layers);
        layers = cleanLayers.join(',');
        refreshMap();
    }
}

// Send address to MapQuest's Nominatim search

function geocode(query) {
    
    $.ajax({
        url: 'http://open.mapquestapi.com/nominatim/v1/search?format=json&json_callback=callback&countrycodes=us&limit=1&q=' + query,
        type: 'jsonp',
        jsonpCallback: 'callback',
        success: function (value) {
            value = value[0];
            jQuery('.loading').remove();
            if (value === undefined) {
                errorBox('<p>The search you tried did not return a result.</p>');
            } else {
                if (value.type == 'state' || value.type == 'county' || value.type == 'maritime' || value.type == 'country') {
                    easey.slow(m, {
                        location: new mm.Location(value.lat, value.lon),
                        zoom: 6,
                        time: 2000
                    });
                } else {
                    easey.slow(m, {
                        location: new mm.Location(value.lat, value.lon),
                        zoom: 8,
                        time: 2000
                    });
                }
                jQuery('.error').remove();
            }
        }
    });
}

function displayLegend(mpID, mpTitle) { 
	var legendKey = jQuery('#map-legend').find('.lbl-key');
	
	jQuery('#map-legend').find('h4').text(mpTitle);

	for (var i = 0; i <= 3; i++) {		
		legendKey.eq(i).empty().append(mapLegends[mpID].range[i]);
	} 
}

// Show error message
function errorBox(reason) {
    jQuery('form.location-search').append('<div class="error">' + reason + '<a href="#" class="close">x</a><div>');
    jQuery('a.close').click(function (e) {
        e.preventDefault();
        jQuery('.error').remove();
    });
}



function numberWithCommas(x) {
    if (x != null && typeof (x) != 'undefined') {
        return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    } else {
        return "0";
    }

}

// Set up tilejson object of map settings
wax.tilejson(urlBase[0] + 'layer.json', function (tilejson) {
    tilejson.tiles = getTiles();
    tilejson.grids = getGrids();
    tilejson.minzoom = 3;
    tilejson.maxzoom = 10;

    // Build the map
    m = new mm.Map('map',
    new wax.mm.connector(tilejson),
    null, [
    new mm.MouseHandler(),
    new mm.TouchHandler()]);
    m.setCenterZoom(new mm.Location(39, -95), 4);    

    m.addCallback("drawn", function (m) {
        b.setCenterZoom(m.getCenter(), m.getZoom());
    });
    m.setProvider(new wax.mm.connector(tilejson));
    wax.mm.attribution(m, tilejson).appendTo(m.parent);
    wax.mm.zoomer(m, tilejson).appendTo(jQuery('#controls')[0]);
    wax.mm.bwdetect(m, {
        auto: true,
        png: '.png64?'
    });
});



// Handle geocoder form submission
var input = jQuery('.location-search input[type=text]');
inputTitle = 'Enter a place or zip code';
input.val(inputTitle);

// Remove default val on blur
input.blur(function () {
    if (input.val() === '') {
        input.val(inputTitle);
    }
}).focus(function () {
    if (input.val() === inputTitle) {
        input.val('');
    }
});