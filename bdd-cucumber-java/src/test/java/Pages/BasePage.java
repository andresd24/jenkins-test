package Pages;

import java.net.MalformedURLException;
	import java.net.URL;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

public class BasePage {
	
	protected static WebDriver driver;
	
	public void setWebDriver(WebDriver driver) {
		BasePage.driver = driver;
	}
		
	public void openBrowser() throws MalformedURLException{

		DesiredCapabilities capabilities = DesiredCapabilities.chrome();
		driver = new ChromeDriver(capabilities);
    	driver.get("http://localhost:4200/");
    	setWebDriver(driver);
	}
	
	public void closeBrowser() {
		
		driver.quit();
	}
	

}
