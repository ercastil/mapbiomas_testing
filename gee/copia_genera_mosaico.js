HOLA 2.0
var fill_NO_DATA_with_year_mosaic = false; // true ou false to fill NO DATA with year info
xixi gang
  var grids = ["SF-19-Z-A"]; //
  var dir_out = 'projects/mapbiomas-chile/assets/MOSAICS/';

HOLA :P FELIPE LEPIN 
var blackList = [
    'LT05_126061_20040812', //example
	'LT05_126061_20040712', // nueva imagen en lista negra 
    ];
    

//var years = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018'];
//var sensors = ['L7','L7'  ,'L7'  ,'LX'  ,'LX'  ,'LX'  ,'LX'  ,'LX'  ,'LX'  ,'LX'  ,'LX'  ,'LX'  ,'L7'  ,'L8'  ,'L8'  ,'L8'  ,'L8'  ,'L8'  ,'L8'];


var years = ['2003'];
var sensors = ['LX'];

var month_ini = '01';
var month_fim = '12';

var buffer_grid = 100;

var dry_percent = 25;
var wet_percent = 75;

var cc = 100; //Cloud Cover

var aditional_cloud_filter = true; // true ou false to add yearther cloud filter
var add_layers = true; // true ou false to add layers to Map

var biome = 'CHILE';
var image_wet_visible = true; // true ou false add median wet landsat image visible
var image_dry_visible = true; // true ou false add median dry landsat image visible
var image_year_visible = true;  // true ou false add median year landsat image visible

/*

cloudThresh: If using the cloudScoreTDOMShift method-Threshold for cloud 
    masking (lower number masks more clouds.  Between 10 and 30 generally 
    works best)
    
dilatePixels: Number of pixels to buffer clouds and cloud 
    shadows by (1 or 2 generally is sufficient)
    
cloudHeights: Height of clouds to use to project cloud shadows
 
zScoreThresh: Threshold for cloud shadow masking- lower number masks out 
    less.  Between -0.8 and -1.2 generally works well
    
shadowSumThresh: Sum of IR bands to include as shadows within TDOM and the 
    shadow shift method (lower number masks out less)
    
*/
var cloudThresh = 50;
var dilatePixels = 2;
var cloudHeights = [200, 700, 1200, 1700, 2200, 2700, 3200, 3700, 4200, 4700];
var zScoreThresh = -1;
var shadowSumThresh = 0.5;

var assetgrid = 'projects/mapbiomas-workspace/AUXILIAR/cim-world-1-250000';

var gridNames = [
        "SE-19-V-D", "SE-19-Y-B", "SE-19-Y-D", "SE-19-Z-C",
        "SF-19-Y-D", "SF-19-Z-C", "SF-19-Z-D", "SG-19-V-A",
        "SG-19-Z-A", "SG-19-Y-C", "SG-19-Y-D", "SG-19-Z-C",
        "SI-19-V-A", "SI-19-V-B", "SI-19-V-C", "SI-19-V-D",
        "SJ-19-V-B", "SJ-18-X-C", "SJ-18-X-D", "SJ-19-V-C",
        "SK-18-X-C", "SK-18-X-D", "SK-19-V-C", "SK-18-Z-A",
        "SL-18-V-D", "SL-18-X-C", "SL-18-X-D", "SL-19-V-C",
        "SM-18-V-B", "SM-18-X-A", "SM-18-X-B", "SM-18-V-D",
        "SM-19-Y-C", "SM-19-Y-D", "SN-18-V-B", "SN-18-X-A",
        "SN-19-X-C", "SN-18-Z-B", "SN-19-Y-A", "SN-19-Y-B",
        "SF-19-V-B", "SF-19-X-A", "SF-19-V-D", "SF-19-X-C",
        "SF-19-Y-B", "SF-19-Z-A", "SF-19-Z-B", "SF-19-Y-C",
        "SG-19-V-B", "SG-19-X-A", "SG-19-X-B", "SG-19-V-C",
        "SG-19-V-D", "SG-19-X-C", "SG-19-Y-A", "SG-19-Y-B",
        "SH-19-V-A", "SH-19-V-B", "SH-19-V-C", "SH-19-V-D",
        "SH-19-Y-A", "SH-19-Y-B", "SH-19-Y-C", "SH-19-Y-D",
        "SI-18-Z-B", "SI-19-Y-A", "SI-19-Y-B", "SI-18-Z-D",
        "SI-19-Y-C", "SI-19-Y-D", "SJ-18-X-B", "SJ-19-V-A",
        "SJ-18-Z-B", "SJ-19-Y-A", "SJ-18-Z-C", "SJ-18-Z-D", "SJ-18-Z-A",
        "SJ-19-Y-C", "SK-18-X-A", "SK-18-X-B", "SK-19-V-A",
        "SK-18-Z-B", "SK-19-Y-A", "SK-18-Z-C", "SK-18-Z-D", "SL-18-V-B",
        "SK-19-Y-C", "SL-18-X-A", "SL-18-X-B", "SL-19-V-A",
        "SL-18-Y-B", "SL-18-Z-A", "SL-18-Z-B", "SL-19-Y-A",
        "SL-18-Y-D", "SL-18-Z-C", "SL-18-Z-D", "SL-19-Y-C",
        "SM-18-X-C", "SM-18-X-D", "SM-18-Y-B", "SM-18-Z-A",
        "SM-18-Z-B", "SM-18-Y-D", "SM-18-Z-C", "SM-18-Z-D",
        "SN-18-X-B", "SN-19-V-A", "SN-19-V-B", "SN-19-X-A",
        "SN-18-X-C", "SN-18-X-D", "SN-19-V-C", "SN-19-V-D",
        "SN-19-Z-A", "SN-19-Z-B", "SN-19-Y-C", "SN-19-Y-D",
        "SN-19-Z-C", "SN-19-Z-D", "SG-12-Z-D"
    ];
 
  
var landgrid = ee.FeatureCollection(assetgrid).filter(ee.Filter.inList('name', gridNames));


///////////////////////////
//FUNCTION: cloudMask LX
// Máscara de nubes y sombras para L5/L7 (LX) - Collection 2 TOA
var cloudMaskLX = function(image) {
  var qa = image.select('QA_PIXEL');

  // Bits QA_PIXEL (L5/L7 C2 TOA):
  // 1: Dilated Cloud
  // 3: Cloud (high confidence)
  // 4: Cloud Shadow (high confidence)
  // 5: Snow (high confidence)
  var dilatedCloudBitMask = 1 << 1;
  var cloudBitMask        = 1 << 3;
  var cloudShadowBitMask  = 1 << 4;
  var snowBitMask         = 1 << 5;   // opcional

  // píxeles buenos: donde NINGUNO de esos bits está encendido
  var mask = qa.bitwiseAnd(dilatedCloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cloudBitMask).eq(0))
      .and(qa.bitwiseAnd(cloudShadowBitMask).eq(0))
      .and(qa.bitwiseAnd(snowBitMask).eq(0));  // comenta esta línea si quieres mantener nieve

  return image.updateMask(mask);
};

