import time

def decorator_function_time(func):
    def wrapper():
        start_time=time.time()
        func()
        end_time=time.time()
        print("Time taken to execute:",(end_time-start_time)," seconds")
    return wrapper


@decorator_function_time
def function():
    time.sleep(2)
    
function()
    