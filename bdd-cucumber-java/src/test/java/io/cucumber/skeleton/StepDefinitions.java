package io.cucumber.skeleton;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;

public class StepDefinitions {

    @Given("^I have (\\d+) cukes in my belly$")
    public void i_have_cukes_in_my_belly(int arg1) throws Exception {
        System.out.println("i_have_cukes_in_my_belly");
        // Write code here that turns the phrase above into concrete actions
    }

    @Then("^my belly should growl$")
    public void my_belly_should_growl() throws Exception {
        System.out.println("my belly should growl");
    }

}
