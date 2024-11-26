import axios from "axios";

// 카카오 토큰 발급
export const getKakaoToken = async (code) => {
  const data = {
    grant_type: "authorization_code",
    client_id: "0fbbb19ed4483587cc6b3cb85da5f490", // 카카오 REST API 키
    redirect_uri: "http://localhost:8080/login", // Redirect URI
    code: code,
  };

  const queryString = Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

  return axios.post("https://kauth.kakao.com/oauth/token", queryString, {
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });
};

// 카카오 사용자 정보 조회
export const getKakaoUserInfo = async () => {
  return window.Kakao.API.request({
    url: "/v2/user/me",
  });
};