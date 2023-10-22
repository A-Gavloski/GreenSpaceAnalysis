//ontario campuses shapefile extraction script
//Google Earth Engine 



////University of Toronto campus shapefile////
// Define the polygon
var uot = ee.Geometry.Polygon(
  [[[-79.40368532425492, 43.66665190288876],
    [-79.39999852015175, 43.65789979202973],
    [-79.39060005976357, 43.65977817642511],
    [-79.39107212855019, 43.660709584909796],
    [-79.39156565500893, 43.66083377161605],
    [-79.39212355448403, 43.66131499267652],
    [-79.39291748835244, 43.66320879293912],
    [-79.39044985605874, 43.66364342719367],
    [-79.38720974756875, 43.664388507166294],
    [-79.38954863382973, 43.669650371190315]]]);

// Convert the geometry to a feature
var feature = ee.Feature(uot, {});

// Create a feature collection containing the polygon
var featureCollection = ee.FeatureCollection([feature]);

// Export the feature collection as a shapefile
Export.table.toDrive({
  collection: featureCollection,
  description: 'UoT_Polygon', // Set the description to 'UoT_Polygon' or any other name you prefer
  folder: 'EE_exports',
  fileFormat: 'SHP'
});



//waterloo campus shapefile
// Define the polygon
var waterloo = ee.Geometry.Polygon(
  [[[-80.5581166836632, 43.470357694366236],
          [-80.5535247418297, 43.46894058162463],
          [-80.55187250107653, 43.46914302833624],
          [-80.55032754868395, 43.469111882732435],
          [-80.54912591904528, 43.46878485292351],
          [-80.54633760988351, 43.46628823542142],
          [-80.54135942995187, 43.46437266046246],
          [-80.53985739290353, 43.46680215983895],
          [-80.53712560396714, 43.46708731735509],
          [-80.53620292406602, 43.4681307212939],
          [-80.52980397730171, 43.472121522609974],
          [-80.5316922524482, 43.47375656369119],
          [-80.53400968103706, 43.47296240640527],
          [-80.53628419428169, 43.47216823868332],
          [-80.5399963715583, 43.47702651314592],
          [-80.54293607263862, 43.47604554688864],
          [-80.54499600916206, 43.480265145800104],
          [-80.54508183985054, 43.482631729115106],
          [-80.54456685571968, 43.48548084787952],
          [-80.54581140070259, 43.48568323918268],
          [-80.54679845362007, 43.48557425933446],
          [-80.55463050394356, 43.48291197626345],
          [-80.55593942194282, 43.48289640701153],
          [-80.56068156748115, 43.48425091691771],
          [-80.56226943521797, 43.48453115655486],
          [-80.56527350931465, 43.48345689755266],
          [-80.56215678243935, 43.47877041383786],
          [-80.56269322424232, 43.474083566599155],
          [-80.56943093328773, 43.47100032601637],
          [-80.56621228246986, 43.46768333097708]]]);

// Convert the geometry to a feature
var feature = ee.Feature(waterloo, {});

// Create a feature collection containing the polygon
var featureCollection = ee.FeatureCollection([feature]);

// Export the feature collection as a shapefile
Export.table.toDrive({
  collection: featureCollection,
  description: 'waterloo_Polygon', // Set the description to 'UoT_Polygon' or any other name you prefer
  folder: 'EE_exports',
  fileFormat: 'SHP'
});




// University of Guelph
var guelph = ee.Geometry.Polygon(
  [[[-80.2338696140052, 43.51984564557099],
          [-80.22454559321498, 43.526624439877764],
          [-80.20717401817735, 43.53987838251159],
          [-80.21468420341905, 43.54532223316556],
          [-80.23060579613146, 43.533500675122006],
          [-80.23167867973741, 43.53381179844937],
          [-80.23292322472032, 43.5339362473309],
          [-80.23429651573595, 43.53343845026392],
          [-80.23240824058946, 43.53210060028567],
          [-80.2416350396007, 43.525504254907794],
          [-80.23691435173448, 43.521925746892656]]]);