///////////////////////////
//FUNCTION: cloudMask L8
// Máscara de nubes y sombras para L8 - Collection 2 TOA
var cloudMaskL8 = function(image) {
  var qa = image.select('QA_PIXEL');

  // Bits QA_PIXEL (L8 C2 TOA):
  // 1: Dilated Cloud
  // 2: Cirrus (high confidence)
  // 3: Cloud (high confidence)
  // 4: Cloud Shadow (high confidence)
  // 5: Snow (high confidence)
  var dilatedCloudBitMask = 1 << 1;
  var cirrusBitMask       = 1 << 2;
  var cloudBitMask        = 1 << 3;
  var cloudShadowBitMask  = 1 << 4;
  var snowBitMask         = 1 << 5;   // opcional

  // píxeles buenos: donde esos bits son 0
  var mask = qa.bitwiseAnd(dilatedCloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0))
      .and(qa.bitwiseAnd(cloudBitMask).eq(0))
      .and(qa.bitwiseAnd(cloudShadowBitMask).eq(0))
      .and(qa.bitwiseAnd(snowBitMask).eq(0));  // comenta esta línea si quieres mantener nieve

  return image.updateMask(mask);
};

///////////////////////////
//FUNCTION: acquiring Landsat TOA image collection
function getImageCollection(limite,startDate,endDate,sensor,cc){
  var ls;var l4TOAs;var l5TOAs;var l7TOAs;var l8TOAs;var out;
  
  var sensorBandDictLandsatTOA = ee.Dictionary({
                        L8 : ee.List([1,2,3,4,5,9,6,'QA_PIXEL']),
                        L7 : ee.List([0,1,2,3,4,5,7,'QA_PIXEL']),
                        L5 : ee.List([0,1,2,3,4,5,6,'QA_PIXEL']),
                        L4 : ee.List([0,1,2,3,4,5,6,'QA_PIXEL'])
  });
  var bandNamesLandsatTOA = ee.List(['blue','green','red','nir','swir1','temp','swir2','QA_PIXEL']);

  l5TOAs = ee.ImageCollection('LANDSAT/LT05/C02/T1_TOA')
      .filterDate(startDate,endDate)
      .filterBounds(limite)
      .filterMetadata("CLOUD_COVER", "less_than", cc)
//      .filterMetadata("GEOMETRIC_RMSE_MODEL", "greater_than", 7.5)
      .select(sensorBandDictLandsatTOA.get('L5'), bandNamesLandsatTOA)
      .filter(ee.Filter.inList('system:index', blackList).not())

  
  l8TOAs = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA')
      .filterDate(startDate,endDate)
      .filterBounds(limite)
      .filterMetadata("CLOUD_COVER", "less_than", cc)
      .select(sensorBandDictLandsatTOA.get('L8'), bandNamesLandsatTOA)
      .filter(ee.Filter.inList('system:index', blackList).not())
      
  l7TOAs = ee.ImageCollection('LANDSAT/LE07/C02/T1_TOA')
      .filterDate(startDate,endDate)
      .filterBounds(limite)
      .filterMetadata("CLOUD_COVER", "less_than", cc)
      .select(sensorBandDictLandsatTOA.get('L7'), bandNamesLandsatTOA)
      .filter(ee.Filter.inList('system:index', blackList).not())
      
  if (sensor == 'L7') {
    ls = l7TOAs;
  } else if (sensor == 'L5') {
    ls = l5TOAs;
  } else if (sensor == 'LX') {
    ls = ee.ImageCollection(l5TOAs.merge(l7TOAs));
    } else {
    ls = l8TOAs;
  }
  out = ls;
  return out;
}

///////////////////////////
//FUNCTION: Border Remove
var clip_cena = function(img){
//    var tile = ee.String('T').cat(ee.String(img.get('WRS_PATH'))).cat(ee.String('0')).cat(ee.String(img.get('WRS_ROW')));
    var tile = ee.String(img.get('WRS_PATH')).cat(ee.String('0')).cat(ee.String(img.get('WRS_ROW')));
    var limite_img = landgrid.filterMetadata('WRSPR', 'equals', tile);
		return img.clip(limite_img.map(function(poli){return poli.buffer(1000)}));
  };

///////////////////////////
//FUNCTION: Create NDVI index
var NDVI = function(image) {
    var ndvi = image.expression('float(nir - red)/(nir + red)', {
        'nir': image.select('nir'),
        'red': image.select('red')
    }).multiply(100).byte(); // rescale NDVI from 0-200
  image = image.addBands(ndvi.select([0],['NDVI']));
  return image;
};

///////////////////////////
//FUNCTION: Add index
var AddIndex = function(image) {
  
   var ndvi = image.expression('float(nir - red)/(nir + red)', {
        'nir': image.select('nir'),
        'red': image.select('red')
    }).multiply(100).byte(); // rescale NDVI from 0-200
  image = image.addBands(ndvi.select([0],['NDVI']));
  
    var ndwi = image.expression('float(nir - swir1)/(nir + swir1)', {
        'nir': image.select('nir'),
        'swir1': image.select('swir1')
    }).multiply(100).byte();
  image = image.addBands(ndwi.select([0],['NDWI']));
  
    var savi = image.expression('float((1 + L) * float(nir - red)/(nir + red + L))', {
        'nir': image.select('nir').multiply(10000),
        'red': image.select('red').multiply(10000),
        'L': 0.5
    }).multiply(100).byte();
  image = image.addBands(savi.select([0],['SAVI']));
  
    var pri = image.expression('float(blue - green)/(blue + green)', {
        'blue': image.select('blue'),
        'green': image.select('green')
    }).multiply(100).byte();
  image = image.addBands(pri.select([0],['PRI']));
  
    var cai = image.expression("float(swir2 / swir1)", {
        'swir2': image.select('swir2'),
        'swir1': image.select('swir1')
    }).multiply(100).byte();
  image = image.addBands(cai.select([0],['CAI']));
  
    var evi2 = image.expression('float(2.5 * (nir - red)/(nir + 2.4 * red + 1))', {
        'nir': image.select('nir').multiply(10000),
        'red': image.select('red').multiply(10000),
    }).multiply(100).byte();
  image = image.addBands(evi2.select([0],['EVI2']));  

    var data = {'I1': image.select(['red']), 'I2': image.select(['nir']), 'I3': image.select(['swir1']), 'I4': image.select(['swir2'])};
    var expression = '(-I1*0.039 - I2*0.011 - I3*0.026 + 4.13)';
    var HallHeigth = image.expression(expression, data).exp().multiply(100);  
  image = image.addBands(HallHeigth.select([0],['HALL_HEIGHT']));


    data = {'I1': image.select(['red']), 'I2': image.select(['nir']), 'I3': image.select(['swir1']), 'I4': image.select(['swir2'])};
    expression = '(-I1*0.017 - I2*0.007 - I4*0.079 + 5.22)';
    var HallCover = image.expression(expression, data).exp().multiply(100);
  image = image.addBands(HallCover.select([0],['HALL_COVER']));
  
    data = {'NIR': image.select(['nir']).multiply(10000), 'GREEN': image.select(['green']).multiply(10000)};
    expression = 'NIR / GREEN - 1';
    var gcvi = image.expression(expression, data).multiply(100).byte();
  image = image.addBands(gcvi.select([0],['GCVI']));

  return image;
  
};

