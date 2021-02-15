package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.By;

import java.util.concurrent.TimeUnit;
import java.util.function.Function;

import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;


public class HelperPage extends BasePage {

	int interval = 0;
	int timeElapsed = 0;
	
	public HelperPage(){}
	
	public void waitForElementDisplay(final By byElement, int timeout, final int pollingInterval) {
		
	     Wait<WebDriver> wait = new FluentWait<WebDriver>(driver)
	                .withTimeout(timeout, TimeUnit.SECONDS)
	                .pollingEvery(pollingInterval, TimeUnit.SECONDS)
	                .ignoring(org.openqa.selenium.NoSuchElementException.class);
	        
	     Function<WebDriver, WebElement> function = new Function<WebDriver, WebElement>() {
               public WebElement apply(org.openqa.selenium.WebDriver driver) {
                	
    				System.out.println("Interval #" + interval + " /  Time Elapsed: " + timeElapsed + " seconds");
    				timeElapsed = timeElapsed + pollingInterval;
            	    interval++;
    				
            		WebElement element = driver.findElement(byElement);
            		
    				if (element.getAttribute("display") == null)
    				{
    					return element;
    				}
    				
    				return element;
                }
            };
	        
            wait.until(function);
	}
}