// Convert the geometry to a feature
var feature = ee.Feature(guelph, {});

// Create a feature collection containing the polygon
var featureCollection = ee.FeatureCollection([feature]);

// Export the feature collection as a shapefile
Export.table.toDrive({
  collection: featureCollection,
  description: 'UoG_Polygon', // Set the description to 'UoT_Polygon' or any other name you prefer
  folder: 'EE_exports',
  fileFormat: 'SHP'
});



//York university
var york = ee.Geometry.Polygon(
  [[[-79.51695361063531, 43.77637920507999],
          [-79.51652445719293, 43.77524817502947],
          [-79.51598801538995, 43.77451996627921],
          [-79.51482930109552, 43.77346637196571],
          [-79.51442160532525, 43.77300154504398],
          [-79.51375641748956, 43.77188594569112],
          [-79.51259278535997, 43.77078582039497],
          [-79.51205634355699, 43.770429437438416],
          [-79.51169156313097, 43.770289982659946],
          [-79.51151990175401, 43.769840626161965],
          [-79.51100491762315, 43.769794140814305],
          [-79.51064013719713, 43.76912784686106],
          [-79.50722545360726, 43.76575372644058],
          [-79.50451105808419, 43.766389065979894],
          [-79.50500458454293, 43.76750476786509],
          [-79.50482219432992, 43.76762873345663],
          [-79.49270184440951, 43.77014168719865],
          [-79.4946724465411, 43.77819524646702],
          [-79.49423405787194, 43.780619843240565],
          [-79.49439499041283, 43.78154937503563]]]);

// Convert the geometry to a feature
var feature = ee.Feature(york, {});

// Create a feature collection containing the polygon
var featureCollection = ee.FeatureCollection([feature]);

// Export the feature collection as a shapefile
Export.table.toDrive({
  collection: featureCollection,
  description: 'york_Polygon', // Set the description to 'UoT_Polygon' or any other name you prefer
  folder: 'EE_exports',
  fileFormat: 'SHP'
});




//western university
var western = ee.Geometry.Polygon(
 [[[-81.28569357633813, 43.016161207332175],
          [-81.28329031706079, 43.01296056394305],
          [-81.29122965574487, 43.010732566643846],
          [-81.28165196641895, 43.00050296842529],
          [-81.27808999284717, 42.99384876788035],
          [-81.27465676530811, 42.99482183275137],
          [-81.27371262773487, 42.99347209347125],
          [-81.27040814622852, 42.994445164306455],
          [-81.26641701921436, 42.998870872724154],
          [-81.26976441606494, 42.99956138004241],
          [-81.26914368777763, 43.00131900001842],
          [-81.26772748141777, 43.001915323943905],
          [-81.26755582004081, 43.00266856694518],
          [-81.26708375125419, 43.00404948846206],
          [-81.26755582004081, 43.00549314595027],
          [-81.26712666659843, 43.006528792379534],
          [-81.26536713748466, 43.0069367695123],
          [-81.26068936496269, 43.00844312314522],
          [-81.26453511697206, 43.01217388323361],
          [-81.2665950534955, 43.014088038064756],
          [-81.26904122811708, 43.01471561682554],
          [-81.27200238686952, 43.01631591363689],
          [-81.27672307473573, 43.014966646534106],
          [-81.27839677316102, 43.01851233155409]]]);

// Convert the geometry to a feature
var feature = ee.Feature(western, {});

// Create a feature collection containing the polygon
var featureCollection = ee.FeatureCollection([feature]);

// Export the feature collection as a shapefile
Export.table.toDrive({
  collection: featureCollection,
  description: 'western_Polygon', // Set the description to 'UoT_Polygon' or any other name you prefer
  folder: 'EE_exports',
  fileFormat: 'SHP'
});





