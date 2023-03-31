while True:
    try:
        numerator = float(input("Enter the first num: "))
        denominator = float(input("Enter the second num: "))
        if denominator < 0:
            raise ValueError("Error: Denominator cannot be negative. Please enter a non-negative value for the denominator.")
        result = numerator / denominator
        print(f"{numerator} / {denominator} = {result}")
        break
    except ZeroDivisionError:
        print("Error: Denominator cannot be zero. Please enter a non-zero value for the denominator.")
    except ValueError as error:
        print(error)
