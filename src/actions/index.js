import constants from "../utils";

const setUser = (value) => {
  return {
    type: constants.SET_USER,
    value: value,
  };
};
const setUsers = (value) => {
  return {
    type: constants.SET_USERS,
    value: value,
  };
};
const setFleets = (value) => {
  return {
    type: constants.SET_FLEETS,
    value: value,
  };
};
const setLikes = (value) => {
  return {
    type: constants.SET_LIKES,
    value: value,
  };
};
const setMessages = (value) => {
  return {
    type: constants.SET_MESSAGES,
    value: value,
  };
};
const setPosts = (value) => {
  return {
    type: constants.SET_POSTS,
    value: value,
  };
};
const setHashTags = (value) => {
  return {
    type: constants.SET_HASH_TAGS,
    value: value,
  };
};
const setBanners = (value) => {
  return {
    type: constants.SET_BANNERS,
    value: value,
  };
};
const setProfileTab = (value) => {
  return {
    type: constants.SET_PROFILE_TAB,
    value: value,
  };
};
const setProfiles = (value) => {
  return {
    type: constants.SET_PROFILES,
    value: value,
  };
};
const setFollowings = (value) => {
  return {
    type: constants.SET_FOLLOWINGS,
    value: value,
  };
};
const setFollowers = (value) => {
  return {
    type: constants.SET_FOLLOWERS,
    value: value,
  };
};
const setNotifications = (value) => {
  return {
    type: constants.SET_NOTIFICATIONS,
    value: value,
  };
};

const actions = {
  setUser,
  setUsers,
  setMessages,
  setPosts,
  setHashTags,
  setLikes,
  setFleets,
  setBanners,
  setProfileTab,
  setProfiles,
  setFollowings,
  setFollowers,
  setNotifications,
};

export default actions;
