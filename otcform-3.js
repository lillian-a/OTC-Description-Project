//  **************************************************
//  **********  VARIABLES
//  **************************************************
var fileName;
var colLength = 52;     // # of columns + 1
var arrayData;          // array that data gets processed through 1st
var data;               // original dataform get from import
var resultData = [];    // dataform to use for export; copy of data in resultData for export
var publishExportArr; // 3-16-17
var arrData;
var tempArrayData;      // array to use for saving form while in use
var importDone = false;
var tempArrayFlag = false;      // flag to know if tempArrayData has been instantiated; false = no
var publishExportArrayFlag = false;
var publishArrayFlag = false;
var dataLength;
var publishArr;
var strOTCMainDescription;

// SECTION TAB TITLE VARIABLES
var strFeatureTabTitle = "Features";
var strUsesTabTitle = "Uses";
var strIngredientsTabTitle = "Ingredients";
var strOtherTabTitle = "Other";
var strDirectionsTabTitle = "Directions";
var strIncludesTabTitle = "Includes";
var strTechTabTitle = "Technical";
var strWarningsTabTitle = "Warnings";
var strTabHeadingStart = '<p class="package-detail-headings">';
var strTabHeadingEnd = '</p>';


//  **************************************************
//  **************  INSTANTIATE ARRAYS ***************
//  **************************************************

function instantiateTempArray(){
  tempArrayData = [];
  for(var i = 0; i < colLength; i++){
    tempArrayData[i] = "";
  };
  tempArrayFlag = true;
}
function instantiatePublishArray(){
  publishArr = [];
  for(var i = 0; i < colLength+1; i++){
    publishArr[i] = "";
  };
  publishArrayFlag = true;
}

function instantiatePublishExportArray(){
  publishExportArr = [];
  for(var i = 0; i < colLength+1; i++){
    publishExportArr[i] = "";
  };
  publishExportArrayFlag = true;
}


function instatiateArrDataAndFinal(rowLen){
  arrData = [];
  for(var i = 0; i < rowLen; i++){
    arrData[i] = [];
    for(var j = 0; j < colLength; j++){
      arrData[i][j] = "";
    }
  }
}

//  **************************************************
//  **********  SAVE TO TEMP ARRAY
//  **************************************************
function resetTempArray() {
  saveDataToTempArray();
}

function saveDataToTempArray() {
  tempArrayData[0] = getCurrentDate();
  tempArrayData[1] = $("#txt_sku").val();
  tempArrayData[2] = $("#txt_skuTitle").val();
  tempArrayData[3] = $("#selectParentChild").val();
  tempArrayData[4] = $("#txt_manu_name").val();
  tempArrayData[5] = $("#txt_manu_phone").val();
  tempArrayData[6] = $("#txt_manu_address").val();
  tempArrayData[7] = $("#txt_manu_website").val();
  tempArrayData[8] = CKEDITOR.instances.paragraph1editor.getData();
  tempArrayData[9] = $("#selectp1for").val();
  tempArrayData[10] = CKEDITOR.instances.paragraph2editor.getData();
  tempArrayData[11] = $("#selectp2for").val();
  tempArrayData[12] = CKEDITOR.instances.features1editor.getData();
  tempArrayData[13] = $("#selectHasIngredients").val();
  tempArrayData[14] = CKEDITOR.instances.ingredients1editor.getData();
  tempArrayData[15] = $("#selectHasIncludes").val();
  tempArrayData[16] = CKEDITOR.instances.includes1editor.getData();
  tempArrayData[17] = $("#selectHasTechSpecs").val();
  tempArrayData[18] = CKEDITOR.instances.techspecseditor.getData();
  tempArrayData[19] = $("#selectHasWarnings").val();
  tempArrayData[20] = CKEDITOR.instances.warningseditor.getData();
  tempArrayData[21] = $("#selectHasDirections").val();
  tempArrayData[22] = CKEDITOR.instances.directionseditor.getData();
  tempArrayData[23] = $("#selectHasUses").val();
  tempArrayData[24] = CKEDITOR.instances.useseditor.getData();
  tempArrayData[25] = $("#selectHasOtherInfo").val();
  tempArrayData[26] = CKEDITOR.instances.othereditor.getData();
  tempArrayData[27] = $("#selectHasAccessories").val();
  tempArrayData[28] = CKEDITOR.instances.accessories1editor.getData();
  tempArrayData[29] = $("#selectHasManual").val();
  tempArrayData[30] = $("#txt_manual_name").val();
  tempArrayData[31] = $("#txt_manual_text").val();
  tempArrayData[32] = $("#txt_country_of_origin").val()
  tempArrayData[33] = $("#selectHasNotes").val();
  tempArrayData[34] = CKEDITOR.instances.notes1editor.getData();
  tempArrayData[35] = $("#selectHasProdTable").val();
  tempArrayData[36] = CKEDITOR.instances.prodtable1editor.getData();
  publishArray();
  tempArrayData[37] = strOTCMainDescription;
  //checkExportArrays();
  // tempArrayData[] = strPaylessOTCMainDescription;
  // tempArrayData[] = $("#selectHasMultiAd").val();
  // tempArrayData[] = $("#txt_multi_ad").val();
  // tempArrayData[] = $("#selectHasCrossSell").val();
  // tempArrayData[] = $("#txt_cross_sell").val();
  // tempArrayData[9] = $("#selectGender").val();
  // tempArrayData[] = $("#txt_size_attribute").val();
  // tempArrayData[] = $("#txt_color_attribute").val();
  // tempArrayData[] = $("#txt_title_stoneedge").val();
  // tempArrayData[] = $("#txt_title_google").val();
  // tempArrayData[] = $("#txt_title_headline").val();
  // tempArrayData[] = $("#txt_meta_title").val();
  // tempArrayData[] = $("#txt_meta_desc").val();
//   tempArrayData[] = $("#txt_cross_sell").val();
}
function checkExportArrays(){
  if(Array.isArray(publishArr) == false) {
    instantiatePublishArray();
  }
  if(Array.isArray(publishExportArr) == false) {
    instantiatePublishExportArray();
  }
}

