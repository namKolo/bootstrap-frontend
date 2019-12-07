const baseUrl = 'https://api.github.com';

async function callApi(method: string, path: string) {
  const res = await fetch(`${baseUrl}/${path}`, {
    method,
    headers: { Accept: 'application/json' }
  });
  return res.json();
}

export default callApi;
