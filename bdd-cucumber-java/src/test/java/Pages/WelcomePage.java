package Pages;
import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class WelcomePage extends BasePage {
	
	HelperPage helperPage;
	
	public WelcomePage() {
		helperPage = new HelperPage();
	}

	By.ByCssSelector byTeamsButton = new By.ByCssSelector("p.btn-toolbar a.btn-primary");
	By.ByCssSelector byAdminsButton = new By.ByCssSelector("p.btn-toolbar a.btn-success");
	By.ByCssSelector byContactUsButton = new By.ByCssSelector("p.btn-toolbar a.btn-warning");
	By.ByCssSelector byTopRigtNavbarSignUpLink = new By.ByCssSelector("ul.navbar-right > li > a[href='/signup']");
	By.ByCssSelector byTopRigtNavbarLoginLink =	new By.ByCssSelector("ul.navbar-right > li > a[href='/login']");
	
	
	By.ByCssSelector byTopRightNavBarDropdownMenuTitleLink = new By.ByCssSelector("li.dropdown > a.dropdown-toggle");
	By.ByXPath byTopRightNavBarDropdownControlPanelLink = new By.ByXPath("//ul[contains(@class,'dropdown-menu')]/li[1]/a[@href='/admin-panel']");
	By.ByXPath byTopRightNavBarLogoutLink = new By.ByXPath("//ul[contains(@class,'dropdown-menu')]//a/span[contains(@class, 'glyphicon-log-out')]/parent::a");
	

	public List<String> getTextsFromTheWelcomeMessage() {     
		
		List<String> textsList = new ArrayList<String>();
		
	    WebElement teamsButton = driver.findElement(byTeamsButton);
	    WebElement adminsButton = driver.findElement(byAdminsButton);
	    WebElement contactUsButton = driver.findElement(byContactUsButton);	
	    
	    textsList.add(teamsButton.getText());
	    textsList.add(adminsButton.getText());
	    textsList.add(contactUsButton.getText());
	   
	    return textsList;
	   
	}
	
	public List<String> getLinksFromTheWelcomeMenu() {     
		
		List<String> linksList = new ArrayList<String>();
	   
	    WebElement animalsButton = driver.findElement(byTeamsButton);
	    WebElement adminsButton = driver.findElement(byAdminsButton);
	    WebElement contactUsButton = driver.findElement(byContactUsButton);	
	    
	    linksList.add(animalsButton.getAttribute("href"));
	    linksList.add(adminsButton.getAttribute("href"));
	    linksList.add(contactUsButton.getAttribute("href"));
	   
	    return linksList;
	    
	}

	public void clickOnTheTopRightMenuRegisterButton() {
		
	    WebElement topRightRegisterMenuWhenLoggedOut = driver.findElement(byTopRigtNavbarSignUpLink);
	    topRightRegisterMenuWhenLoggedOut.click();
	}
	
	
	public String getUserFirstNameFromTopRightNavBarDropdownMenuTitleLink() throws InterruptedException {
		
		helperPage.waitForElementDisplay(byTopRightNavBarDropdownMenuTitleLink, 60, 2);

		WebElement topRightNavBarDropdownMenuTitleLink = driver.findElement(byTopRightNavBarDropdownMenuTitleLink);
		return topRightNavBarDropdownMenuTitleLink.getText();
		
	}

	public void clickOnControlPanelTopMenuItemLink() {

		WebElement topRightNavBarDropdownControlPanelNameLink = driver.findElement(byTopRightNavBarDropdownControlPanelLink);
		topRightNavBarDropdownControlPanelNameLink.click();
	}
		
	public String getControlPanelTextFromTopRightNavBarDropdownMenuLink() {
		
		WebElement topRightNavBarDropdownMenuTitleLink = driver.findElement(byTopRightNavBarDropdownMenuTitleLink);
		topRightNavBarDropdownMenuTitleLink.click();
		
		helperPage.waitForElementDisplay(byTopRightNavBarDropdownMenuTitleLink, 60, 2);

		WebElement topRightNavBarDropdownControlPanelNameLink = driver.findElement(byTopRightNavBarDropdownControlPanelLink);
		return topRightNavBarDropdownControlPanelNameLink.getText();
		
	}

	public void logoutFromZoo() {
		
		WebElement topRightNavBarDropdownMenuTitleLink = driver.findElement(byTopRightNavBarDropdownMenuTitleLink);
		topRightNavBarDropdownMenuTitleLink.click();

		WebElement topRightNavBarLogoutLink = driver.findElement(byTopRightNavBarLogoutLink);
		topRightNavBarLogoutLink.click();
		
	}

}
