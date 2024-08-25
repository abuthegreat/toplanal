import React from 'react';
let backEndIP = 'http://localhost:3124';
export const getBackendUrl = {
  digiPMSCrud: backEndIP + '/api/digiPMS/employeeCRUD.php',
  digiShopManCrud: backEndIP + '/api/digiShopMan/shopCRUD.php',
  digiWSCrud: backEndIP + '/api/digiWS/wsCRUD.php',
  digiRTCrud: backEndIP + '/api/digiRT/rtCRUD.php',
  digiStationCrud: backEndIP + '/api/digiStation/stationCRUD.php',
  digiAppManCrud: backEndIP + '/api/digiAppMan/appManCRUD.php',
  materialCrud: backEndIP + '/api/material/materialCRUD.php',
  digiTools: backEndIP + '/api/digiTools/toolsCRUD.php',
  digiTaskManager: backEndIP + '/api/digiTaskManager/taskManagerCRUD.php',
  digiTaskManagerAddProjectFiles: '\'http://localhost:3124/api/digiTaskManager/uploadProjectFiles.php\'',
  digiTimeManCRUD: backEndIP + '/api/digiTimeMan/timeManCRUD.php',
  digiMercury: backEndIP + '/api/digiMercury/mercuryCRUD.php',
  digiMercuryAddGroupFile: backEndIP + '/api/digiMercury/uploadGroupFile.php',
  changeGroupImage: backEndIP + '/api/digiMercury/changeGroupImage.php',
  searchui: backEndIP + '/searchui.php',
  logs: backEndIP + '/api/logs.php',
  digiProduct: backEndIP + '/api/digiProduct/digiProductCRUD.php',
  digiMercuryCrud: backEndIP + '/api/digiMercury/digiMercuryCRUD.php',
  digiProdCrud: backEndIP + '/api/digiProd/digiProdCRUD.php',
  status: backEndIP + '/api/status/statusCRUD.php',
  digiOMS: backEndIP + '/api/digiOMS/digiOMSCRUD.php',
  digiTransportEquipmentCrud: backEndIP + '/api/digiTransportEquipment/transportEquipmentCRUD.php',
  erpOperationManager: backEndIP + '/api/digiERPOperationManager/erpOperationManagerCRUD.php',
  commonCRUD: backEndIP + '/api/common/commonCRUD.php',
  digiCommis:backEndIP+"/api/digiCommis/commisCRUD.php",
  digiBookmarks:backEndIP+"/api/digiBookmarks/bookmarksCRUD.php",
  digiQM:backEndIP+"/api/digiQM/qmCRUD.php",
  spreadSheet:backEndIP+"/api/spreadSheet/spreadSheetCRUD.php",
  digiWebscraping:backEndIP+"/api/digiWebScraping/webScrapingCRUD.php",
  digiVideoPlayer:backEndIP+"/api/digiVideoPlayer/videoPlayerCRUD.php",
  ftpBrowser:backEndIP+"/api/ftpServer/ftpServerCRUD.php",
  skyReady:backEndIP+"/api/skyReady/skyReadyCRUD.php",
};

export const getAcceptedFiles = {
  fileUploader: backEndIP + '/api/digiFiles/filesCRUD.php',
  // fileUploader: 'http://localhost:3124/api/s3FileUploader.php'
  // fileUploader: 'http://localhost:3124/api/fileUploader.php'


};

export const checkAuthentication = {
  authCheck: backEndIP + '/authenticationmanager/sessionController.php',
  login: backEndIP + '/authenticationmanager/login.php'

};

export const checkAuthorization = {
  authorizationCheck: backEndIP + '/authorizationManager/authorizationController.php',
  menuProvider: backEndIP + '/authorizationManager/menuProvider.php'
};

export const getTemplates = {
  orderUpload: "http://31.207.87.58:3124/fileManager/assets/templates/orderUpload.xlsx",
  priceUpdate: "http://31.207.87.58:3124/fileManager/assets/templates/priceUpdate.xlsx",
  artikelForecastingUpload: "http://31.207.87.58:3124/fileManager/assets/templates/ArtikelForecastingUpload.xlsx",
};
