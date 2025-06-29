package com.lcwd.test.services;

import org.junit.Assert;
import org.junit.Test;

public class CalculatorTest {

    @Test
    public void addTest(){
        int result = Calculator.add(12, 15);
        int expected = 27;
        Assert.assertEquals(expected, result);
    }
}
