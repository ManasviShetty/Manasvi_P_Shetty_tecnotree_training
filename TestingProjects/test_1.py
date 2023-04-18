def factorial(num):
    result = 1
    for i in range(1, num+1):
        result *= i
    return result

def test_factorial():
    assert factorial(5) == 120
    print("Test passed for factorial(5)")
