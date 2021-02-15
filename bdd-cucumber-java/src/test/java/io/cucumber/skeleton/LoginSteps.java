package io.cucumber.skeleton;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertEquals;
import java.util.List;

import Pages.WelcomePage;
import Pages.RegisterPage;
import Pages.LoginPage;
import Pages.StorePage;

import io.cucumber.java.en.And;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;


public class LoginSteps {


    WelcomePage welcomePage;
    RegisterPage registerPage;
    LoginPage loginPage;
    StorePage storePage;

    public LoginSteps() {
        welcomePage = new WelcomePage();
        registerPage = new RegisterPage();
        loginPage = new LoginPage();
        storePage = new StorePage();
    }

    @Then("^Validate that the Welcome Page loads correctly$")
    public void validateTextsandLinksFromTheWelcomeMenu() {

        List<String> textsList = welcomePage.getTextsFromTheWelcomeMessage();

        assertTrue("list doesn't contain 'Show Teams'", textsList.contains("Show Teams"));
        assertTrue("list doesn't contain 'Show Admins'", textsList.contains("Show Admins"));
        assertTrue("list doesn't contain 'Contact Us'", textsList.contains("Contact us"));

        List<String> linksList = welcomePage.getLinksFromTheWelcomeMenu();
        assertTrue("list doesn't contain link '/teams'", linksList.contains("http://localhost:4200/teams"));
        assertTrue("list doesn't contain link '/admins'", linksList.contains("http://localhost:4200/admins"));
        assertTrue("list doesn't contain link '/contact'", linksList.contains("http://localhost:4200/contact"));

    }

    @And("^The user clicks on the top right menu Register button$")
    public void clickOnTheTopRightRegisterButton() {

        welcomePage.clickOnTheTopRightMenuRegisterButton();
    }


    @Given("^The user enters the required registration data \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and clicks the Register button$")
    public void fillOutTheRegisterFormAndSubmitIt(String name, String surname, String email, String password, String passwordConfirmation) throws InterruptedException {

        registerPage.fillOutAnSubmitRegistrationFrom(name, surname, email, password, passwordConfirmation);
    }


    @And("^The user clicks on the top right menu Login button$")
    public void clickOnTheTopRightLoginButton() {

        loginPage.clickOnTheTopRightMenuLoginButton();
    }


    @Given("^The user enters the required login data \"([^\"]*)\" and \"([^\"]*)\" in the Login form and clicks the Login button$")
    public void fillOutLoginFormAndSubmitIt(String email, String password) throws InterruptedException {

        loginPage.fillOutTheLoginFormAndSubmitIt(email, password);
    }

    @Then("^The user validates that the \"([^\"]*)\" from the top right menu Nav Bar drop down link is her or his first name$")
    public void validateUserNameFromTopRightMenNavBarDropdownLink (String expectedName) throws InterruptedException {

        String actualName = welcomePage.getUserFirstNameFromTopRightNavBarDropdownMenuTitleLink();

        assertEquals("Name for top right menu nav bar dropdown link doesn't match expected", expectedName, actualName);
    }

    @Then("^The response registration success or error message that shows up needs to match the expected \"([^\"]*)\"$")
    public void registrationReturnMessageMustMatchExpected(String message) throws InterruptedException  {
       assertEquals("Registration return message different than expected", message, registerPage.returnRegistrationMessage());

    }

    @When("^The user navigates to the Store page from the NavBar$")
    public void clickOnStoresNavbarLink() {

        storePage.clickOnStoresNavBarLink();
    }

}