function publishArray(){
  checkExportArrays();
  publishArr = tempArrayData.slice();
  // copy over temp array
  // for(var i = 0; i < colLength; i++){
    // publishArr[i] = tempArrayData[i];
  // };
  // publishArr[colLength] = $("#txt_skuTitle").val();

  // SECTION TAB STRING VARIABLES
  var strFeatureTab = "";
  var strUsesTab = "";
  var strIngredientsTab = "";
  var strOtherTab = "";
  var strDirectionsTab = "";
  var strIncludesTab = "";
  var strTechTab = "";
  var strWarningsTab = "";

  var strFeature = "";
  var strUses = "";
  var strIngredients = "";
  var strOther = "";
  var strDirections = "";
  var strIncludes = "";
  var strTech = "";
  var strWarnings = "";

  // SECTION - FEATURES
  strFeature = strTabHeadingStart + strFeatureTabTitle + strTabHeadingEnd + publishArr[12];
  strFeatureTab = '<div>' + publishArr[12] + '</div>';

  // SECTION - USES
  if (publishArr[23] == "yes"){
    strUses = strTabHeadingStart + strUsesTabTitle + strTabHeadingEnd + publishArr[24];
    strUsesTab = '<div>' + publishArr[24] + '</div>';
  }

  // SECTION - INGREDIENTS
  if (publishArr[13] == "yes"){
    strIngredients = strTabHeadingStart + strIngredientsTabTitle + strTabHeadingEnd + publishArr[14];
    strIngredientsTab = '<div>' + publishArr[14] + '</div>';
  }

  // SECTION - OTHER INFO
  if (publishArr[25] == "yes"){
    strOther = strTabHeadingStart + strOtherTabTitle + strTabHeadingEnd + publishArr[26];
    strOtherTab = '<div>' + publishArr[26] + '</div>';
  }

  // SECTION - DIRECTIONS
  if (publishArr[21] == "yes"){
    strDirections = strTabHeadingStart + strDirectionsTabTitle + strTabHeadingEnd + publishArr[22];
    strDirectionsTab = '<div>' + publishArr[22] + '</div>';
  }

  // SECTION - INCLUDES
  if (publishArr[15] == "yes"){
    strIncludes = strTabHeadingStart + strIncludesTabTitle + strTabHeadingEnd + publishArr[16];
    strIncludesTab = '<div>' + publishArr[16] + '</div>';
  }

  // SECTION - TECH SPECS
  if (publishArr[17] == "yes"){
    strTech = strTabHeadingStart + strTechTabTitle + strTabHeadingEnd + publishArr[18];
    strTechTab = '<div>' + publishArr[18] + '</div>';
  }

  // SECTION - WARNINGS
  if (publishArr[19] == "yes"){
    strWarnings = strTabHeadingStart + strWarningsTabTitle + strTabHeadingEnd + publishArr[20];
    strWarningsTab = '<div>' + publishArr[20] + '</div>';
  }

  // COUNTRY OF ORIGIN
  var strCountryOrigin = "";
  if (publishArr[32] != ""){
    strCountryOrigin = '<p><b>Country of Origin: </b>' + publishArr[32] + '</p>';
  }

  // MANUFACTURER QUESTIONS LINE
  var qLine = "";
  if ((publishArr[10] != "") && (publishArr[5] != "")){
    // HAS WEB AND PHONE
    weblink = '<a href="' + publishArr[7] + '">' + publishArr[7] + '</a>';
    qLine = '<p><b>Questions:</b> Contact Manufacturer at ' + publishArr[5] + ' or visit ' + weblink + '</p>'; //TODO FIX WEB LINK CODE

  } else if ((publishArr[10] == "") && (publishArr[5] != "")) {
    // HAS ONLY PHONE
    qLine = '<p><b>Questions:</b> Contact Manufacturer at ' + publishArr[5] + '</p>'; //TODO FIX WEB LINK CODE

  } else if ((publishArr[10] != "") && (publishArr[5] == "")){
    // HAS ONLY WEB
    weblink = '<a href="' + publishArr[7] + '">' + publishArr[7] + '</a>';
    qLine = '<p><b>Questions:</b> Contact Manufacturer at ' + weblink + '</p>'; //TODO FIX WEB LINK CODE
  } else {
    // HAS NO PHONE OR WEB
    qLine = "";
  }

  // MANUFACTURER PARAGRAPH - START
  var manuInfo = '<p>';
  // MANUFACTURER NAME
  if (publishArr[6] != ""){
    manuInfo += publishArr[4];
  }
  // MANUFACTURER ADDRESS
  if (publishArr[6] != ""){
    manuInfo += '<br>' + publishArr[6];
  }
  manuInfo += '</p>';
  // MANUFACTURER PARAGRAPH - END

  // DOCS PART - START
  // MANUAL DOCS
  var strManual = "";
  if ( publishArr[29] != "no" ){
    strManual = '<p><b>View the Full Operations Manual:</b><a href="http://site.diabeticdiscountdirect.com/pdf/';
    strManual += publishArr[30];
    strManual += '.pdf"><img src="http://site.diabeticdiscountdirect.com/assets/pdf.gif" alt="pdf manual" width="30" height="30" border="0" align="absmiddle">';
    strManual += publishArr[31];
    strManual += '</a></p>';
  }
  // DOCS PART - END

  // CREATE MAIN DESC
  strOTCMainDescription = "";
  strOTCMainDescription += '<div class="product-details-text">';
  // START TOP PART
  strOTCMainDescription += '<div class="prod-overview-text">';
  strOTCMainDescription += '<span class="prod-overveiw-title">' + publishArr[2] + '</span><br>';
  if (publishArr[9] == "otcwholesale"){
    strOTCMainDescription += publishArr[8];
  } else {
    strOTCMainDescription += publishArr[10];
  }
  if (publishArr[29] != "no"){
    strOTCMainDescription += strManual;
  }
  if (qLine != ""){
    strOTCMainDescription += qLine;
  }
  strOTCMainDescription += '</div>';
  // START BOTTOM PART
  strOTCMainDescription += '<div class="package-details-text">';
  if (strFeature != ""){
    strOTCMainDescription += strFeature;
  }
  if (strUses != ""){
    strOTCMainDescription += strUses;
  }
  if (strTech != ""){
    strOTCMainDescription += strTech;
  }
  if (strIncludes != ""){
    strOTCMainDescription += strIncludes;
  }
  if (strIngredients != ""){
    strOTCMainDescription += strIngredients;
  }
  if (strDirections != ""){
    strOTCMainDescription += strDirections;
  }
  if (strWarnings != ""){
    strOTCMainDescription += strWarnings;
  }
  if (strOther != ""){
    strOTCMainDescription += strOther;
  }
  if (strCountryOrigin != ""){
    strOTCMainDescription += strCountryOrigin;
  }
  if (manuInfo != ""){
     strOTCMainDescription += manuInfo;
  }
  strOTCMainDescription += '</div></div>';
  publishArr[37] = strOTCMainDescription;
  console.log(strOTCMainDescription);


  // ADDED 2-16
  publishExportArr[0] = []
  publishLength = resultData.length + 20;

  publishExportArr[0].date = "date";
  publishExportArr[0].sku = "sku";
  publishExportArr[0].title_otc_main = "title_otc_main";
  publishExportArr[0].is_parent_child = "is_parent_child";
  publishExportArr[0].manufacturer_name = "manufacturer_name";
  publishExportArr[0].manufacturer_phone = "manufacturer_phone";
  publishExportArr[0].manufacturer_address = "manufacturer_address";
  publishExportArr[0].manufacturer_website = "manufacturer_website";
  publishExportArr[0].paragraph_1 = "paragraph_1";
  publishExportArr[0].paragraph_1_for = "paragraph_1_for";
  publishExportArr[0].paragraph_2 = "paragraph_2";
  publishExportArr[0].paragraph_2_for = "paragraph_2_for";
  publishExportArr[0].features = "features";
  publishExportArr[0].has_ingredients = "has_ingredients";
  publishExportArr[0].ingredients = "ingredients";
  publishExportArr[0].has_includes = "has_includes";
  publishExportArr[0].includes = "includes";
  publishExportArr[0].has_tech_specs = "has_tech_specs";
  publishExportArr[0].tech_specs = "tech_specs";
  publishExportArr[0].has_warnings = "has_warnings";
  publishExportArr[0].warnings = "warnings";
  publishExportArr[0].has_directions = "has_directions";
  publishExportArr[0].directions = "directions";
  publishExportArr[0].has_uses = "has_uses";
  publishExportArr[0].uses = "uses";
  publishExportArr[0].has_other_info = "has_other_info";
  publishExportArr[0].other_info = "other_info";
  publishExportArr[0].has_accessories = "has_accessories";
  publishExportArr[0].accessories = "accessories";
  publishExportArr[0].has_manual = "has_manual";
  publishExportArr[0].manual_file_name = "manual_file_name";
  publishExportArr[0].manual_text = "manual_text";
  publishExportArr[0].txt_country_of_origin = "txt_country_of_origin";
  publishExportArr[0].has_notes = "has_notes";
  publishExportArr[0].notes = "notes";
  publishExportArr[0].has_prodtable = "has_prodtable";
  publishExportArr[0].prodtable = "prodtable";
  publishExportArr[0].strOTCMainDescription = "strOTCMainDescription";
  // publishExportArr[0].strFeatureTab = "strFeatureTab";
  // publishExportArr[0].strUsesTab = "strUsesTab";
  // publishExportArr[0].strIngredientsTab = "strIngredientsTab";
  // publishExportArr[0].strOtherTab = "strOtherTab";
  // publishExportArr[0].strDirectionsTab = "strDirectionsTab";
  // publishExportArr[0].strIncludesTab = "strIncludesTab";
  // publishExportArr[0].strWarningsTab = "strWarningsTab";
  // publishExportArr[0].strTechTab = "strTechTab";

  publishExportArr[1].date = tempArrayData[0];
  publishExportArr[1].sku = tempArrayData[1];
  publishExportArr[1].title_otc_main =  tempArrayData[2];
  publishExportArr[1].is_parent_child = tempArrayData[3];
  publishExportArr[1].manufacturer_name = tempArrayData[4];
  publishExportArr[1].manufacturer_phone = tempArrayData[5];
  publishExportArr[1].manufacturer_address = tempArrayData[6];
  publishExportArr[1].manufacturer_website = tempArrayData[7];
  publishExportArr[1].paragraph_1 = tempArrayData[8];
  publishExportArr[1].paragraph_1_for = tempArrayData[9];
  publishExportArr[1].paragraph_2 = tempArrayData[10];
  publishExportArr[1].paragraph_2_for = tempArrayData[11];
  publishExportArr[1].features = tempArrayData[12];
  publishExportArr[1].has_ingredients = tempArrayData[13];
  publishExportArr[1].ingredients = tempArrayData[14];
  publishExportArr[1].has_includes = tempArrayData[15];
  publishExportArr[1].includes = tempArrayData[16];
  publishExportArr[1].has_tech_specs = tempArrayData[17];
  publishExportArr[1].tech_specs = tempArrayData[18];
  publishExportArr[1].has_warnings = tempArrayData[19];
  publishExportArr[1].warnings = tempArrayData[20];
  publishExportArr[1].has_directions = tempArrayData[21];
  publishExportArr[1].directions = tempArrayData[22];
  publishExportArr[1].has_uses = tempArrayData[23];
  publishExportArr[1].uses = tempArrayData[24];
  publishExportArr[1].has_other_info = tempArrayData[25];
  publishExportArr[1].other_info = tempArrayData[26];
  publishExportArr[1].has_accessories = tempArrayData[27];
  publishExportArr[1].accessories = tempArrayData[28];
  publishExportArr[1].has_manual = tempArrayData[29];
  publishExportArr[1].manual_file_name = tempArrayData[30];
  publishExportArr[1].manual_text = tempArrayData[31];
  publishExportArr[1].txt_country_of_origin = tempArrayData[32];
  publishExportArr[1].has_notes = tempArrayData[33];
  publishExportArr[1].notes = tempArrayData[34];
  publishExportArr[1].has_prodtable = tempArrayData[35];
  publishExportArr[1].prodtable = tempArrayData[36];
  // publishExportArr[1].strOTCMainDescription = strOTCMainDescription;
  publishExportArr[1].strOTCMainDescription = tempArrayData[37];

  // publishExportArr[1].strFeatureTab = strFeatureTab;
  // publishExportArr[1].strUsesTab = strUsesTab;
  // publishExportArr[1].strIngredientsTab = strIngredientsTab;
  // publishExportArr[1].strOtherTab = strOtherTab;
  // publishExportArr[1].strDirectionsTab = strDirectionsTab;
  // publishExportArr[1].strIncludesTab = strIncludesTab;
  // publishExportArr[1].strWarningsTab = strWarningsTab;
  // publishExportArr[1].strTechTab = strTechTab;

  // document.getElementById("finalParagraphElement").innerHTML = strOTCMainDescription;
}

