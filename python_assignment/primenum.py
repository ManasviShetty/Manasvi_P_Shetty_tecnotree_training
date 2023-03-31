def is_prime(n):
    """
    A helper function to determine if a number is prime.
    """
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

def get_primes(numbers):
    """
    Given a list of numbers, return a new list with only the prime numbers.
    """
    return [n for n in numbers if is_prime(n)]

# Example usage:
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
primes = get_primes(numbers)
print(primes)  # Output: [2, 3, 5, 7]
