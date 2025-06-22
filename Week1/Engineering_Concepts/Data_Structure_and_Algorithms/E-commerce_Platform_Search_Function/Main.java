import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
           new Product(101, "Chocolate", "Food"),
            new Product(203, "Shirts", "Clothing"),
            new Product(150, "Laptop", "Electronics"),
            new Product(180, "Sunglass", "Accessories")

        };

        Arrays.sort(products, (p1, p2) -> Integer.compare(p1.getProductId(), p2.getProductId()));

        int targetId = 150;

        // Linear Search
        Product linearSearchResult = SearchAlgorithms.linearSearch(products, targetId);
        System.out.println("Linear Search Result: " + linearSearchResult);

        // Binary Search
        Product binarySearchResult = SearchAlgorithms.binarySearch(products, targetId);
        System.out.println("Binary Search Result: " + binarySearchResult);
    }
}
