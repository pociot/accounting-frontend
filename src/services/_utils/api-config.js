let backendHost;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if(hostname === 'hcb-kpociot.herokuapp.com') {
  backendHost = 'https://hcb-kpociot.herokuapp.com';
} else if(/^qa/.test(hostname)) {
  backendHost = `https://api.${hostname}`;
} else {
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:8282';
}

export const API_ROOT = `${backendHost}`;/*/accounts/api/${apiVersion}`;*/