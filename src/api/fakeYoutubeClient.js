import axios from 'axios';

export default class FakeYoutubeClient {
  // eslint-disable-next-line no-useless-constructor
  constructor() {}

  // 검색어를 입력했을때 keyword를 받아서 #searchByKeyword와 #mostPopular 구분
  async search() {
    return axios.get('/videos/search.json');
  };

  async videos() {
    return axios.get('/videos/search.json');
  }

  async channels() {
    return axios.get('/videos/channels.json');
  }
}