/*
=========================================================================================
FUNCTION NAME:
    getFractions L5 e 7
=========================================================================================
*/
var getFractions = function(image){
    // Define endmembers
    var bandas = ['blue','green','red','nir','swir1','swir2'];
//    var banda_cfmask = ['fmask']

    // Define atmosphere
    var atm = [0, 0, 0, 0, 0, 0];
    
    // Define endmembers
    var endmembers =
      [
      [ 119.0+atm[0], 475.0+atm[1], 169.0+atm[2],6250.0+atm[3],2399.0+atm[4], 675.0+atm[5]],// GV
      [1514.0+atm[0],1597.0+atm[1],1421.0+atm[2],3053.0+atm[3],7707.0+atm[4],1975.0+atm[5]],// NPV
      [1799.0+atm[0],2479.0+atm[1],3158.0+atm[2],5437.0+atm[3],7707.0+atm[4],6646.0+atm[5]],// Soil
      [4031.0+atm[0],8714.0+atm[1],7900.0+atm[2],8989.0+atm[3],7002.0+atm[4],6607.0+atm[5]] // Cloud
      ];
    
    // Uminxing data
    var fractions = ee.Image(image)
                  .multiply(10000)
                  .select(bandas)
                  .unmix(endmembers)
                  .max(0)
                  .multiply(100)
                  .byte();
    fractions = fractions.select([0,1,2,3],['gv','npv','soil','cloud']);

    var gv    = fractions.select('gv');
    var soil  = fractions.select('soil');
    var npv  = fractions.select('npv');
    var cloud = fractions.select('cloud');
    var summed = fractions.select(['gv', 'npv', 'soil', 'cloud']).reduce(ee.Reducer.sum());
    var shd = summed.subtract(100).abs().byte();
    var gvs = (gv.divide(summed)).multiply(100);
    var gvnpv = gv.add(npv);
    var gvsnpv = gvs.add(npv);
    var gvnpv_s = (gvnpv.divide(summed)).multiply(100);
    var npvSoil = npv.add(soil);
    var SoilShade = soil.add(shd);
    var gvshade = gv.add(shd);
    
    //calculate NDFI
    var ndfi = ee.Image.cat(gvs, npvSoil).normalizedDifference();
    ndfi = ndfi.multiply(100).add(100).byte();
    //calculate SEFI
    var sefi = ee.Image.cat(gvnpv_s, soil).normalizedDifference(); 
    sefi = sefi.multiply(100).add(100).byte();
    //calculate WEFI
    var wefi = ee.Image.cat(gvnpv, SoilShade).normalizedDifference(); 
    wefi = wefi.multiply(100).add(100).byte();    
    //calculate fns
    var fns = ee.Image.cat(gvshade, soil).normalizedDifference();
    fns = fns.multiply(100).add(100).byte();
    
    image = image.addBands(fractions);
    image = image.addBands(shd.select([0],['shade']));
    image = image.addBands(gvs.select([0],['gvs']));
    image = image.addBands(ndfi.select([0],['NDFI']));
    image = image.addBands(sefi.select([0],['SEFI']));
    image = image.addBands(wefi.select([0],['WEFI']));
    image = image.addBands(fns.select([0],['FNS']));
    return image;
};

/*
=========================================================================================
FUNCTION NAME:  cloudMask
=========================================================================================
*/

///////////////////////////////////////////////////////////////////////////////
// A helper to apply an expression and linearly rescale the output.
// Used in the landsatCloudScore function below.
var rescale = function(img, exp, thresholds) {
  return img.expression(exp, {img: img})
      .subtract(thresholds[0]).divide(thresholds[1] - thresholds[0]);
};

///////////////////////////////////////////////////////////////////////////////
// Compute a cloud score and adds a band that represents the cloud mask.  
// This expects the input image to have the common band names: 
// ["red", "blue", etc], so it can work across sensors.
function landsatCloudScore(img) {

  // Compute several indicators of cloudiness and take the minimum of them.
  var score = ee.Image(1.0);
  // Clouds are reasonably bright in the blue band.
  score = score.min(rescale(img, 'img.blue', [0.1, 0.3]));
 
  // Clouds are reasonably bright in all visible bands.
  score = score.min(rescale(img, 'img.red + img.green + img.blue', [0.2, 0.8]));
   
  // Clouds are reasonably bright in all infrared bands.
  score = score.min(
      rescale(img, 'img.nir + img.swir1 + img.swir2', [0.3, 0.8]));

  // Clouds are reasonably cool in temperature.
  score = score.where(img.select(['temp']).mask(),score.min(
    rescale(img, 'img.temp', [300, 290])));

  // However, clouds are not snow.
  var ndsi = img.normalizedDifference(['green', 'swir1']);
  score =  score.min(rescale(ndsi, 'img', [0.8, 0.6])).multiply(100).byte();
  score = score.lt(cloudThresh).rename('cloudMask');
  img = img.updateMask(img.mask().and(score));
  return img.addBands(score);
}

///////////////////////////////////////////////////////////////////////////////
//Function for finding dark outliers in time series.
//Original concept written by Carson Stam and adapted by Ian Housman.
//Adds a band that is a mask of pixels that are dark, and dark outliers.
function simpleTDOM2(collection,zScoreThresh,shadowSumThresh,dilatePixels){
  var shadowSumBands = ['nir','swir1'];
  
  //Get some pixel-wise stats for the time series
  var irStdDev = collection.select(shadowSumBands).reduce(ee.Reducer.stdDev());
  var irMean = collection.select(shadowSumBands).mean();
  
  //Mask out dark dark outliers
  collection = collection.map(function(img){
    var zScore = img.select(shadowSumBands).subtract(irMean).divide(irStdDev);
    var irSum = img.select(shadowSumBands).reduce(ee.Reducer.sum());
    var TDOMMask = zScore.lt(zScoreThresh).reduce(ee.Reducer.sum()).eq(2)
        .and(irSum.lt(shadowSumThresh)).not();
    TDOMMask = TDOMMask.focal_min(dilatePixels);
    return img.addBands(TDOMMask.rename('TDOMMask'));
  });
  
  return collection;
}
///////////////////////////////////////////////////////////////////////////////
//Function to clip with grid limit

var clipcarta = function(image) {
return  image.clip(limite);
};