//Mcmaster university
var mcmaster = ee.Geometry.Polygon(
 [[[-79.92228656398586, 43.25769092884937],
          [-79.91608529674343, 43.2579409630844],
          [-79.91606383907131, 43.258862955452656],
          [-79.915827804678, 43.25934738652594],
          [-79.91584926235012, 43.262535159389735],
          [-79.91546302425198, 43.26359771325402],
          [-79.91423993694119, 43.26378522083439],
          [-79.91327434169582, 43.26473837543813],
          [-79.91284518825344, 43.26559776433607],
          [-79.91308122264675, 43.26609776683928],
          [-79.91361766444973, 43.26636339149867],
          [-79.90999787974029, 43.26791527762592],
          [-79.9096760146585, 43.26874337301168],
          [-79.91025537180572, 43.26910273165487],
          [-79.91422504114776, 43.26838401224682],
          [-79.91478294062286, 43.26841526109321],
          [-79.91645663904815, 43.26796215125042],
          [-79.91836637186675, 43.26669655071856],
          [-79.91883844065337, 43.26624342808173],
          [-79.91973966288238, 43.26625905305638],
          [-79.92016881632476, 43.26599342794171],
          [-79.91999715494781, 43.265509049748644],
          [-79.91988986658721, 43.26521217088653],
          [-79.92008298563628, 43.26483716393859],
          [-79.91978257822662, 43.26457153261939],
          [-79.92064088511138, 43.26346211869826],
          [-79.92134935237472, 43.263212372266125],
          [-79.92190725184982, 43.26363426618022],
          [-79.92255098201339, 43.265009307532246],
          [-79.92461091853683, 43.26652494212783],
          [-79.92538339473312, 43.26613431826433],
          [-79.92643580828992, 43.26533743781014],
          [-79.92916093264905, 43.266431192629184],
          [-79.9298904935011, 43.265743691894166],
          [-79.92941842471448, 43.26530618738369],
          [-79.92877469455091, 43.26485305439729],
          [-79.92875323687879, 43.2644624198053],
          [-79.92871032153455, 43.263978029429964],
          [-79.92862449084608, 43.263618640531845],
          [-79.92907510196058, 43.26332175245052],
          [-79.92982612048475, 43.26314986921538],
          [-79.93096337710706, 43.26293110803242],
          [-79.93197188769666, 43.261774785863885],
          [-79.93203626071302, 43.26083721122612],
          [-79.93231521045057, 43.26032153902104],
          [-79.93184314166395, 43.260024634861125],
          [-79.93126378451673, 43.26010276767517],
          [-79.93070588504163, 43.260462177328314],
          [-79.92967591677991, 43.261681029049846],
          [-79.92804513369886, 43.26144663638302],
          [-79.92680058871595, 43.26179041198553],
          [-79.92665038501111, 43.26224356776842],
          [-79.9240540066847, 43.26254046110768],
          [-79.92298147748826, 43.258965989873076]]]);

// Convert the geometry to a feature
var feature = ee.Feature(mcmaster, {});

// Create a feature collection containing the polygon
var featureCollection = ee.FeatureCollection([feature]);

// Export the feature collection as a shapefile
Export.table.toDrive({
  collection: featureCollection,
  description: 'mcmaster_Polygon', // Set the description to 'UoT_Polygon' or any other name you prefer
  folder: 'EE_exports',
  fileFormat: 'SHP'
});




//Queens university
var queens = ee.Geometry.Polygon(
 [[[-76.50118482094132, 44.22232351484514],
          [-76.50084149818741, 44.22190832349818],
          [-76.4984811542543, 44.22184681341996],
          [-76.49498355369889, 44.22216974061358],
          [-76.4902843235048, 44.22192370100768],
          [-76.49026286583268, 44.222723325967415],
          [-76.49058473091446, 44.22519901899221],
          [-76.49092805366837, 44.22882779700559],
          [-76.4911091865959, 44.229611952689524],
          [-76.49565821308516, 44.22991946187067],
          [-76.49846916813277, 44.22985796016297],
          [-76.50166636127852, 44.22968883013542]]]);

