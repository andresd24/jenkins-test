package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class TeamsPage extends BasePage {
	
	
	By.ByXPath byTeamsNavBarLink = new By.ByXPath("//li/a[@href='/teams']");
	By.ByXPath byTeamsPageTitle = new By.ByXPath("//teams/div/h1");
	
	public TeamsPage() {}

	public void clickOnTeamsNavBarLink() {
		
	    WebElement teamsNavBarLink = driver.findElement(byTeamsNavBarLink);
	    teamsNavBarLink.click();
		
	}
	
	public String getTeamsSectionHeaderText() {     
		
	    WebElement teamsPageTitle = driver.findElement(byTeamsPageTitle);
	    return teamsPageTitle.getText();
	   
	}
	
}