///////////////////////////////////////////////////////////////////////////////
//Function for wrapping cloud and shadow masking together.
//Assumes image has cloud mask band called "cloudMask" and a TDOM mask called 
//"TDOMMask".
function cloudProject(img,shadowSumThresh,dilatePixels,cloudHeights){
  
  //Get the cloud mask
  var cloud = img.select('cloudMask').not();
  cloud = cloud.focal_max(dilatePixels);
  cloud = cloud.updateMask(cloud);
  
  //Get TDOM mask
  var TDOMMask = img.select(['TDOMMask']).not();
  
  //Project the shadow finding pixels inside the TDOM mask that are dark and 
  //inside the expected area given the solar geometry
  //Find dark pixels
  var darkPixels = img.select(['nir','swir1','swir2'])
      .reduce(ee.Reducer.sum()).lt(shadowSumThresh);//.gte(1);
  
  //Get scale of image
  var nominalScale = cloud.projection().nominalScale();

  //Find where cloud shadows should be based on solar geometry
  //Convert to radians
  var meanAzimuth = img.get('SUN_AZIMUTH');
  var meanZenith = img.get('SUN_ELEVATION');
  var azR = ee.Number(meanAzimuth).multiply(Math.PI).divide(180.0)
      .add(ee.Number(0.5).multiply(Math.PI ));
  var zenR = ee.Number(0.5).multiply(Math.PI )
      .subtract(ee.Number(meanZenith).multiply(Math.PI).divide(180.0));
  
  //Find the shadows
  var shadows = cloudHeights.map(function(cloudHeight){
    cloudHeight = ee.Number(cloudHeight);
    var shadowCastedDistance = zenR.tan()
        .multiply(cloudHeight);//Distance shadow is cast
    var x = azR.cos().multiply(shadowCastedDistance)
        .divide(nominalScale).round();//X distance of shadow
    var y = azR.sin().multiply(shadowCastedDistance)
        .divide(nominalScale).round();//Y distance of shadow
    return cloud.changeProj(cloud.projection(), cloud.projection()
        .translate(x, y));
  });

  var shadow = ee.ImageCollection.fromImages(shadows).max();
 
  //Create shadow mask
  shadow = shadow.updateMask(shadow.mask().and(cloud.mask().not()));
  shadow = shadow.focal_max(dilatePixels);
  shadow = shadow.updateMask(shadow.mask().and(darkPixels).and(TDOMMask));

  //Combine the cloud and shadow masks
  var combinedMask = cloud.mask().or(shadow.mask()).eq(0);
  
  //Update the image's mask and return the image
  img = img.updateMask(img.mask().and(combinedMask));
  img = img.addBands(combinedMask.rename(['cloudShadowMask']));
  return img;
}

///////////////////////////
// Create Symbol palets
var ndfi_color = 
  'FFFFFF,FFFCFF,FFF9FF,FFF7FF,FFF4FF,FFF2FF,FFEFFF,FFECFF,FFEAFF,FFE7FF,FFE5FF,FFE2FF,FFE0FF,FFDDFF,FFDAFF,FFD8FF,FFD5FF,FFD3FF,FFD0FF,FFCEFF,FFCBFF,FFC8FF,FFC6FF,FFC3FF,FFC1FF,FFBEFF,FFBCFF,FFB9FF,FFB6FF,FFB4FF,FFB1FF,FFAFFF,FFACFF,FFAAFF,FFA7FF,FFA4FF,FFA2FF,FF9FFF,FF9DFF,FF9AFF,FF97FF,FF95FF,FF92FF,FF90FF,FF8DFF,FF8BFF,FF88FF,FF85FF,FF83FF,FF80FF,FF7EFF,FF7BFF,FF79FF,FF76FF,FF73FF,FF71FF,FF6EFF,FF6CFF,FF69FF,FF67FF,'+
  'FF64FF,FF61FF,FF5FFF,FF5CFF,FF5AFF,FF57FF,FF55FF,FF52FF,FF4FFF,FF4DFF,FF4AFF,FF48FF,FF45FF,FF42FF,FF40FF,FF3DFF,FF3BFF,FF38FF,FF36FF,FF33FF,FF30FF,FF2EFF,FF2BFF,FF29FF,FF26FF,FF24FF,FF21FF,FF1EFF,FF1CFF,FF19FF,FF17FF,FF14FF,FF12FF,FF0FFF,FF0CFF,FF0AFF,FF07FF,FF05FF,FF02FF,FF00FF,FF00FF,FF0AF4,FF15E9,FF1FDF,FF2AD4,FF35C9,FF3FBF,FF4AB4,FF55AA,FF5F9F,FF6A94,FF748A,FF7F7F,FF8A74,FF946A,FF9F5F,FFAA55,FFB44A,FFBF3F,FFC935,'+
  'FFD42A,FFDF1F,FFE915,FFF40A,FFFF00,FFFF00,FFFB00,FFF700,FFF300,FFF000,FFEC00,FFE800,FFE400,FFE100,FFDD00,FFD900,FFD500,FFD200,FFCE00,FFCA00,FFC600,FFC300,FFBF00,FFBB00,FFB700,FFB400,FFB000,FFAC00,FFA800,FFA500,FFA500,F7A400,F0A300,E8A200,E1A200,D9A100,D2A000,CA9F00,C39F00,BB9E00,B49D00,AC9C00,A59C00,9D9B00,969A00,8E9900,879900,7F9800,789700,709700,699600,619500,5A9400,529400,4B9300,439200,349100,2D9000,258F00,1E8E00,'+
  '168E00,0F8D00,078C00,008C00,008C00,008700,008300,007F00,007A00,007600,007200,006E00,006900,006500,006100,005C00,005800,005400,005000,004C00';
var visNDFI = {'min':0, 'max':200, 'palette':ndfi_color};
var visNDFI100 = {'min':0, 'max':100, 'palette':ndfi_color};
var vizParams = {'min': 0.00,'max': 0.40, 'bands':'swir1,nir,red','gamma':1.0};
var visPar = {'bands':['swir1','nir','red'], 'gain':[800,600,2000],'gamma':0.5 };
var visParMedian = {'bands':['swir1med_year','nirmed_year','redmed_year'], 'gain':[0.08, 0.06,0.2],'gamma':0.5 };
var visParMax = {'bands':['swir1max','nirmax','redmax'], 'gain':[0.08, 0.06,0.2],'gamma':0.5 };
var visParMin = {'bands':['swir1min','nirmin','redmin'], 'gain':[0.08, 0.06,0.2],'gamma':0.5 };
var visSMA  = {'bands':['medSoil', 'medGV', 'medNPV'], 'gain': [6.0,4.0,6.0]};


///////////////////////////
//MAIN SCRIPT - Create asset for each year
///////////////////////////////////////////////////////////////////////////////

