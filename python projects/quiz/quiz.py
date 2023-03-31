import time
import random

# Define a list of questions, each containing the question, the correct answer, and a list of distractors
questions = [
    {
        "question": "What is the capital of France?",
        "answer": "Paris",
        "distractors": ["London", "Madrid", "Berlin"]
    },
    {
        "question": "What is the largest planet in our solar system?",
        "answer": "Jupiter",
        "distractors": ["Mars", "Venus", "Saturn"]
    },
    {
        "question": "Who painted the Mona Lisa?",
        "answer": "Leonardo da Vinci",
        "distractors": ["Pablo Picasso", "Vincent van Gogh", "Claude Monet"]
    }
]

# Define a function to shuffle the order of the answer options
def shuffle_options(options):
    random.shuffle(options)
    return options

# Define a function to ask a question and return the user's answer
def ask_question(question):
    print(question["question"])
    options = shuffle_options([question["answer"]] + question["distractors"])
    for i, option in enumerate(options):
        print(f"{i+1}. {option}")
    answer = int(input("Enter your answer (1-4): "))
    return options[answer-1]

# Define a function to run the quiz
def run_quiz():
    score = 0
    start_time = time.time()
    for i, question in enumerate(questions):
        print(f"\nQuestion {i+1}:")
        answer = ask_question(question)
        if answer == question["answer"]:
            print("Correct!")
            score += 1
        else:
            print(f"Sorry, the correct answer is {question['answer']}.")
        time.sleep(1)
    end_time = time.time()
    print("\nQuiz complete!")
    print(f"You scored {score}/{len(questions)} points.")
    print(f"Time taken: {int(end_time - start_time)} seconds")

# Define a function to add humor to the quiz
def add_humor():
    print("Why did the tomato turn red?")
    time.sleep(1)
    print("Because it saw the salad dressing!")
    time.sleep(1)

# Define a function to add a true/false question to the quiz
def add_true_false():
    questions.append({
        "question": "True or false: the Earth is flat",
        "answer": "False",
        "distractors": ["True"]
    })

# Add some humor to the quiz
add_humor()

# Add a true/false question to the quiz
add_true_false()

# Run the quiz
run_quiz()
