package com.lcwd.test;

import org.junit.Assert;
import org.junit.Test;

public class CalculatorTest {

    @Test
    public void testAdd() {
        int result = Calculator.add(2, 3);
        int expected = 5;

        Assert.assertEquals(expected, result);
    }
}
