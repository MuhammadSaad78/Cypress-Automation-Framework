describe("Login using fixture data", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });

  it("logs in with data from fixture", function () {
    cy.fixture("credentials").then((userdata) => {
      cy.login(userdata.username, userdata.password);

      // Check dashboard loaded
      cy.url().should("include", "/dashboard");
    });
  });


//Practice code wiritng on my own
  //it("login from the fixtures", function(){
// cy.fixture("credentials").then((userdata)=>{
// cy.get('input[name="username"]').type(userdata.username)
// }

// )

//   })
});
