package io.cucumber.skeleton;

import java.net.MalformedURLException;

import Pages.BasePage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Given;


public class CommonSteps {

   BasePage basePage = new BasePage();
   
   public CommonSteps() {
	   basePage = new BasePage();
   }

    @When("^I wait (\\d+) milliseconds$")
    public void i_wait_hour(int arg1) throws Exception {
        Thread.sleep(arg1);
        // Write code here that turns the phrase above into concrete actions
    }

    @Given("^The user opens a Browser and navigates to the Fifa app root URL$")
    public void goToMainPage() throws MalformedURLException{
        basePage.openBrowser();

    }

   @Given("^The user opens a Browser and navigates to the Fifa 2020 app root URL$")
   public void goToFifa2020Site() throws MalformedURLException{
	   basePage.openBrowser();
	   
   }
	
   @And("^The user closes the browser session$") 
   public void closeBrowserSession() {   

	   basePage.closeBrowser();
	   
   }
	
}