import { topStoriesId } from "../constant/constant";

class ApiService {
  //GET ALL ID FROM TOP STORIES
  fetchTopStoriesId = () => {
    return fetch(topStoriesId).then(response => {
      return response.json();
    });
  };
  //GET SINGLE STORY
  fetchSinlgeStory = singleStory => {
    return fetch(
      ` https://hacker-news.firebaseio.com/v0/item/${singleStory}.json?print=pretty`
    ).then(response => {
      return response.json();
    });
  };

  fetchComments = authorID => {
    return fetch(
      `  https://hacker-news.firebaseio.com/v0/item/${authorID}.json?print=pretty`
    ).then(response => {
      return response.json();
    });
  };
}

export const apiService = new ApiService();