//  **************************************************
//  **********  SAVE DATA - FOR SAVE BUTTON
//  **************************************************

function saveDataToArray(){
  if (tempArrayFlag == true){
    // FOR IF STARTING WITH OLD SKU
    saveDataToTempArray();
  } else {
    // FOR IF STARTING WITH NEW SKU
    dataLength = 0;
    instantiateTempArray();
    tempArrayFlag = true;
    saveDataToTempArray();
  }
}

//  **************************************************
//  ******  EXPORT RESULTDATA TO XLSX DOCUMENT *******
//  **************************************************

window.exportData = function exportData() {
  xlsxFileName = document.getElementById('txt_sku').value + ".xlsx";
  addNewDataToResult();
  alasql('SELECT * INTO XLSX(?,{headers:true}) FROM ?',[xlsxFileName,resultData]);
  saveDataToTempArray();
  addNewDataToResult();
}
window.exportDataPub = function exportDataPub() {
  xlsxFileName2 = document.getElementById('txt_sku').value + "-pub.xlsx";
  addNewDataToResult();
  alasql('SELECT * INTO XLSX(?,{headers:true}) FROM ?',[xlsxFileName2,publishExportArr]);
  saveDataToTempArray();
  addNewDataToResult();

}
//  **************************************************
//  *************  MAKE COPY OF OBJECT ***************
//  **************************************************
function copy(obj) {
  var copy = Object.create(Object.getPrototypeOf(obj));
  var propNames = Object.getOwnPropertyNames(obj);
  propNames.forEach(function(name) {
    var desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });
  return copy;
}

