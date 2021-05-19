package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "E:\\Eclipse Workspace\\CucumberLoginDemo\\src\\main\\java\\Features\\admins.feature", //path of the feature file
		glue = {"stepDefinitions"}, //path of the step definition file 
		format = {"pretty","html:test-output", "junit:src/cucumber.xml"}, //used to generate reports in different formats 
		monochrome = true, //display the console output in a proper readable format 
		dryRun = false, //check the completeness of the stepDefinition file wrt the feature file 
		strict = true // fails the execution if there are any undefined steps
)

public class TestRunner {

}
