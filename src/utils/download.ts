import axios, { AxiosResponse } from 'axios';

const injectFilename = (res: AxiosResponse) => {
  const disposition = res.headers['content-disposition'];
  return decodeURI(disposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)[1].replace(/['"]/g, ''));
};

const downloadImage = async (url: string): Promise<void> => {
  await axios
    .get(url, { method: 'GET' })
    .then((res) => {
      const blob = new Blob([res.data]);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = injectFilename(res);
      document.body.appendChild(a);
      a.click();
      setTimeout((_) => {
        window.URL.revokeObjectURL(url);
      }, 60000);
      a.remove();
    })
    .catch((err) => {
      console.error('err: ', err);
    });
};

const download = (url: string): void => {
  const regex = new RegExp(/^(https:\/\/)|(http:\/\/)/);
  let startingStr = url;

  if (regex.test(url)) startingStr = url.split('//')[1];
  let removeCdrag = startingStr.split('/');
  removeCdrag.shift();
  removeCdrag.unshift('raw.communitydragon.org', 'json');
  let jsonifiedString = `https://${removeCdrag.join('/')}`;

  axios.get(jsonifiedString).then(async ({ data }) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].type === 'directory') {
        download(`${URL}${data[i].name}/`);
      } else {
        await downloadImage(`${URL}${data[i].name}`);
      }
    }
  });
};

export default download;