//  ***************************************************
//  **** FILE HANDLER - UPLOAD FILE & GET FILENAME ****
//  ***************************************************

function fileHandler(){
  // console.log("FILE HANDLER START");
  var x = document.getElementById("inFiles");
  var file = x.files[0];
  fileName = file.name;
  document.getElementById("demo1").innerHTML = "File Uploaded: " + fileName + "";
  // console.log("FILE HANDLER DONE");
}

//  **************************************************
//  **********  PROCESS 'IMPORTED' FILE   (TODO: CLEANUP)
//  **************************************************

function importFileData(){
  //console.log("IMPORTFILEDATA START");
  alasql('SELECT * FROM XLSX(?,{headers:true})',[fileName],function(data){
    // console.log("IMPORTFILEDATA - PART 1");
    console.log("DATA" + JSON.stringify(data));

    // INSTANTIATE ARRAYS
    instatiateArrDataAndFinal(data.length);
    instantiateTempArray();
    // Make copy of data in resultData for export
    resultData = data;

    // FILL IN ARRDATA ARRAY FROM DATA
    for(var x = 0; x < data.length; x++){
      arrData[x][0] = data[x].date;
      arrData[x][1] = data[x].sku;
      arrData[x][2] = data[x].title_otc_main;
      arrData[x][3] = data[x].is_parent_child;
      arrData[x][4]  = data[x].manufacturer_name;
      arrData[x][5] = data[x].manufacturer_phone;
      arrData[x][6] = data[x].manufacturer_address;
      arrData[x][7] = data[x].manufacturer_website;
      arrData[x][8] = data[x].paragraph_1;
      arrData[x][9] = data[x].paragraph_1_for;
      arrData[x][10] = data[x].paragraph_2;
      arrData[x][11] = data[x].paragraph_2_for;
      arrData[x][12] = data[x].features;
      arrData[x][13] = data[x].has_ingredients;
      arrData[x][14] = data[x].ingredients;
      arrData[x][15] = data[x].has_includes;
      arrData[x][16] = data[x].includes;
      arrData[x][17] = data[x].has_tech_specs;
      arrData[x][18] = data[x].tech_specs;
      arrData[x][19] = data[x].has_warnings;
      arrData[x][20] = data[x].warnings;
      arrData[x][21] = data[x].has_directions;
      arrData[x][22] = data[x].directions;
      arrData[x][23] = data[x].has_uses;
      arrData[x][24] = data[x].uses;
      arrData[x][25] = data[x].has_other_info;
      arrData[x][26] = data[x].other_info;
      arrData[x][27] = data[x].has_accessories;
      arrData[x][28] = data[x].accessories;
      arrData[x][29] = data[x].has_manual;
      arrData[x][30] = data[x].manual_file_name;
      arrData[x][31] = data[x].manual_text;
      arrData[x][32] = data[x].txt_country_of_origin;
      arrData[x][33] = data[x].has_notes;
      arrData[x][34] = data[x].notes;
      arrData[x][35] = data[x].has_prodtable;
      arrData[x][36] = data[x].prodtable;
      arrData[x][37] = data[x].strOTCMainDescription;
    }

    // console.log("IMPORTFILEDATA 2");
    // FIND ROW WITH NEWEST DATE
    var arrRow;
    // console.log("DATA.LENGTH: " + data.length);
    if (data.length == 1) {
      // if using headers
      arrRow = 0;
    } else if (data.length == 2){
      // if NOT using headers
      arrRow = 1;
    } else {
      var dates=[];
      for(var x = 1; x < data.length; x++){
        dates.push(new Date(arrData[x][0]));
      }
      var maxDate=new Date(Math.max.apply(null,dates));
      var txt=getDateString(maxDate);
      for(var x = 1; x < data.length; x++){
        if(txt == arrData[x][0]){
          arrRow = x;
        }
      }
    }

    // COPY LATEST INFO INTO ARRAYDATA
    for(var y = 0; y < colLength; y++){
      tempArrayData[y] = arrData[arrRow][y];
    }

    dataLength = data.length;
    importDone = true;
  });
}

