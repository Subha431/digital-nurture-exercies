public class FinancialForecast {

    // Recursive method to calculate future value
    public static double futureValue(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return futureValue(presentValue, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {
        double presentValue = 100000;
        double annualRate = 0.05;    
        int years = 5;

        double forecast = futureValue(presentValue, annualRate, years);
        System.out.printf("Predicted value after %d years: %.2f\n", years, forecast);
    }
}
