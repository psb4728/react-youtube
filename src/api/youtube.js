import axios from 'axios';

export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  // 검색어를 입력했을때 keyword를 받아서 #searchByKeyword와 #mostPopular 구분
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  };

  // 채널
  async channelImageURL(id) {
    return this.apiClient.channels({ params: { part: 'snippet', id}})
    .then(res => res.data.items[0].snippet.thumbnails.default.url);
  }

  // 해당 채널 영상들
  async searchByChannelId(channelId) {
    return this.apiClient
    .playlist({
      params: {
        part: 'snippet', 
        maxResults: 25, 
        order: 'date', 
        type: 'video',
        channelId,
      },
    })
    
    .then((res) => res.data.items);
  }

  // 검색어가 있을때
  async #searchByKeyword(keyword) {
    return this.apiClient
    .search({ 
      params: { 
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword
      },
    })
    .then((res) => res.data.items.map((item) => ({ ...item, id: item.id.videoId })))
  }

  // 검색어가 없을때
  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
        part: 'snippet',
        maxResults: 25,
        chart: 'mostPopular'
      },
    })
    .then((res) => res.data.items);
  }

}