//  **************************************************
//  *****************  FILL IN DATA  *****************
//  **************************************************

function fillInData(){
  console.log("FILL IN");
  document.getElementById("txt_sku").setAttribute("value",tempArrayData[1]);
  document.getElementById("txt_skuTitle").setAttribute("value",tempArrayData[2]);
  document.getElementById("selectParentChild").value = tempArrayData[3];
  document.getElementById("txt_manu_name").setAttribute("value",tempArrayData[4]);
  document.getElementById("txt_manu_phone").setAttribute("value",tempArrayData[5]);
  document.getElementById("txt_manu_address").setAttribute("value",tempArrayData[6]);
  document.getElementById("txt_manu_website").setAttribute("value",tempArrayData[7]);
  CKEDITOR.instances.paragraph1editor.setData(tempArrayData[8]);
  document.getElementById("selectp1for").value = tempArrayData[9];
  CKEDITOR.instances.paragraph2editor.setData(tempArrayData[10]);
  document.getElementById("selectp2for").value = tempArrayData[11];
  CKEDITOR.instances.features1editor.setData(tempArrayData[12]);
  document.getElementById("selectHasIngredients").value = tempArrayData[13];
  CKEDITOR.instances.ingredients1editor.setData(tempArrayData[14]);
  document.getElementById("selectHasIncludes").value = tempArrayData[15];
  CKEDITOR.instances.includes1editor.setData(tempArrayData[16]);
  document.getElementById("selectHasTechSpecs").value = tempArrayData[17];
  CKEDITOR.instances.techspecseditor.setData(tempArrayData[18]);
  document.getElementById("selectHasWarnings").value = tempArrayData[19];
  CKEDITOR.instances.warningseditor.setData(tempArrayData[20]);
  document.getElementById("selectHasDirections").value = tempArrayData[21];
  CKEDITOR.instances.directionseditor.setData(tempArrayData[22]);
  document.getElementById("selectHasUses").value = tempArrayData[23];
  CKEDITOR.instances.useseditor.setData(tempArrayData[24]);
  document.getElementById("selectHasOtherInfo").value = tempArrayData[25];
  CKEDITOR.instances.othereditor.setData(tempArrayData[26]);
  document.getElementById("selectHasAccessories").value = tempArrayData[27];
  CKEDITOR.instances.accessories1editor.setData(tempArrayData[28]);
  document.getElementById("selectHasManual").value = tempArrayData[29];
  document.getElementById("txt_manual_name").setAttribute("value",tempArrayData[30]);
  document.getElementById('txt_manual_text').setAttribute("value",tempArrayData[31]);
  document.getElementById('txt_country_of_origin').setAttribute("value",tempArrayData[32]);
  document.getElementById("selectHasNotes").value = tempArrayData[33];
  CKEDITOR.instances.notes1editor.setData(tempArrayData[34]);
  document.getElementById("selectHasProdTable").value = tempArrayData[35];
  CKEDITOR.instances.prodtable1editor.setData(tempArrayData[36]);
  strOTCMainDescription = tempArrayData[37];

  toggleManualFields();
  toggleTechSpecFields();
  toggleIncludeFields();
  toggleIngredientFields();
  toggleWarningsFields();
  toggleDirectionsFields();
  toggleUsesFields();
  toggleOtherInfoFields();
  toggleAccessoriesFields();
  toggleNotesFields();
  toggleProdTableFields();
  formSaveChange();
  buttonSaveClicked();

}

