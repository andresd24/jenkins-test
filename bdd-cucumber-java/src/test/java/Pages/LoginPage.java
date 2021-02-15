package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class LoginPage extends BasePage {
		
	public LoginPage() {}
		
	By.ByXPath byTopRightNavBarMenuLinkWhenLoggedOut = new By.ByXPath("//ul[contains(@class, 'navbar-right')]/li/a[contains(@href, '/login')]");
	By.ByXPath byEmailTexttBox = new By.ByXPath("//input[@name='email']");
	By.ByXPath byPasswordTextBox = new By.ByXPath("//input[@name='password']");
	By.ByXPath successMessageBox = new By.ByXPath("//div[contains(@class, 'alert-success')]");
	By.ByXPath loginButtonBy = new By.ByXPath("//input[@value='Log In']");
	
	public void clickOnTheTopRightMenuLoginButton() {
		
	    WebElement topRightNavBarMenuLinkWhenLoggedOut = driver.findElement(byTopRightNavBarMenuLinkWhenLoggedOut);
	    topRightNavBarMenuLinkWhenLoggedOut.click();
	}
	
	public void fillOutTheLoginFormAndSubmitIt(String email, String password) {

			
	    WebElement emailTextBox = driver.findElement(byEmailTexttBox);
	    WebElement passwordTextBox = driver.findElement(byPasswordTextBox);
	  
	    emailTextBox.sendKeys(email);
	    passwordTextBox.sendKeys(password);
	    
		WebElement registerButton = driver.findElement(loginButtonBy);
	    registerButton.click();
	}
	
}