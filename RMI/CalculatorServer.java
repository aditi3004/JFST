import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

public class CalculatorServer extends UnicastRemoteObject implements Calculator {
    public CalculatorServer() throws RemoteException {
        super();
    }

    @Override
    public int add(int num1, int num2) throws RemoteException {
        return num1 + num2;
    }

    @Override
    public int subtract(int num1, int num2) throws RemoteException {
        return num1 - num2;
    }

    @Override
    public int multiply(int num1, int num2) throws RemoteException {
        return num1 * num2;
    }

    public static void main(String[] args) {
        try {
            CalculatorServer server = new CalculatorServer();
            java.rmi.registry.LocateRegistry.createRegistry(1098);
            java.rmi.Naming.rebind("Calculator", server);
            System.out.println("Server ready");
        } catch (Exception e) {
            System.err.println("Server exception: " + e.toString());
            e.printStackTrace();
        }
    }
}