//  **************************************************
//  *****************  ADD DATA TO  ******************
//  **************************************************

function addNewDataToResult() {
  tempArrayData[0] = getCurrentDate();
  // get row number
  var rowNum = dataLength;
  // instantiate row in resultData
  resultData[rowNum] = [];
  // populate row
  resultData[rowNum].date = tempArrayData[0];
  resultData[rowNum].sku = tempArrayData[1];
  resultData[rowNum].title_otc_main = tempArrayData[2];
  resultData[rowNum].is_parent_child = tempArrayData[3];
  resultData[rowNum].manufacturer_name = tempArrayData[4];
  resultData[rowNum].manufacturer_phone = tempArrayData[5];
  resultData[rowNum].manufacturer_address = tempArrayData[6];
  resultData[rowNum].manufacturer_website = tempArrayData[7];
  resultData[rowNum].paragraph_1 = tempArrayData[8];
  resultData[rowNum].paragraph_1_for = tempArrayData[9];
  resultData[rowNum].paragraph_2 = tempArrayData[10];
  resultData[rowNum].paragraph_2_for = tempArrayData[11];
  resultData[rowNum].features = tempArrayData[12];
  resultData[rowNum].has_ingredients = tempArrayData[13];
  resultData[rowNum].ingredients = tempArrayData[14];
  resultData[rowNum].has_includes = tempArrayData[15];
  resultData[rowNum].includes = tempArrayData[16];
  resultData[rowNum].has_tech_specs = tempArrayData[17];
  resultData[rowNum].tech_specs = tempArrayData[18];
  resultData[rowNum].has_warnings = tempArrayData[19];
  resultData[rowNum].warnings = tempArrayData[20];
  resultData[rowNum].has_directions = tempArrayData[21];
  resultData[rowNum].directions = tempArrayData[22];
  resultData[rowNum].has_uses = tempArrayData[23];
  resultData[rowNum].uses = tempArrayData[24];
  resultData[rowNum].has_other_info = tempArrayData[25];
  resultData[rowNum].other_info = tempArrayData[26];
  resultData[rowNum].has_accessories = tempArrayData[27];
  resultData[rowNum].accessories = tempArrayData[28];
  resultData[rowNum].has_manual = tempArrayData[29];
  resultData[rowNum].manual_file_name = tempArrayData[30];
  resultData[rowNum].manual_text = tempArrayData[31];
  resultData[rowNum].txt_country_of_origin = tempArrayData[32];
  resultData[rowNum].has_notes = tempArrayData[33];
  resultData[rowNum].notes = tempArrayData[34];
  resultData[rowNum].has_prodtable = tempArrayData[35];
  resultData[rowNum].prodtable = tempArrayData[36];
  resultData[rowNum].strOTCMainDescription = tempArrayData[37];
}

