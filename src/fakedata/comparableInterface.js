
const comparableInterface = {
  title: "Comparable interface in Java",
  image: "/picture1.png",
  description: "What you should know about Comparable Interface in Java",
  tags: ['java', 'interface', 'comparable', 'compareTo'],
  views: 0,
  comments: [],
  rates: 0,
  createdAt: 'Jan 18, 2020',
  content: `

In the Object-Oriented Programming (OOP) context, an interface is a way of describing what classes should do, without specifying how they should do it. In Java programming language and most other OOP languages, there are some built-in interfaces that classes can implement so that the objects of these implementing classes can be used whenever conformance to the interface is required. 
The Comparable interface is one of the Java built-in interfaces that belong to the java.lang package and has only one abstract method (compareTo( ) method) associated with it. This interface is important since it empowers the implementing class with the sorting service (i.e. it provides a good way of sorting objects of the implementing class on the basis of one of that class fields).  This interface is completely different from the Comparator interface.
Here is what this interface looks like:
public interface Comparable 
{
	int compareTo(Object other); // parameter has type Object 
}

As of Java 5, this interface has been enhanced to the extent that it has become a generic type. Here is what its generic type looks like:
public interface Comparable<T> 
{
	int compareTo(T other); // parameter has type T
}

What makes both of them different?
Before Java 5, the compareTo method could only accept a parameter of type Object that would be manually cast to the desired type. Let’s consider an example of the Employee class that implements the Comparable interface, as follows:
public class Employee implements Comparable
{
	// instance fields
	private String name;
	private double salary;

	// constructor
	public Employee(String name, double salary)
	{
		this.name = name;
		this.salary = salary;
	}
      
      //getters
      public double getSalary()
      {
            return this.salary;
      }	

      public String getName()
      {
            return this.name;
      }	

      // defining the typeless Comparable method: compareTo
	public int compareTo(Object other)
	{
		// manually casting to the desired type
		Employee emp = (Employee) other;
		return Double.compare(this.salary, emp.getSalary());
	}

      //optional additional methods go here
}


In the above code, the compareTo( ) method accepts one parameter of the type Object (Object other), which needs to be manually cast to the type of the object (i.e. Employee) that it is to be compared to.
The generic type has been adopted to avoid the unexpected misfortune that the manual typecasting could be causing. Let’s rewrite the same class Employee implementing the generic typed Comparable interface:
// the Comparable has a type: Employee
public class Employee implements Comparable<Employee>
{
	// instance fields
	private String name;
	private double salary;

	// constructor
	public Employee(String name, double salary)
	{
		this.name = name;
		this.salary = salary;
	}
      
      ///getters
      public double getSalary()
      {
            return this.salary;
      }	

      public String getName()
      {
            return this.name;
      }	
      /*
      *the parameter type of this method is now the same as the 
      *one that the interface has.
      *No more need for manual casting from Object to the desired type
     */
	public int compareTo(Employee other)
	{
		return Double.compare(this.salary, other.getSalary());
	}
     //optional additional methods go here!
}

The compareTo( ) method now accepts an object of the same type that was supplied to the Comparable interface (i.e. Employee). This implies that the object that is to be compared to must also be of this same type (i.e. Employee) so that the manual casting should be avoided.

How does Comparable interface work?
As mentioned earlier, the Comparable interface provides the implementing class with the ability to compare two of its objects based on one of its fields (instance variables). Considering the same example of Employee class that implements the Comparable interface, it is now legal to write the following code:

public class Main
{
	public static void main(String args[])
	{
		Employee emp1 = new Employee("Charles Hoop", 3500.45);
		Employee emp2 = new Employee("Mark Dalton", 4800.30);

		int value = emp1.compareTo(emp2);
		System.out.println(value);
	}
}
 
Two objects of the Employee class can now be compared one to the other based on the class field salary because this class has implemented the Comparable interface and the compareTo( ) method has been defined to perform the comparison of any two objects of this class based on the instance variable salary. The compareTo( ) method returns an integer that determines the results of the comparison of the object emp1 with the other object emp2: 
int value = emp1.compareTo(emp2);

If the return value is a negative integer, then the emp1’s salary is less than emp2’s; if it is zero, then their salaries are equal, otherwise, emp1’s is greater than emp2’s. 
What makes this interface much more interesting is the way it provides the implementing class with the ability for using the compareTo( ) method to sort its objects in any data structure that supports the sorting service, such as Arrays, List, and so on. Let’s consider the Arrays class, and show how the Comparable interface can enable us to sort objects through the Arrays static method sort( ):
import java.util.*;

 public class Main
{
	public static void main(String args[])
	{
	   var employees = new Employee[3];
	   employees[0] = new Employee("Dalton", 5600.80);
	   employees[1] = new Employee("Mark", 8000.45);
	   employees[2] = new Employee("Nancy", 4300.11);

         // sorting Employee objects based on the salary field
	   Arrays.sort(employees);

	   for (Employee emp: employees)
		System.out.println("name:"+emp.getName() + "\tsalary:" + emp.getSalary());
      }
}

As a result, this code will print all the employees in a sorted order according to their respective salaries. 

Conclusion
In this short post, we saw how important and interesting the Comparable interface with its unique compareTo method is. Classes that implement it gain the ability to compare their objects based on a single instance variable and the power to have their objects sorted using the Arrays sort method.

`
};

module.exports = {

 comparableInterface }