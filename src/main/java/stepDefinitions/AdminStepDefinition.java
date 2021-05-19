package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class AdminStepDefinition {
	
	WebDriver driver;

	@Given("^User is on Login Page$")
	public void user_is_on_Login_Page() {
	    // Write code here that turns the phrase above into concrete actions
		 System.setProperty("webdriver.chrome.driver","C:\\Selenium\\chromedriver.exe"); 
		 driver = new ChromeDriver();
		 driver.get("https://www.phptravels.net/admin");
		 driver.manage().window().maximize();
		 driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
	}

	@When("^Title of login page is Administrator Login$")
	public void title_of_login_page_is_Administrator_Login() {
	    // Write code here that turns the phrase above into concrete actions
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Administator Login", title);
	}

	@Then("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("email")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
	}

	@Then("^User clicks on login button$")
	public void user_clicks_on_login_button() {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("/html/body/div[2]/form[1]/button")).click();
	}

	
	@Then("^User is on home page$")
	public void user_is_on_home_page() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(4000);
		String t = driver.getTitle();
		System.out.println(t);
		Assert.assertEquals("Dashboard", t);
	}

	@Then("^User moves to Add Admins page$")
	public void user_moves_to_Add_Admins_page() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.xpath("//*[@id=\"social-sidebar-menu\"]/li[5]/a")).click();
	    Thread.sleep(3000);
	    driver.findElement(By.xpath("//*[@id=\"ACCOUNTS\"]/li[1]/a")).click();
	    Thread.sleep(3000);
	    driver.findElement(By.xpath("//*[@id=\"content\"]/div[2]/form/button")).click();
	    Thread.sleep(3000);
	}

	@Then("^User Enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_Enters_fname_and_lname(String fname, String lname) {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.name("fname")).sendKeys(fname);
	    driver.findElement(By.name("lname")).sendKeys(lname);
	}
	
	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_Enters_email_and_password(String email, String pass) {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.name("email")).sendKeys(email);
	    driver.findElement(By.name("password")).sendKeys(pass);
	}

	@Then("^User selects \"([^\"]*)\"$")
	public void user_selects_country(String country) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.xpath("//*[@id=\"s2id_autogen1\"]/a/span[1]")).click();
	    driver.findElement(By.xpath("//*[@id=\"select2-drop\"]/div/input")).sendKeys(country);
	    if(driver.findElement(By.xpath("//*[@id=\"select2-drop\"]/ul")).toString().contains(country)==true) {
	    	System.out.println("Hello World");
	    }
	}

	@Then("^Close the browser$")
	public void close_the_browser() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    Thread.sleep(4000);
	    driver.quit();
	}

}
