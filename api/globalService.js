import axios from 'axios';
import {checkAuthentication, checkAuthorization, getBackendUrl} from './backendurl';
import link from 'enl-api/ui/link';

export async function getAuthorizationArray(prsdId, setAuthenticationData) {
  const results = await axios.post(checkAuthorization.authorizationCheck, { data: { payload: prsdId } });
  setAuthenticationData(results.data);
  return results.data;
}

async function expiredLogout(reactSession){

  await axios.post(checkAuthentication.login, { data: { actiontype: 'logOutStatus', payload: reactSession } });
  await axios.post(checkAuthentication.login, { data: { actiontype: 'logout' } });

  localStorage.clear();
  window.location.href=link.loginQR;
}

export async function createBookmark(userId,featureId) {
  let response = await axios.post(getBackendUrl.digiBookmarks, { data: { actiontype: 'createBookmark',userId,featureId } });
  return response; 
}

export async function createBookmarkWithPath(userId,path) {
  let response = await axios.post(getBackendUrl.digiBookmarks, { data: { actiontype: 'createBookmarkWithPath',userId,path } });
  return response; 
}

export async function deleteBookmark(id,userId) {

  let response = await axios.post(getBackendUrl.digiBookmarks, { data: { actiontype: 'deleteBookmark',id,userId } });
  return response; 
}

export async function getBookmarks(userId) {
  let response = await axios.post(getBackendUrl.digiBookmarks, { data: { actiontype: 'getBookmarks',userId } });
  return response.data; 
}

export async function getVideoUrl(appMainName,setUrl,language) {
  console.log('lan',language)
  let response = await axios.post(getBackendUrl.digiVideoPlayer, { data: { actiontype: 'getVideoUrl',payload:appMainName,payload2:language } });
  setUrl(response.data[0]['videoURL'])
}

export async function getUserAuthorizations(userId) {
  const result = await axios.post(getBackendUrl.digiBookmarks, { data: { actiontype: 'getUserAuthorizations', userId } });
  return result.data.data;
}

export async function getSession() {
  let response = await axios.post(checkAuthentication.login, { data: { actiontype: 'loginTimeout' } });
  let loginTimeout = response.data;
  const sessionData = localStorage.getItem('reactSession');
  if (sessionData) {
    try {

      const { reactSession, expiration } = JSON.parse(sessionData);
      if (expiration && Date.now() > (expiration + (loginTimeout * 60 * 60 * 1000))) {

        expiredLogout(reactSession);

        return null;
      } else {
        return reactSession;
      }

    }
    catch(e){
      localStorage.clear();
      return null;
    }

  }
  return null; // Veri yok
}