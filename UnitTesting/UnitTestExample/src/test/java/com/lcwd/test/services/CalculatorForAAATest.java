package com.lcwd.test.services;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class CalculatorForAAATest {

    private CalculatorForAAA calculator;

    @Before
    public void setUp(){
        calculator = new CalculatorForAAA();
        System.out.println("Doing the Setup");
    }

    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Cleaning Up the Setup");
    }

    @Test
    public void testAddition() {
        int result = calculator.add(2, 3);
        Assert.assertEquals(5, result);
    }

    @Test
    public void testMultiplication() {
        int result = calculator.multiply(3, 4);
        Assert.assertEquals(12, result);
    }
}
