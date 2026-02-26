export default function handler(req, res) {
  res.status(200).json({
    api: "BROKEN LORD API",
    owner: "Lord",
    brand: "BROKEN LORD",
    status: "running",
    version: "1.0.0",
    channel: "https://whatsapp.com/channel/0029Vb7CsEEG8l5M03yjxY08",
    endpoints: {
      wiki: "/api/wiki",
      duckduckgo: "/api/ddg",
      books: "/api/books",
      github: "/api/github",
      stackoverflow: "/api/stack"
    }
  });
}
