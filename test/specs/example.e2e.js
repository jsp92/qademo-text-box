import { faker } from "@faker-js/faker";

describe("Demo QA Text Box", () => {
  beforeEach(async () => {
    await browser.url("https://demoqa.com/text-box");
  });
  it("Fill out form", async () => {
    await $("#userName").setValue("testUser");
    await $("#userEmail").setValue("testEmail123@gmail.com");
    await $("#currentAddress").setValue("1234 Main St");
    await $("#permanentAddress").setValue("1234 Main St");
    await $("#permanentAddress-label").scrollIntoView();
    await $("#submit").click();
    await browser.pause(3000);
  });

  it("Using faker for the form", async () => {
    await $("#userName").setValue(faker.internet.userName());
    await browser.pause(3000);
  });
});
