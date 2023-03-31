import datetime

class Task:
    def __init__(self, name, deadline):
        self.name = name
        self.deadline = deadline

    def time_left(self):
        return self.deadline - datetime.datetime.now()

def add_task():
    name = input("Enter task name: ")
    year = int(input("Enter deadline year: "))
    month = int(input("Enter deadline month: "))
    day = int(input("Enter deadline date: "))
    deadline = datetime.datetime(year, month, day)
    return Task(name, deadline)

def print_tasks(tasks):
    print("Tasks:")
    for i, task in enumerate(tasks):
        print(f"{i+1}. {task.name} - Deadline: {task.deadline} - Time left: {task.time_left()}")

def read_tasks(filename):
    tasks = []
    with open(filename, 'r') as file:
        for line in file:
            try:
                name, year, month, day = line.strip().split(',')
                deadline = datetime.datetime(int(year), int(month), int(day))
                task = Task(name, deadline)
                tasks.append(task)
            except ValueError:
                print(f"Invalid line in {filename}: {line}")
    return tasks

def write_tasks(filename, tasks):
    with open(filename, 'w') as file:
        for task in tasks:
            file.write(f"{task.name},{task.deadline.year},{task.deadline.month},{task.deadline.day}\n")

def main():
    filename = 'tasks.txt'
    tasks = read_tasks(filename)
    while True:
        print("\nWhat would you like to do?")
        print("1. Add task")
        print("2. View tasks")
        print("3. Exit")
        choice = int(input("Enter choice: "))
        if choice == 1:
            task = add_task()
            tasks.append(task)
            write_tasks(filename, tasks)
            print("Task added.")
        elif choice == 2:
            print_tasks(tasks)
        elif choice == 3:
            break
        else:
            print("Invalid choice. Try again.")

if __name__ == '__main__':
    main()
