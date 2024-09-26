module.exports = {
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  },
  // output: "standalone", //SSR모드로 빌드된 파일을 사용할 때 사용
};
