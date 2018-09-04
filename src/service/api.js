export default function callApi(config) {
    // const token = localStorage.getItem('access_token') || null;
    return axios(Object.assign({
        baseURL: API_URL,
        // headers: Object.assign({ 'X-Requested-With': 'XMLHttpRequest' }, token ? { Authorization: `Bearer ${token}` } : undefined),
    }, config));
}
