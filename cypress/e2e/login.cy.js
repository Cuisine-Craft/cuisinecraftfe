describe("Login Page E2E Tests", () => {
  const baseUrl = "http://localhost:3001"; // Replace with your React app's running URL
  const apiEndpoint = "http://localhost:8080/user/login"; // Backend endpoint

  beforeEach(() => {
    // Mock the backend login API
    cy.intercept("POST", apiEndpoint, (req) => {
      const { username, password } = req.body;
      if (username === "testuser" && password === "password123") {
        req.reply({
          statusCode: 200,
          body: { token: "mockedToken" },
        });
      } else {
        req.reply({
          statusCode: 401,
          body: { message: "Login failed. Please check your username and password." },
        });
      }
    });

    // Visit the Login page before each test
    cy.visit(`${baseUrl}/login`);
  });

  it("Logs in successfully with valid credentials", () => {
    // Input valid credentials
    cy.get('input[name="username"]').type("testuser"); // Matches the mock API
    cy.get('input[name="password"]').type("password123");

    // Submit the form
    cy.get("form").submit();

    // Assert success alert
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Login successful!"); // Matches successful login alert
    });

    // Verify token is stored and user is redirected
    cy.window().its("localStorage.authToken").should("eq", "mockedToken");
    cy.url().should("include", "/search");
  });

  it("Shows error for invalid credentials", () => {
    // Input invalid credentials
    cy.get('input[name="username"]').type("invaliduser");
    cy.get('input[name="password"]').type("wrongpassword");

    // Submit the form
    cy.get("form").submit();

    // Assert error alert
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Login failed. Please check your username and password.");
    });

    // Verify the URL has not changed
    cy.url().should("include", "/login");
  });

  it("Validates form fields before submission", () => {
    // Try to submit the form without entering credentials
    cy.get("form").submit();

    // Verify required validation messages
    cy.get('input[name="username"]:invalid').should("exist");
    cy.get('input[name="password"]:invalid').should("exist");
  });
});

// Ignore uncaught exceptions from the application
Cypress.on("uncaught:exception", (err, runnable) => {
  // Returning false prevents Cypress from failing the test
  return false;
});