// Convert the geometry to a feature
var feature = ee.Feature(queens, {});

// Create a feature collection containing the polygon
var featureCollection = ee.FeatureCollection([feature]);

// Export the feature collection as a shapefile
Export.table.toDrive({
  collection: featureCollection,
  description: 'queens_Polygon', // Set the description to 'UoT_Polygon' or any other name you prefer
  folder: 'EE_exports',
  fileFormat: 'SHP'
});




//Ryerson University
var ryerson = ee.Geometry.Polygon(
 [[[-79.3745735718944, 43.657086020980735],
          [-79.37671860632649, 43.66242666978111],
          [-79.38180407461873, 43.66135557941118],
          [-79.38313445029011, 43.66135557941118],
          [-79.38588266326, 43.660821955924995],
          [-79.38374044846965, 43.655727519151974],
          [-79.38033815015329, 43.65644164845658],
          [-79.3787717400886, 43.65614668303416]]]);

// Convert the geometry to a feature
var feature = ee.Feature(ryerson, {});

// Create a feature collection containing the polygon
var featureCollection = ee.FeatureCollection([feature]);

// Export the feature collection as a shapefile
Export.table.toDrive({
  collection: featureCollection,
  description: 'ryerson_Polygon', // Set the description to 'UoT_Polygon' or any other name you prefer
  folder: 'EE_exports',
  fileFormat: 'SHP'
});




//University of Ottawa
var ottawa = ee.Geometry.Polygon(
 [[[-75.68732492001213, 45.423352894841656],
          [-75.68646661312737, 45.4225998727455],
          [-75.68352691204704, 45.42113898123557],
          [-75.68043700726189, 45.41951237714155],
          [-75.67826978237785, 45.418729180679385],
          [-75.67545882733025, 45.4197382971791],
          [-75.67666045696892, 45.42147032076885],
          [-75.67801229031242, 45.42094318877919],
          [-75.68198195965446, 45.42561190086633],
          [-75.68326436046922, 45.425084807545964],
          [-75.68416558269823, 45.42600345271839],
          [-75.6854745006975, 45.425506482595985],
          [-75.68628989223802, 45.42642512090638],
          [-75.68770609859789, 45.42588297551472],
          [-75.68744860653246, 45.42543118371092],
          [-75.68757735256517, 45.42452758925586],
          [-75.68759881023729, 45.423834823712134]]]);

// Convert the geometry to a feature
var feature = ee.Feature(ottawa, {});

// Create a feature collection containing the polygon
var featureCollection = ee.FeatureCollection([feature]);

// Export the feature collection as a shapefile
Export.table.toDrive({
  collection: featureCollection,
  description: 'ottawa_Polygon', // Set the description to 'UoT_Polygon' or any other name you prefer
  folder: 'EE_exports',
  fileFormat: 'SHP'
});




//Carleton University
var carleton = ee.Geometry.Polygon(
 [[[-75.69578672342791, 45.39236614910094],
          [-75.69613004618182, 45.39363189778768],
          [-75.69926286631122, 45.39179353919164],
          [-75.70058014872384, 45.389563318982844],
          [-75.69916394236398, 45.38519303773682],
          [-75.69955018046213, 45.38425865790559],
          [-75.70191052439523, 45.3803702663071],
          [-75.7013097095759, 45.37874248809321],
          [-75.69997933390451, 45.379465950862595],
          [-75.69710400584054, 45.38142528271194],
          [-75.69281247141672, 45.38290227260524],
          [-75.68903592112375, 45.38374624950585]]]);

// Convert the geometry to a feature
var feature = ee.Feature(carleton, {});

// Create a feature collection containing the polygon
var featureCollection = ee.FeatureCollection([feature]);

// Export the feature collection as a shapefile
Export.table.toDrive({
  collection: featureCollection,
  description: 'carleton_Polygon', // Set the description to 'UoT_Polygon' or any other name you prefer
  folder: 'EE_exports',
  fileFormat: 'SHP'
});

