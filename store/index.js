export const state = () => ({
  // counter: 0,
  user: null,
  materials: null,
  urls: {
    youtube: "https://www.youtube.com/@gongjusalon/videos",
  },
  infos: [
    {
      key: "name",
      name: "행사명",
      value: "2023 디지털유산전",
    },
    {
      key: "startDate",
      name: "시작날짜",
      value: "2023.10.06(금)",
    },
    {
      key: "endDate",
      name: "끝날짜",
      value: " 10.08(일)",
    },
    {
      key: "time",
      name: "관람시간",
      value: "전시회 10:00~18:00 / 마켓 푸드트럭 등 11:00~21:00",
    },
    {
      key: "place",
      name: "관람장소",
      value: "공주 아트센터고마 (충남 공주시 고마나루길 90)",
    },
    {
      key: "events",
      name: "부대행사",
      value:
        "호텔산업 전문 컨퍼런스, 관광/호텔 스타트업 포럼, 호텔 브랜드 설명회, 제6회 K-Hotelier 시상식",
    },
    {
      key: "subject",
      name: "주최 주관",
      value: "공주시 | 국립공주대학교 공주학연구원",
    },
    {
      key: "sponsor",
      name: "후원",
      value: "문화재청",
    },
  ],
});

export const getters = {
  getUser(state) {
    return state.user;
  },
  getMaterials(state) {
    return state.materials;
  },
  getInfos(state) {
    return state.infos;
  },
};

export const mutations = {
  setState(state, [key, value]) {
    state[key] = value;
  },
};

export const actions = {
  setState({ commit }, [key, value]) {
    commit("setState", [key, value]);
  },
};
