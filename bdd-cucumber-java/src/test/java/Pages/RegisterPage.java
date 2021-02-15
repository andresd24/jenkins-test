package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class RegisterPage extends BasePage {
		
	public RegisterPage() {}
		
	By.ByXPath byNameTextBox = new By.ByXPath("//input[@name='name']");
	By.ByXPath bySurnameTextBox = new By.ByXPath("//input[@name='surname']");
	By.ByXPath buEmailTextBox = new By.ByXPath("//input[@name='email']");
	By.ByXPath byPasswordTextBox = new By.ByXPath("//input[@name='password']");
	By.ByXPath byConfirmPasswordTextBox = new By.ByXPath("//input[@name='confirmPassword']");
	
	By.ByXPath bySuccessMessageBox = new By.ByXPath("//div[contains(@class, 'alert-success')]");
	
	By.ByXPath byRegisterButton = new By.ByXPath("//input[@value='Register']");
	
	By.ByCssSelector byRegistrationReturnMessage = new By.ByCssSelector("register div div");
	
	
	
	public void fillOutAnSubmitRegistrationFrom(String name, String surname, String email, String password, String passwordConfirmation) {
		   
	    WebElement firstNameTextBox = driver.findElement(byNameTextBox);
	    WebElement lastNameTextBox = driver.findElement(bySurnameTextBox);
	    WebElement emailTexttBox = driver.findElement(buEmailTextBox);
	    WebElement passwordTextBox = driver.findElement(byPasswordTextBox);
	    WebElement confirmPasswordTextBox = driver.findElement(byConfirmPasswordTextBox);
	    
	    firstNameTextBox.sendKeys(name);
	    lastNameTextBox.sendKeys(surname);
	    emailTexttBox.sendKeys(email);
	    passwordTextBox.sendKeys(password);
	    confirmPasswordTextBox.sendKeys(passwordConfirmation);
	    
	    WebElement registerButton = driver.findElement(byRegisterButton);
	    registerButton.click();

	}
	
	public String returnRegistrationMessage() throws InterruptedException {
		
		WebElement registrationReturnMessage = driver.findElement(byRegistrationReturnMessage);
		return registrationReturnMessage.getText();
	}
	

}