function createPrintFriendly(){
  var str = "";
  str += "<p><b>SKU:</b> "+$("#txt_sku").val();+"</p>";
  str += "<p><b>Title:</b> "+$("#txt_sku_title").val();+"</p>";
  str += "<p><b>Parent, Child or Neither:</b> "+ $("#selectParentChild").val() +"</p>";
  str += "<p><b>Manu Info:</b><br> ";
  str += "Name: " + $("#txt_manu_name").val() + "<br>";
  str += "Phone: " + $("#txt_manu_phone").val() + "<br>";
  str += "Address: " + $("#txt_manu_address").val() + "<br>";
  str += "Web: " + $("#txt_manu_website").val() + "</p>";
  str += "<p><b>P1:</b><br>" + CKEDITOR.instances.paragraph1editor.document.getBody().getText() + "</p>";
  str += "<p><b>P1 For:</b> " + $("#selectp1for").val() + "</p>";
  str += "<p><b>P2:</b><br>" + CKEDITOR.instances.paragraph2editor.document.getBody().getText() + "</p>";
  str += "<p><b>P2 For:</b> " + $("#selectp2for").val() + "</p>";
  str += "<p><b>Features:</b><br>" + CKEDITOR.instances.features1editor.document.getBody().getText() + "</p>";
  str += "<p><b>Has Ingredients:</b> " + $("#selectHasIngredients").val() + "</p>";
  str += "<p><b>Ingredients:</b><br>" + CKEDITOR.instances.ingredients1editor.document.getBody().getText() + "</p>";
  str += "<p><b>Has Includes:</b> " + $("#selectHasIncludes").val() + "</p>";
  str += "<p><b>Includes:</b><br>" + CKEDITOR.instances.includes1editor.document.getBody().getText() + "</p>";
  str += "<p><b>Has Tech Specs:</b> " + $("#selectHasTechSpecs").val() + "</p>";
  str += "<p><b>Tech Specs:</b><br>" + CKEDITOR.instances.techspecseditor.document.getBody().getText() + "</p>";
  str += "<p><b>Has Warnings:</b> " + $("#selectHasWarnings").val() + "</p>";
  str += "<p><b>Warnings:</b><br>" + CKEDITOR.instances.warningseditor.document.getBody().getText() + "</p>";
  str += "<p><b>Has Directions:</b> " + $("#selectHasDirections").val() + "</p>";
  str += "<p><b>Directions:</b><br>" + CKEDITOR.instances.directionseditor.document.getBody().getText() + "</p>";
  str += "<p><b>Has Uses:</b> " + $("#electHasUses").val() + "</p>";
  str += "<p><b>Uses:</b><br>" + CKEDITOR.instances.useseditor.document.getBody().getText() + "</p>";
  str += "<p><b>Has Other Info:</b> " + $("#selectHasOtherInfo").val() + "</p>";
  str += "<p><b>Other Info:</b><br>" + CKEDITOR.instances.othereditor.document.getBody().getText() + "</p>";
  str += "<p><b>Has Accessories:</b> " + $("#selectHasAccessories").val() + "</p>";
  str += "<p><b>Accessories:</b><br>" + CKEDITOR.instances.accessories1editor.document.getBody().getText() + "</p>";
  str += "<p><b>Docs:</b><br> ";
  str += "<b>Manual:</b><br> ";
  str += "<b>Has Manual:</b> " + $("#selectHasManual").val() + "<br>";
  str += "<b>Name:</b> " + $("#txt_manual_name").val() + "<br>";
  str += "<b>Text:</b> " + $("#txt_manual_text").val() + "<br>";
  str += "</p><p>"
  str += "<b>Country of Origin:</b> " + $("#txt_country_of_origin").val() + "<br>";
  str += "</p>"
  str += "<p><b>Has Notes:</b> " + $("#selectHasNotes").val() + "</p>";
  str += "<p><b>Notes:</b><br>" + CKEDITOR.instances.notes1editor.document.getBody().getText() + "</p>";
  str += "<p><b>Has Prod Table:</b> " + $("#selectHasProdTable").val() + "</p>";
  str += "<p><b>Prod Table:</b><br>" + CKEDITOR.instances.prodtable1editor.document.getBody().getText() + "</p>";
  document.getElementById("printingdiv").innerHTML = str;
  print()
}

function proccessImportedData(){
  importFileData();
  checkIfImportDone();
}
function checkIfImportDone(){
  console.log("Check");
  if(importDone==true){
    fillInData();
    saveDataToArray();
  }
  else{
    setTimeout(function(){
      checkIfImportDone();
    }, 25);
  }
}

// *****************************************************************************
// **********  SIDEBAR  **********
// *****************************************************************************
$(function() {
      var offset = $("#sidebar").offset();
      var topPadding = 15;
      $(window).scroll(function() {
          if ($(window).scrollTop() > offset.top) {
              $("#sidebar").stop().animate({
                  marginTop: $(window).scrollTop() - offset.top + topPadding
              });
          } else {
              $("#sidebar").stop().animate({
                  marginTop: 0
              });
          };
      });
});

// *****************************************************************************
// **********  DOCUMENT TOGGLE FIELDS  **********
// *****************************************************************************
$(document).ready(function () {
  toggleManualFields();
  toggleTechSpecFields();
  toggleIncludeFields();
  toggleIngredientFields();
  toggleWarningsFields();
  toggleDirectionsFields();
  toggleUsesFields();
  toggleOtherInfoFields();
  toggleAccessoriesFields();
  formSaveChange();
  buttonSaveClicked();
  toggleNotesFields();
  toggleProdTableFields();

  //this will call toggleFields function every time selection value of main field changes

  $("#description_frm").change(function(){
    formSaveChange();
  });
  $("#selectHasMoreDocs").change(function () {
    toggleDocFields();
  });
  $("#selectHasManual").change(function () {
    toggleManualFields();
  });
  $("#selectHasTechSpecs").change(function () {
    toggleTechSpecFields();
  });
  $("#selectHasIncludes").change(function () {
    toggleIncludeFields();
  });
  $("#selectHasIngredients").change(function () {
    toggleIngredientFields();
  });
  $("#selectHasWarnings").change(function () {
    toggleWarningsFields();
  });
  $("#selectHasDirections").change(function () {
    toggleDirectionsFields();
  });
  $("#selectHasUses").change(function () {
    toggleUsesFields();
  });
  $("#selectHasOtherInfo").change(function () {
    toggleOtherInfoFields();
  });
  $("#selectHasAccessories").change(function () {
    toggleAccessoriesFields();
  });
  $("#selectHasNotes").change(function () {
    toggleNotesFields();
  });
  $("#selectHasProdTable").change(function () {
    toggleProdTableFields();
  });
  $("#savebtn").click(function () {
    buttonSaveClicked();
  });
  $("#publishbtn").click(function () {
    buttonPublishClicked();
  });
});