///////////////////////////
//FUNCTION: LOOP for each carta
for (var i_carta=0;i_carta<grids.length; i_carta++){
  var carta = grids[i_carta];

  var limite = landgrid.filterMetadata('name', "equals", carta);
  //Map.addLayer(limite)
  if (buffer_grid > 0) {
    limite = limite.map(function(carta){return carta.buffer(buffer_grid)});
  }

  ///////////////////////////
  //FUNCTION: LOOP for each year
  for (var i_year=0;i_year<years.length; i_year++){
    var year = years[i_year];
    var sensor = sensors[i_year];
    
    var Year = parseInt(year);
    var earlyYear = parseInt(year - 1); 
    
    var IC_period1 = getImageCollection(limite,Year+'-'+month_ini+'-01',Year+'-'+month_fim+'-30',sensor, cc);
if (fill_NO_DATA_with_year_mosaic){
    var IC_year = getImageCollection(limite,Year+'-01-01',Year+'-12-30',sensor, cc);
}
    print('Images Period',IC_period1)

    if (aditional_cloud_filter === true) {
      IC_period1 = IC_period1.map(landsatCloudScore);
      IC_period1 = simpleTDOM2(IC_period1,zScoreThresh,shadowSumThresh,dilatePixels);
      IC_period1 = IC_period1.map(function(img){return cloudProject(img,shadowSumThresh,dilatePixels, cloudHeights)});
      IC_period1 = IC_period1.map(clipcarta);

    } else {
      IC_period1 = IC_period1.map(clipcarta); 
    }
    
    //Aplly filter using BQA
    if (sensor == 'L8') {
      IC_period1 = IC_period1.map(cloudMaskL8);
    } else {
      IC_period1 = IC_period1.map(cloudMaskLX);
    }
    
        //remove border of landsat image
    IC_period1 = IC_period1.map(clip_cena);
    
        //Add NDVI to image collection
    IC_period1 = IC_period1.map(NDVI);
    IC_period1 = IC_period1.map(AddIndex)
    IC_period1 = IC_period1.map(getFractions)
    
if (fill_NO_DATA_with_year_mosaic){
    if (aditional_cloud_filter === true) {
      IC_year = IC_year.map(landsatCloudScore)
      IC_year = simpleTDOM2(IC_year,zScoreThresh,shadowSumThresh,dilatePixels);
      IC_year = IC_year.map(function(img){return cloudProject(img,shadowSumThresh,dilatePixels, cloudHeights)});
      IC_year = IC_year.map(clipcarta);
    } else {
      IC_year = IC_year.map(clipcarta); 
    }
    //Aplly filter using BQA
    if (sensor == 'L8') {
      IC_year = IC_year.map(cloudMaskL8);
    } else {
      IC_year = IC_year.map(cloudMaskLX);
    }
      IC_year = IC_year.map(clip_cena);
    IC_year = IC_year.map(NDVI);

    IC_year = IC_year.map(AddIndex)
    
    IC_year = IC_year.map(getFractions)
  
}
  

  
  //print(IC_year)
  
    // Generate Dry and Wet collection with percentile
    var p25Ndvi = IC_period1.select(['NDVI']).reduce(ee.Reducer.percentile([dry_percent]));
    var p75Ndvi = IC_period1.select(['NDVI']).reduce(ee.Reducer.percentile([wet_percent]));
    
    var wetSeason = function(image) {
      var seasonMask = image.select('NDVI').gte(p75Ndvi);
      return image.mask(seasonMask);
    };
    
    var drySeason = function(image) {
      var seasonMask = image.select('NDVI').lte(p25Ndvi);
      return image.mask(seasonMask);
    };
  
    var IC_umido = IC_period1.map(wetSeason);
    var IC_seco = IC_period1.map(drySeason);
  
    // Get Median
    var IC_period1_Median = IC_period1.median();
    var IC_period_Median = IC_period1_Median

    var IC_dry_Median = IC_seco.median();
    var IC_wet_Median = IC_umido.median();

    // Get Min, Max, Amp and Std from Year image
    var IC_year_Min = IC_period1.min();
    var IC_year_Max = IC_period1.max();
    var IC_year_Amp = IC_year_Max.subtract(IC_year_Min);
    var IC_year_Std = IC_period1.reduce(ee.Reducer.stdDev());
  
if (fill_NO_DATA_with_year_mosaic){

    // Fill cloud gaps with Year mosaic
    var IC_year_Median = IC_year.median();
    var  IC_period_Median = IC_period1_Median.unmask(IC_year_Median);
    // Get Min, Max, Amp and Std from Year image
    var IC_year_Min = IC_year.min();
    var IC_year_Max = IC_year.max();
    var IC_year_Amp = IC_year_Max.subtract(IC_year_Min);
    var IC_year_Std = IC_year.reduce(ee.Reducer.stdDev());
}



    //Create new image to add new bands
    var img_asset = IC_period_Median.select(['blue'],['median_blue']).multiply(10000).uint16();
  
    // Add Median values to image bands
    img_asset = img_asset.addBands(IC_period_Median.select(['green'],['median_green']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_period_Median.select(['red'],['median_red']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_period_Median.select(['nir'],['median_nir']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_period_Median.select(['swir1'],['median_swir1']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_period_Median.select(['swir2'],['median_swir2']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_period_Median.select(['temp'],['median_temp']).multiply(10000).uint16());
  
    // Add Median Wet values to image bands
    img_asset = img_asset.addBands(IC_wet_Median.select(['blue'],['median_blue_wet']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_wet_Median.select(['green'],['median_green_wet']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_wet_Median.select(['red'],['median_red_wet']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_wet_Median.select(['nir'],['median_nir_wet']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_wet_Median.select(['swir1'],['median_swir1_wet']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_wet_Median.select(['swir2'],['median_swir2_wet']).multiply(10000).uint16());
  //  img_asset = img_asset.addBands(IC_wet_Median.select(['temp'],['median_temp_wet']).multiply(10000).uint16());


      // Add Median Dry values to image bands
    img_asset = img_asset.addBands(IC_dry_Median.select(['blue'],['median_blue_dry']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_dry_Median.select(['green'],['median_green_dry']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_dry_Median.select(['red'],['median_red_dry']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_dry_Median.select(['nir'],['median_nir_dry']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_dry_Median.select(['swir1'],['median_swir1_dry']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_dry_Median.select(['swir2'],['median_swir2_dry']).multiply(10000).uint16());

    // Add Min values to image bands
    img_asset = img_asset.addBands(IC_year_Min.select(['blue'], ['min_blue']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_year_Min.select(['green'],['min_green']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_year_Min.select(['red'],  ['min_red']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_year_Min.select(['nir'],  ['min_nir']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_year_Min.select(['swir1'],['min_swir1']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_year_Min.select(['swir2'],['min_swir2']).multiply(10000).uint16());
    img_asset = img_asset.addBands(IC_year_Min.select(['temp'], ['min_temp']).multiply(10000).uint16());

      // Add STD values to image bands
    img_asset = img_asset.addBands(IC_year_Std.select(['blue_stdDev'], ['stdDev_blue']).multiply(10000).uint32());
    img_asset = img_asset.addBands(IC_year_Std.select(['green_stdDev'],['stdDev_green']).multiply(10000).uint32());
    img_asset = img_asset.addBands(IC_year_Std.select(['red_stdDev'],  ['stdDev_red']).multiply(10000).uint32());
    img_asset = img_asset.addBands(IC_year_Std.select(['nir_stdDev'],  ['stdDev_nir']).multiply(10000).uint32());
    img_asset = img_asset.addBands(IC_year_Std.select(['swir1_stdDev'],['stdDev_swir1']).multiply(10000).uint32());
    img_asset = img_asset.addBands(IC_year_Std.select(['swir2_stdDev'],['stdDev_swir2']).multiply(10000).uint32());
    img_asset = img_asset.addBands(IC_year_Std.select(['temp_stdDev'], ['stdDev_temp']).multiply(10000).uint32());
  
  
    // Add NDVI Year
    img_asset = img_asset.addBands(IC_period_Median.select(['NDVI']).select([0],['median_ndvi']).uint8());
    img_asset = img_asset.addBands(IC_year_Amp.select(['NDVI'],['amp_ndvi']).uint8());
    img_asset = img_asset.addBands(IC_year_Std.select(['NDVI_stdDev'],['stdDev_ndvi']).uint32());
  
    // Add Dry index
    img_asset = img_asset.addBands(IC_dry_Median.select(['CAI']).select([0],['median_cai_dry']).uint8());
//    img_asset = img_asset.addBands(IC_dry_Median.select(['gv']).select([0],['median_gv_dry']).uint8());
    img_asset = img_asset.addBands(IC_dry_Median.select(['gvs']).select([0],['median_gvs_dry']).uint8());
//    img_asset = img_asset.addBands(IC_dry_Median.select(['npv']).select([0],['median_npv_dry']).uint8());
//    img_asset = img_asset.addBands(IC_dry_Median.select(['soil']).select([0],['median_soil_dry']).uint8());
//    img_asset = img_asset.addBands(IC_dry_Median.select(['shade']).select([0],['median_shade_dry']).uint8());
//    img_asset = img_asset.addBands(IC_dry_Median.select(['cloud']).select([0],['median_cloud_dry']).uint8());
    img_asset = img_asset.addBands(IC_dry_Median.select(['NDVI']).select([0],['median_ndvi_dry']).uint8());
    img_asset = img_asset.addBands(IC_dry_Median.select(['EVI2']).select([0],['median_evi2_dry']).uint8());
    img_asset = img_asset.addBands(IC_dry_Median.select(['GCVI']).select([0],['median_gcvi_dry']).uint8());
    img_asset = img_asset.addBands(IC_dry_Median.select(['NDWI']).select([0],['median_ndwi_dry']).uint8());
//    img_asset = img_asset.addBands(IC_dry_Median.select(['HALL_COVER']).select([0],['median_hallcover_dry']).uint8());
    img_asset = img_asset.addBands(IC_dry_Median.select(['NDFI']).select([0],['median_ndfi_dry']).uint8());
    img_asset = img_asset.addBands(IC_dry_Median.select(['SEFI']).select([0],['median_sefi_dry']).uint8());
    img_asset = img_asset.addBands(IC_dry_Median.select(['WEFI']).select([0],['median_wefi_dry']).uint8());
    img_asset = img_asset.addBands(IC_dry_Median.select(['FNS']).select([0],['median_fns_dry']).uint8());
    img_asset = img_asset.addBands(IC_dry_Median.select(['PRI']).select([0],['median_pri_dry']).uint8());
    img_asset = img_asset.addBands(IC_dry_Median.select(['SAVI']).select([0],['median_savi_dry']).uint8());
  
    // Add Wet index
    img_asset = img_asset.addBands(IC_wet_Median.select(['CAI']).select([0],['median_cai_wet']).uint8());
//    img_asset = img_asset.addBands(IC_wet_Median.select(['gv']).select([0],['median_gv_wet']).uint8());
    img_asset = img_asset.addBands(IC_wet_Median.select(['gvs']).select([0],['median_gvs_wet']).uint8());
//    img_asset = img_asset.addBands(IC_wet_Median.select(['npv']).select([0],['median_npv_wet']).uint8());
//    img_asset = img_asset.addBands(IC_wet_Median.select(['soil']).select([0],['median_soil_wet']).uint8());
//    img_asset = img_asset.addBands(IC_wet_Median.select(['shade']).select([0],['median_shade_wet']).uint8());
//    img_asset = img_asset.addBands(IC_wet_Median.select(['cloud']).select([0],['median_cloud_wet']).uint8());
    img_asset = img_asset.addBands(IC_wet_Median.select(['NDVI']).select([0],['median_ndvi_wet']).uint8());
    img_asset = img_asset.addBands(IC_wet_Median.select(['EVI2']).select([0],['median_evi2_wet']).uint8());
    img_asset = img_asset.addBands(IC_wet_Median.select(['GCVI']).select([0],['median_gcvi_wet']).uint8());
    img_asset = img_asset.addBands(IC_wet_Median.select(['NDWI']).select([0],['median_ndwi_wet']).uint8());
//    img_asset = img_asset.addBands(IC_wet_Median.select(['HALL_COVER']).select([0],['median_hallcover_wet']).uint8());
    img_asset = img_asset.addBands(IC_wet_Median.select(['NDFI']).select([0],['median_ndfi_wet']).uint8());
    img_asset = img_asset.addBands(IC_wet_Median.select(['SEFI']).select([0],['median_sefi_wet']).uint8());
    img_asset = img_asset.addBands(IC_wet_Median.select(['WEFI']).select([0],['median_wefi_wet']).uint8());
    img_asset = img_asset.addBands(IC_wet_Median.select(['FNS']).select([0],['median_fns_wet']).uint8());
    img_asset = img_asset.addBands(IC_wet_Median.select(['PRI']).select([0],['median_pri_wet']).uint8());
    img_asset = img_asset.addBands(IC_wet_Median.select(['SAVI']).select([0],['median_savi_wet']).uint8());

    // Add PRI Year
    img_asset = img_asset.addBands(IC_period_Median.select(['PRI']).select([0],['median_pri']).uint8());
//    img_asset = img_asset.addBands(IC_year_Amp.select(['PRI'],['amp_pri']).uint8());
    img_asset = img_asset.addBands(IC_year_Std.select(['PRI_stdDev'],['stdDev_pri']).uint32());
      
    // Add HallCover
    img_asset = img_asset.addBands(IC_period_Median.select(['HALL_COVER']).select([0],['median_hallcover']).uint16());
//    img_asset = img_asset.addBands(IC_year_Amp.select(['HALL_COVER'],['amp_hallcover_']).uint8());
    img_asset = img_asset.addBands(IC_year_Std.select(['HALL_COVER_stdDev'],['stdDev_hallcover']).uint32());
  
    // Add Fractions Year
    img_asset = img_asset.addBands(IC_period_Median.select(['gv']).select([0],['median_gv']).uint8());
    img_asset = img_asset.addBands(IC_year_Amp.select(['gv'],['amp_gv']).uint8());
    img_asset = img_asset.addBands(IC_year_Std.select(['gv_stdDev'],['stdDev_gv']).uint32());

    img_asset = img_asset.addBands(IC_period_Median.select(['gvs']).select([0],['median_gvs']).uint8());
//    img_asset = img_asset.addBands(IC_year_Amp.select(['gvs'],['amp_gvs']).uint8());
    img_asset = img_asset.addBands(IC_year_Std.select(['gvs_stdDev'],['stdDev_gvs']).uint32());
  
    img_asset = img_asset.addBands(IC_period_Median.select(['npv']).select([0],['median_npv']).uint8());
    img_asset = img_asset.addBands(IC_year_Amp.select(['npv'],['amp_npv']).uint8());
    img_asset = img_asset.addBands(IC_year_Std.select(['npv_stdDev'],['stdDev_npv']).uint32());
  
    img_asset = img_asset.addBands(IC_period_Median.select(['soil']).select([0],['median_soil']).uint8());
    img_asset = img_asset.addBands(IC_year_Amp.select(['soil'],['amp_soil']).uint8());
    img_asset = img_asset.addBands(IC_year_Std.select(['soil_stdDev'],['stdDev_soil']).uint32());
  
    img_asset = img_asset.addBands(IC_period_Median.select(['shade']).select([0],['median_shade']).uint8());
//    img_asset = img_asset.addBands(IC_year_Amp.select(['shade'],['amp_shade']).uint8());
    img_asset = img_asset.addBands(IC_year_Std.select(['shade_stdDev'],['stdDev_shade']).uint32());
  
    img_asset = img_asset.addBands(IC_period_Median.select(['cloud']).select([0],['median_cloud']).uint8());
//    img_asset = img_asset.addBands(IC_year_Amp.select(['cloud'],['amp_cloud']).uint8());
    img_asset = img_asset.addBands(IC_year_Std.select(['cloud_stdDev'],['stdDev_cloud']).uint32());
  
    // Add Fractions Year
    img_asset = img_asset.addBands(IC_period_Median.select(['NDFI']).select([0],['median_ndfi']).uint8());
    img_asset = img_asset.addBands(IC_year_Amp.select(['NDFI'],['amp_ndfi']).uint8());
    img_asset = img_asset.addBands(IC_year_Std.select(['NDFI_stdDev'],['stdDev_ndfi']).uint32());
  
    img_asset = img_asset.addBands(IC_period_Median.select(['SEFI']).select([0],['median_sefi']).uint8());
    img_asset = img_asset.addBands(IC_year_Amp.select(['SEFI'],['amp_sefi']).uint8());
    img_asset = img_asset.addBands(IC_year_Std.select(['SEFI_stdDev'],['stdDev_sefi']).uint32());
  
    img_asset = img_asset.addBands(IC_period_Median.select(['WEFI']).select([0],['median_wefi']).uint8());
    img_asset = img_asset.addBands(IC_year_Amp.select(['WEFI'],['amp_wefi']).uint8());
    img_asset = img_asset.addBands(IC_year_Std.select(['WEFI_stdDev'],['stdDev_wefi']).uint32());
  
    img_asset = img_asset.addBands(IC_period_Median.select(['FNS']).select([0],['median_fns']).uint8());
//    img_asset = img_asset.addBands(IC_year_Amp.select(['FNS'],['amp_fns']).uint8());
    img_asset = img_asset.addBands(IC_year_Std.select(['FNS_stdDev'],['stdDev_fns']).uint32());
    
    // Add EVI2
    img_asset = img_asset.addBands(IC_period_Median.select(['EVI2']).select([0],['median_evi2']).uint8());
    img_asset = img_asset.addBands(IC_year_Amp.select(['EVI2'],['amp_evi2']).uint8());
    img_asset = img_asset.addBands(IC_year_Std.select(['EVI2_stdDev'],['stdDev_evi2']).uint32());
  
    // Add SAVI
    img_asset = img_asset.addBands(IC_period_Median.select(['SAVI']).select([0],['median_savi']).uint8());
 //   img_asset = img_asset.addBands(IC_year_Amp.select(['SAVI'],['amp_savi']).uint8());
    img_asset = img_asset.addBands(IC_year_Std.select(['SAVI_stdDev'],['stdDev_savi']).uint32());
  
    // Add CAI
    img_asset = img_asset.addBands(IC_period_Median.select(['CAI']).select([0],['median_cai']).uint8());
//    img_asset = img_asset.addBands(IC_year_Amp.select(['CAI'],['amp_cai']).uint8());
    img_asset = img_asset.addBands(IC_year_Std.select(['CAI_stdDev'],['stdDev_cai']).uint32());
  
    // Add NDWI  
    img_asset = img_asset.addBands(IC_period_Median.select(['NDWI']).select([0],['median_ndwi']).uint8());
    img_asset = img_asset.addBands(IC_year_Amp.select(['NDWI'],['amp_ndwi']).uint8());
    img_asset = img_asset.addBands(IC_year_Std.select(['NDWI_stdDev'],['stdDev_ndwi']).uint32());
  
    // Add GCVI      
    img_asset = img_asset.addBands(IC_period_Median.select(['GCVI']).select([0],['median_gcvi']).uint8());
//    img_asset = img_asset.addBands(IC_year_Amp.select(['GCVI'],['amp_gcvi']).uint8());
    img_asset = img_asset.addBands(IC_year_Std.select(['GCVI_stdDev'],['stdDev_gcvi']).uint32());
  
    // Add HALL_HEIGHT   
//    img_asset = img_asset.addBands(IC_period_Median.select(['HALL_HEIGHT']).select([0],['median_hallheight']).uint8());
//    img_asset = img_asset.addBands(IC_year_Amp.select(['HALL_HEIGHT'],['amp_hallheight']).uint8());
//    img_asset = img_asset.addBands(IC_year_Std.select(['HALL_HEIGHT_stdDev'],['stdDev_hallheight']).uint8());
  
    // Add MIN values to image bands
  //  img_asset = img_asset.addBands(IC_year_Min.select( ['blue'],['min_blue']).multiply(10000).uint16())
  //  img_asset = img_asset.addBands(IC_year_Min.select(['green'],['min_green']).multiply(10000).uint16())
  //  img_asset = img_asset.addBands(IC_year_Min.select(  ['red'],['min_red']).multiply(10000).uint16())
  //  img_asset = img_asset.addBands(IC_year_Min.select(  ['nir'],['min_nir']).multiply(10000).uint16())
  //  img_asset = img_asset.addBands(IC_year_Min.select(['swir1'],['min_swir1']).multiply(10000).uint16())
  //  img_asset = img_asset.addBands(IC_year_Min.select(['swir2'],['min_swir2']).multiply(10000).uint16())
  //  img_asset = img_asset.addBands(IC_year_Min.select( ['temp'],['min_temp']).multiply(10000).uint16())
  //  img_asset = img_asset.addBands(IC_year_Min.select( ['EVI2'],['min_evi2']).multiply(10000).uint16())
  //  img_asset = img_asset.addBands(IC_year_Min.select( ['SAVI'],['min_savi']).multiply(10000).uint16())
  //  img_asset = img_asset.addBands(IC_year_Min.select( ['NDWI'],['min_ndwi']).multiply(10000).uint16())
  //  img_asset = img_asset.addBands(IC_year_Min.select( ['NDVI'],['min_ndvi']).multiply(10000).uint16())
  //  img_asset = img_asset.addBands(IC_year_Min.select( ['CAI'],['min_cai']).multiply(10000).uint16())
  //  img_asset = img_asset.addBands(IC_year_Min.select( ['PRI'],['min_pri']).multiply(10000).uint16())
  //  img_asset = img_asset.addBands(IC_year_Min.select( ['GCVI'],['min_gcvi']).multiply(10000).uint16())
  //  img_asset = img_asset.addBands(IC_year_Min.select( ['HALL_COVER'],['min_hallcover']).multiply(10000).uint16())
  
  
      //define MDT 
  //  var terrain = ee.call('Terrain', ee.Image('USGS/SRTMGL1_003'));
  //  img_asset = img_asset.addBands(terrain.select(['elevation']).clip(limite));
  //  img_asset = img_asset.addBands(terrain.select(['slope']).clip(limite));
  
  //print(img_asset)
  
  
  if (add_layers === true){
  
    Map.addLayer(img_asset, {'bands':['median_ndfi_dry' ],'min':0, 'max':200, 'palette':ndfi_color}, 'NDFI seco'+year, false);
    Map.addLayer(img_asset, {'bands':['median_ndfi_wet'],'min':0, 'max':200, 'palette':ndfi_color}, 'NDFI umido'+year, false);
    Map.addLayer(img_asset, {'bands':['median_ndfi' ],'min':0, 'max':200, 'palette':ndfi_color}, 'NDFI year'+year, false);
  
    Map.addLayer(img_asset, {'bands':['median_fns_dry' ],'min':0, 'max':200, 'palette':ndfi_color}, 'FNS seco'+year, false);
    Map.addLayer(img_asset, {'bands':['median_fns_wet'],'min':0, 'max':200, 'palette':ndfi_color}, 'FNS umido'+year, false);
    Map.addLayer(img_asset, {'bands':['median_fns' ],'min':0, 'max':200, 'palette':ndfi_color}, 'FNS year'+year, false);
  
    Map.addLayer(img_asset, {'bands':['median_ndvi_dry' ],'min':30, 'max':80, 'palette':ndfi_color}, 'NDVI med seco'+year, false);
    Map.addLayer(img_asset, {'bands':['median_ndvi_wet'],'min':30, 'max':80, 'palette':ndfi_color}, 'NDVI med umido'+year, false);
    Map.addLayer(img_asset, {'bands':['median_ndvi' ],'min':30, 'max':80, 'palette':ndfi_color}, 'NDVI med year'+year, false);
    
//    Map.addLayer(img_asset, {'bands':['median_hallcover_dry' ],'min':18270, 'max':18370, 'palette':ndfi_color}, 'HallCover med seco'+year, false);
//    Map.addLayer(img_asset, {'bands':['median_hallcover_wet'],'min':18270, 'max':18370, 'palette':ndfi_color}, 'HallCover med umido'+year, false);
    Map.addLayer(img_asset, {'bands':['median_hallcover' ],'min':18270, 'max':18370, 'palette':ndfi_color}, 'HCOVER med year'+year, false);
  
    
    Map.addLayer(img_asset, {'bands':['median_savi' ],'min':0, 'max':100, 'palette':ndfi_color}, 'SAVI med year'+year, false);
    Map.addLayer(img_asset, {'bands':['median_pri'],'min':0, 'max':50, 'palette':ndfi_color}, 'PRI med year'+year, false);
    Map.addLayer(img_asset, {'bands':['median_cai' ],'min':0, 'max':100, 'palette':ndfi_color}, 'CAI med year'+year, false);
    Map.addLayer(img_asset, {'bands':['median_ndwi' ],'min':0, 'max':100, 'palette':ndfi_color}, 'NDWI med year'+year, false);
    Map.addLayer(img_asset, {'bands':['median_gcvi' ],'min':100, 'max':200, 'palette':ndfi_color}, 'GCVI med year'+year, false);
    //Map.addLayer(img_asset, {'bands':['median_hallheight' ],'min':6150, 'max':6170, 'palette':ndfi_color}, 'HHEIGHT med year'+year, false);
    
    Map.addLayer(img_asset, {'bands':['median_evi2' ],'min':0, 'max':100, 'palette':ndfi_color}, 'EVI2 med year'+year, false);
    Map.addLayer(img_asset, {'bands':['stdDev_evi2' ],'min':0, 'max':50, 'palette':ndfi_color}, 'EVI2 std year'+year, false);
    Map.addLayer(img_asset, {'bands':['amp_evi2' ],'min':0, 'max':150, 'palette':ndfi_color}, 'EVI2 amp year'+year, false);

    Map.addLayer(img_asset, {'bands':['median_swir1_dry', 'median_nir_dry', 'median_red_dry' ], 'gain':[0.09, 0.07,0.2],'gamma':0.5 }, 'LandMedian dry '+year, image_dry_visible);
    Map.addLayer(img_asset, {'bands':['median_swir1_wet', 'median_nir_wet', 'median_red_wet' ], 'gain':[0.09, 0.07,0.2],'gamma':0.5 }, 'LandMedian wet '+year, image_wet_visible);
  
  }
    Map.addLayer(img_asset, {'bands':['median_swir1','median_nir','median_red' ], 'gain':[0.09, 0.07,0.2],'gamma':0.5 }, 'LandMedian year '+year, image_year_visible);
  
    var imgemProp = img_asset
        .set('year',parseInt(year,10))
        .set('biome', biome)      
        .set('sensor', sensor)
        .set('collection', 1)
        .set('month_ini', month_ini)
        .set('month_end', month_fim)

    Export.image.toAsset({image: imgemProp, description: biome+"-"+carta+"-"+sensor+"A"+year, 
        assetId: dir_out+biome+"-"+carta+"-"+sensor+"A"+year, scale: 30, pyramidingPolicy: {'.default': 'mode'}, maxPixels: 1e13, region: limite})
  }
}

var blank = ee.Image(0).mask(0);
var outline = blank.paint(limite, 'AA0000', 2); 
var visPar = {'palette':'000000','opacity': 0.6};
Map.addLayer(outline, visPar, 'Limite', false);

