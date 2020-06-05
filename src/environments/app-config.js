let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === 'coderprabhu.com') {
  backendHost = 'https://api.coderprabhu.com';
} else if(/^qa/.test(hostname)) {
  backendHost = `https://api.${hostname}`;
} else {
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:8080';
}

export const API_ROOT = `${backendHost}`