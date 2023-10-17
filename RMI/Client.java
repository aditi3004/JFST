import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.util.Scanner;

public class Client {
    private Client() {
    }

    public static void main(String[] args) {
        try {
            // Getting the registry
            Registry registry = LocateRegistry.getRegistry(null);

            // Looking up the registry for the remote object
            Calculator calculator = (Calculator) registry.lookup("Calculator");

            // Create a Scanner to read user input
            Scanner scanner = new Scanner(System.in);

            // Prompt the user to choose an operation
            System.out.println("Choose an operation:");
            System.out.println("1. Addition");
            System.out.println("2. Subtraction");
            System.out.println("3. Multiplication");
            System.out.print("Enter the operation number: ");
            int choice = scanner.nextInt();

            // Prompt the user for two numbers
            System.out.print("Enter the first number: ");
            int num1 = scanner.nextInt();
            System.out.print("Enter the second number: ");
            int num2 = scanner.nextInt();

            int result = 0;

            // Perform the selected operation based on user's choice
            switch (choice) {
                case 1:
                    result = calculator.add(num1, num2);
                    break;
                case 2:
                    result = calculator.subtract(num1, num2);
                    break;
                case 3:
                    result = calculator.multiply(num1, num2);
                    break;
                default:
                    System.out.println("Invalid choice");
                    break;
            }

            System.out.println("Result: " + result);

            // Close the Scanner
            scanner.close();
        } catch (Exception e) {
            System.err.println("Client exception: " + e.toString());
            e.printStackTrace();
        }
    }
}
