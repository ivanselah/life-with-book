import axios from "axios";

class BestBooks {
  constructor(key) {
    this.key = key;
  }

  getBestBooks = async () => {
    const response = await axios.get(
      "https://openapi.gg.go.kr/Poplitloanbook",
      {
        params: {
          KEY: this.key,
          Type: "json",
          pIndex: 1,
          pSize: 40,
        },
      }
    );
    console.log(response);
    return response.data?.Poplitloanbook[1].row;
  };
}

export default BestBooks;
