import validateUser from "../validate-user";

const user1 = { firstName: "" };
const user2 = { firstName: "Foo", lastName: "" };
const user3 = { firstName: "Foo", lastName: "Bar", email: "" };
const validUser = { firstName: "Foo", lastName: "Bar", email: "sample@xyz.com" };

describe("Validate user function", () => {
  it("Should return error array if invalid user is provided", () => {
    const result1 = validateUser(user1);
    const result2 = validateUser(user2);
    const result3 = validateUser(user3);
    expect(result1).toContain("First name is required");
    expect(result1).toContain("Email address is required");
    expect(result2).toContain("Last name is required");
    expect(result3).toContain("Email address is required");
  });
  it("Should return no error if valid user is provided", () => {
    expect(validateUser(validUser).length).toBe(0);
  });
});