function toggleManualFields() {
  if ($("#selectHasManual").val() == "no"){
    $("#manualfields").hide();
  } else {
    $("#manualfields").show();
  }
}

function toggleTechSpecFields() {
  if ($("#selectHasTechSpecs").val() == "no"){
    $("#techspecfields").hide();
  } else {
    $("#techspecfields").show();
  }
}
function toggleWarningsFields() {
  if ($("#selectHasWarnings").val() == "no"){
    $("#warningsfields").hide();
  } else {
    $("#warningsfields").show();
  }
}
function toggleIncludeFields(){
  if ($("#selectHasIncludes").val() == "no"){
    $("#includefields").hide();
  } else {
    $("#includefields").show();
  }
}
function toggleDirectionsFields(){
  if ($("#selectHasDirections").val() == "no"){
    $("#directionsfields").hide();
  } else {
    $("#directionsfields").show();
  }
}
function toggleIngredientFields(){
  if ($("#selectHasIngredients").val() == "no"){
    $("#ingredientfields").hide();
  } else {
    $("#ingredientfields").show();
  }
}
function toggleUsesFields(){
  if ($("#selectHasUses").val() == "no"){
    $("#usesfields").hide();
  } else {
    $("#usesfields").show();
  }
}
function toggleOtherInfoFields(){
  if ($("#selectHasOtherInfo").val() == "no"){
    $("#otherinfofields").hide();
  } else {
    $("#otherinfofields").show();
  }
}
function toggleAccessoriesFields(){
  if ($("#selectHasAccessories").val() == "no"){
    $("#accessoriesfields").hide();
  } else {
    $("#accessoriesfields").show();
  }
}
function toggleNotesFields(){
  if ($("#selectHasNotes").val() == "no"){
    $("#notesfields").hide();
  } else {
    $("#notesfields").show();
  }
}
function toggleProdTableFields(){
  if ($("#selectHasProdTable").val() == "no"){
    $("#prodtablefields").hide();
  } else {
    $("#prodtablefields").show();
  }
}
function formSaveChange(){
  $("#savebtn").removeClass("col-blue").addClass("col-red");
}
function buttonSaveClicked(){
  $("#savebtn").removeClass("col-red").addClass("col-blue");
}
function formPublishChange(){
  $("#publishbtn").removeClass("col-blue").addClass("col-red");
}
function buttonPublishClicked(){
  $("#publishbtn").removeClass("col-red").addClass("col-blue");
}




// *****************************************************************************
// **********  DATE  **********
// *****************************************************************************
function dateConvert(dateobj, format){
  var year = dateobj.getFullYear();
  var month = ("0" + (dateobj.getMonth()+1)).slice(-2);
  var date = ("0" + dateobj.getDate()).slice(-2);
  var hours = ("0" + dateobj.getHours()).slice(-2);
  var minutes = ("0" + dateobj.getMinutes()).slice(-2);
  var seconds = ("0" + dateobj.getSeconds()).slice(-2);
  var day = dateobj.getDay();
  var months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  var dates = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  var converted_date = "";
  switch(format){
    case "YYYY-MM-DD":
      converted_date= year + "-" + month + "-" + date;
      break;
    case "YYYY-MMM-DD DDD":
      converted_date= year + "-" + months[parseInt(month)-1] + "-" + date + " " + dates[parseInt(day)];
      break;
  }
  return converted_date;
}
// GET CURRENT DATE
function getCurrentDate(){
  var d = new Date();
  var txt = "";
  var month = ("0" + (d.getMonth()+1)).slice(-2);
  var year = d.getFullYear();
  var day = ("0" + d.getDate()).slice(-2);
  var hours = ("0" + d.getHours()).slice(-2);
  var minutes = ("0" + d.getMinutes()).slice(-2);
  var seconds = ("0" + d.getSeconds()).slice(-2);
  txt = month + "/" + day + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
  return txt;
}
// GET DATE STRING
function getDateString(dateobj){
  var txt = "";
  var month = ("0" + (dateobj.getMonth()+1)).slice(-2);
  var year = dateobj.getFullYear();
  var day = ("0" + dateobj.getDate()).slice(-2);
  var hours = ("0" + dateobj.getHours()).slice(-2);
  var minutes = ("0" + dateobj.getMinutes()).slice(-2);
  var seconds = ("0" + dateobj.getSeconds()).slice(-2);
  txt = month + "/" + day + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
  return txt;
}
// SORT AN ARRAY OF DATES IN ORDER
function sortDates(arr, arr2){
  var swapped;
  do {
    swapped = false;
    for(var i = 0; i < arr.length-1; i++){
      var date1 = new Date(arr[i]);
      var date2 = new Date(arr[i+1]);
      if (date1 > date2){
        var temp = arr[i];
        var temp2 = arr2[i];
        arr[i] = arr[i+1]
        arr2[i] = arr2[i+1]
        arr[i+1] = temp;
        arr2[i+1] = temp2;
        swapped = true;
      }
    }
  } while (swapped);
}
