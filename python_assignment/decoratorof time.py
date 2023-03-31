import time

def time_it(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"Function {func.__name__} took {end - start} seconds to execute.")
        return result
    return wrapper

# Example usage
@time_it
def my_function():
    time.sleep(1)
    print("Function executed.")

my_function()
