const axios = require("axios");
axios.defaults.baseURL = "http://localhost:3030";

describe("Api Test For Base Route", () => {
  it("GET: Base Route - Expect status 404", async () => {
    try {
      const { status, data } = await axios.get(`/api`);
      expect(status).toEqual(404);
    } catch ({ response }) {
      expect(response.status).toEqual(404);
      expect(response.data.msg).toEqual("Route Not Found");
    }
  });

  describe("/Books Route", () => {
    it("GET: All Books - Expect status 200", async () => {
      const { status, data } = await axios.get(`/api/books`);
      expect(status).toEqual(200);
      // or we can use toEqual 50 if the data set is 50 all the time
      expect(data.books.length).toBeGreaterThan(0);
    });

    it("INVALID METHOD status:405", async () => {
      const requests = ["post", "put", "patch", "delete"];
      requests.forEach(async (request) => {
        try {
          const { status, data } = await axios[request]("/api/users");
          expect(status).toEqual(405);
        } catch ({ response }) {
          expect(response.status).toEqual(405);
          expect(response.msg).toEqual("Method not allowed");
        }
      });
    });
  });
});
