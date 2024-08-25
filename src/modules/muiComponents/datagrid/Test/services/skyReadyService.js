import axios from 'axios';
import { getBackendUrl } from '../../../../../../api/backendurl.js'


export async function getAllSkyReadyData(setRecords) {
    const results = await axios.post(getBackendUrl.skyReady, { data: { actiontype: 'getAllSkyReadyData' } });
    setRecords(results.data);
}
export async function getActiveSkyReadyData(setRecords) {
    const results = await axios.post(getBackendUrl.skyReady, { data: { actiontype: 'getActiveSkyReadyData' } });
    setRecords(results.data);
}
export async function getPassiveSkyReady(setRecords) {
    const results = await axios.post(getBackendUrl.skyReady, { data: { actiontype: 'getPassiveSkyReady' } });
    setRecords(results.data);
}

export async function getDateFilteredData(dateFilterType,setRecords) {
    const results = await axios.post(getBackendUrl.skyReady, { data: { actiontype: 'getDateFilteredData', dateFilterType: dateFilterType } });
    setRecords(results.data);
}

