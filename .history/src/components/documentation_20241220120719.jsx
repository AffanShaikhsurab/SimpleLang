import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Play, Book, Code, Box, Search, Menu, X, ArrowRight } from 'lucide-react';

const Documentation = () => {
    const [activeSection, setActiveSection] = useState('getting-started');
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    // Convert sections object to array for easier navigation
    const sectionKeys = Object.keys(sections);
    const currentIndex = sectionKeys.indexOf(activeSection);
  
    const handleNext = () => {
      if (currentIndex < sectionKeys.length - 1) {
        setActiveSection(sectionKeys[currentIndex + 1]);
      }
    };
  
    const handlePrevious = () => {
      if (currentIndex > 0) {
        setActiveSection(sectionKeys[currentIndex - 1]);
      }
    };
  

  const sections = {
    'getting-started': {
      title: "Getting Started",
      content: (
        <DocSection 
          title="Getting Started" 
          description="Welcome to our super fun programming language! Let's learn how to write cool programs together! 🚀"
        >
          <SubSection title="Your First Program">
            <p className="mb-4">Let's write your very first program - we'll make the computer say hello!</p>
            <CodeExample 
              title="hello_world.simple"
              code={`// This is your first program!
message is "Hello, friends!"
show(message)`} 
            />
          </SubSection>
        </DocSection>
      )
    },
    'variables': {
      title: "Variables (Like Magic Boxes!)",
      content: (
        <DocSection 
          title="Variables - Your Program's Memory Boxes!" 
          description="Think of variables like magical boxes where you can store different things - numbers, words, or even lists of stuff!"
        >
          <SubSection title="Creating Your Magic Boxes">
            <CodeExample 
              title="Creating Variables"
              code={`// Storing a word
my_name is "Alex"

// Storing a number
my_age is 10

// Storing multiple numbers
my_scores is 95, 87, 92

// Changing what's in your box
my_score is 85
my_score is my_score + 5   // Now it's 90!`} 
            />
          </SubSection>
        </DocSection>
      )
    },
    'arrays': {
      title: "Arrays (Lists of Things)",
      content: (
        <DocSection 
          title="Arrays - Making Lists of Things!" 
          description="Arrays are like shopping lists - you can put lots of things in them and find them easily later!"
        >
          <SubSection title="Creating Lists">
            <CodeExample 
              title="Making Lists (Arrays)"
              code={`// Making a list of numbers
my_numbers is 1, 2, 3, 4, 5

// Getting things from your list
first_number is my_numbers[0]     // Gets 1
second_number is my_numbers at 1  // Gets 2

// Finding out how long your list is
list_size is length of my_numbers

// Sorting your list
sorted_numbers is arrange my_numbers in ascending`} 
            />
          </SubSection>
        </DocSection>
      )
    },
    'functions': {
      title: "Functions (Your Own Commands)",
      content: (
        <DocSection 
          title="Functions - Create Your Own Commands!" 
          description="Functions are like writing your own recipe - you can use them again and again!"
        >
          <SubSection title="Making Your Own Commands">
            <CodeExample 
              title="Creating Functions"
              code={`// A simple hello function
say_hello does
    show("Hi there!")
.

// A function that adds two numbers
add_numbers takes number1, number2 does
    sum is number1 + number2
    return sum
.

// Using your functions
say_hello()
result is add_numbers(5, 3)   // Gets 8`} 
            />
          </SubSection>
        </DocSection>
      )
    },
    'classes': {
      title: "Classes (Creating Things)",
      content: (
        <DocSection 
          title="Classes - Making Your Own Things!" 
          description="Classes are like blueprints for making your own special things in your program!"
        >
          <SubSection title="Creating Your Own Things">
            <CodeExample 
              title="Making a Pet Class"
              code={`// Making a pet blueprint
create Pet with name, type does
    make_sound takes sound does
        show(name, " the ", type, " says: ", sound)
    .
.

// Making a pet
my_pet is Pet with "Fluffy", "cat"
my_pet.make_sound("Meow!")   // Shows: Fluffy the cat says: Meow!`} 
            />
          </SubSection>
        </DocSection>
      )
    },
    'loops': {
      title: "Loops (Doing Things Again and Again)",
      content: (
        <DocSection 
          title="Loops - Repeat the Fun!" 
          description="Loops help you do the same thing many times without writing it over and over!"
        >
          <SubSection title="Different Ways to Repeat">
            <CodeExample 
              title="Using Loops"
              code={`// Counting to 5
count is 1
till count > 5 do
    show(count)
    count is count + 1
.

// Doing something exactly 3 times
repeat 3 times
    show("Hip hip hooray!")
.`} 
            />
          </SubSection>
        </DocSection>
      )
    },
    'conditions': {
      title: "Making Choices (If Statements)",
      content: (
        <DocSection 
          title="Making Choices in Your Program" 
          description="Your program can make decisions just like you do!"
        >
          <SubSection title="Using If Statements">
            <CodeExample 
              title="Making Decisions"
              code={`score is 85

if score >= 90 then
    show("Super amazing job!")
otherwise if score >= 80 then
    show("Great work!")
otherwise
    show("Keep practicing!")
.`} 
            />
          </SubSection>
        </DocSection>
      )
    },
    'dictionaries': {
      title: "Dictionaries (Word Books)",
      content: (
        <DocSection 
          title="Dictionaries - Like Looking Things Up!" 
          description="Dictionaries are like address books - each name has something special connected to it!"
        >
          <SubSection title="Using Dictionaries">
            <CodeExample 
              title="Making a Dictionary"
              code={`// Making a dictionary of ages
friends is Name "Tom", Age 10, Grade 5

// Looking up values
toms_age is Age of friends    // Gets 10

// Changing values
Name of friends is "Tommy"    // Changes Tom to Tommy`} 
            />
          </SubSection>
        </DocSection>
      )
    },
    'error-handling': {
      title: "Handling Mistakes",
      content: (
        <DocSection 
          title="Dealing with Mistakes" 
          description="Sometimes things go wrong, but we can handle it!"
        >
          <SubSection title="Try and Oops Blocks">
            <CodeExample 
              title="Handling Errors"
              code={`try
    // Try to do something
    show(undefined_variable)
oops
    // If it doesn't work, do this instead
    show("Oops! Something went wrong!")
.`} 
            />
          </SubSection>
        </DocSection>
      )
    },
    'math-operations': {
        title: "Math Magic ➕",
        content: (
          <DocSection 
            title="Math Operations - Let's Calculate!" 
            description="Learn how to make your computer do all kinds of math problems!"
          >
            <SubSection title="Basic Math">
              <p className="mb-4">Here are all the cool math things you can do:</p>
              <CodeExample 
                title="Math Operations"
                code={`// Adding numbers
  sum is 5 + 3        // Gets 8
  
  // Subtracting
  difference is 10 - 4  // Gets 6
  
  // Multiplying
  product is 6 * 2     // Gets 12
  
  // Dividing
  result is 15 / 3     // Gets 5
  
  // Finding remainders (modulo)
  leftover is 7 % 3    // Gets 1
  
  // Powers (like squared or cubed)
  power is 2 ^ 3       // Gets 8 (2 × 2 × 2)`} 
              />
            </SubSection>
  
            <SubSection title="Comparing Numbers">
              <CodeExample 
                title="Comparisons"
                code={`// Is it equal?
  a equals b       // Checks if a equals b
  
  // Is it different?
  a not equals b   // Checks if a is different from b
  
  // Which one is bigger?
  a > b           // Is a bigger than b?
  a >= b          // Is a bigger or equal to b?
  
  // Which one is smaller?
  a < b           // Is a smaller than b?
  a <= b          // Is a smaller or equal to b?`} 
              />
            </SubSection>
          </DocSection>
        )
      },
      'advanced-arrays': {
        title: "Advanced Lists",
        content: (
          <DocSection 
            title="Advanced Array Features" 
            description="Cool tricks you can do with your lists!"
          >
            <SubSection title="Array Operations">
              <CodeExample 
                title="Advanced Array Features"
                code={`// Making a list
  numbers is 3, 1, 4, 1, 5
  
  // Sorting from smallest to biggest
  ascending_order is arrange numbers in ascending
  // Gets: 1, 1, 3, 4, 5
  
  // Sorting from biggest to smallest
  descending_order is arrange numbers in descending
  // Gets: 5, 4, 3, 1, 1
  
  // Finding how many things are in your list
  size is length of numbers
  // Gets: 5
  
  // Getting specific items
  first is numbers[0]      // Gets the first item
  second is numbers at 1   // Gets the second item`} 
              />
            </SubSection>
          </DocSection>
        )
      },
      'advanced-functions': {
        title: "Advanced Functions",
        content: (
          <DocSection 
            title="Advanced Function Features" 
            description="Level up your function-writing skills!"
          >
            <SubSection title="Nested Functions">
              <CodeExample 
                title="Functions Inside Functions"
                code={`// A function that uses another function
  calculate takes x, y does
      // First calculate the sum
      add takes a, b does
          return a + b
      .
      
      // Then multiply by 2
      result is add(x, y) * 2
      return result
  .
  
  answer is calculate(5, 3)   // Gets 16`} 
              />
            </SubSection>
  
            <SubSection title="Return Values">
              <CodeExample 
                title="Returning Results"
                code={`// Function that returns a value
  check_score takes score does
      if score >= 90 then
          return "A"
      otherwise if score >= 80 then
          return "B"
      otherwise
          return "Keep trying!"
      .
  .
  
  grade is check_score(85)   // Gets "B"`} 
              />
            </SubSection>
          </DocSection>
        )
      },
      'advanced-classes': {
        title: "Advanced Classes",
        content: (
          <DocSection 
            title="Advanced Class Features" 
            description="Make your classes even more powerful!"
          >
            <SubSection title="Class Methods with Parameters">
              <CodeExample 
                title="Advanced Class Features"
                code={`// Making a robot class
  create Robot with name does
      // Robot's energy level
      energy is 100
      
      // Method to move the robot
      move takes distance does
          if distance > energy then
              show(name, " is too tired to move!")
          otherwise
              energy is energy - distance
              show(name, " moved ", distance, " steps!")
          .
      .
      
      // Method to charge the robot
      charge takes amount does
          energy is energy + amount
          show(name, " charged up to ", energy, "!")
      .
  .
  
  // Using the robot
  buddy is Robot with "Buddy"
  buddy.move(50)    // Buddy moved 50 steps!
  buddy.charge(30)  // Buddy charged up to 80!`} 
              />
            </SubSection>
          </DocSection>
        )
      },
   
      'advanced-dictionaries': {
        title: "Advanced Dictionaries",
        content: (
          <DocSection 
            title="Advanced Dictionary Features" 
            description="More cool things you can do with dictionaries!"
          >
            <SubSection title="Working with Dictionaries">
              <CodeExample 
                title="Advanced Dictionary Usage"
                code={`// Making a game character
  player is Name "Alex", Health 100, Items "sword,shield"
  
  // Getting values
  name is Name of player      // Gets "Alex"
  health is Health of player  // Gets 100
  
  // Changing values
  Health of player is 90      // Updates health to 90
  
  // Adding new information
  Level of player is 5        // Adds new Level entry
  
  // Using in games
  if Health of player <= 0 then
      show(Name of player, " needs healing!")
  .`} 
              />
            </SubSection>
          </DocSection>
        )
      },
      'best-practices': {
        title: "Tips and Tricks",
        content: (
          <DocSection 
            title="Tips for Writing Great Code" 
            description="Learn how to write code that's easy to read and understand!"
          >
            <SubSection title="Good Coding Habits">
              <p className="mb-4">Here are some super important tips to remember:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Give your variables clear names that say what they do</li>
                <li>Add comments to explain your code</li>
                <li>Break big problems into smaller pieces using functions</li>
                <li>Test your code to make sure it works</li>
                <li>Keep your code neat and organized</li>
              </ul>
              <CodeExample 
                title="Good Code Example"
                code={`// Calculate player's score based on time and coins
  calculate_score takes time, coins does
      // Give points for coins collected
      coin_points is coins * 10
      
      // Give bonus points for finishing quickly
      time_bonus is 100 - time
      
      // Calculate total score
      total is coin_points + time_bonus
      return total
  .
  
  // Using the function
  final_score is calculate_score(30, 5)
  show("Your score: ", final_score)`} 
              />
            </SubSection>
          </DocSection>
        )
      }
    };
  
  
    return (
        <div className="min-h-screen bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            {/* Mobile Header with Current Section Title */}
            <div className="lg:hidden sticky top-0 bg-white z-50 py-4 border-b">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <Menu size={24} />
                </button>
                <h1 className="text-lg font-semibold text-gray-900">
                  {sections[activeSection].title}
                </h1>
                <div className="w-8" /> {/* Spacing placeholder */}
              </div>
            </div>
    
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div className="fixed inset-0 bg-black/20" onClick={() => setSidebarOpen(false)} />
                <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-4">
                  <div className="space-y-1">
                    {Object.entries(sections).map(([key, section]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setActiveSection(key);
                          setSidebarOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors
                          ${activeSection === key ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
    
            <div className="flex">
              {/* Desktop Sidebar */}
              <div className="hidden lg:block w-64 shrink-0 pr-8 py-8">
                <div className="sticky top-8">
                  <nav className="space-y-1">
                    {Object.entries(sections).map(([key, section]) => (
                      <button
                        key={key}
                        onClick={() => setActiveSection(key)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors
                          ${activeSection === key ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
    
              {/* Main Content */}
              <main className="flex-1 py-8">
                {sections[activeSection].content}
                
                {/* Mobile Navigation Buttons */}
                <div className="flex justify-between mt-8 lg:hidden">
                  <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className={`flex items-center px-4 py-2 rounded-lg ${
                      currentIndex === 0 
                        ? 'text-gray-400 bg-gray-100' 
                        : 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    Previous
                  </button>
                  
                  <button
                    onClick={handleNext}
                    disabled={currentIndex === sectionKeys.length - 1}
                    className={`flex items-center px-4 py-2 rounded-lg ${
                      currentIndex === sectionKeys.length - 1 
                        ? 'text-gray-400 bg-gray-100' 
                        : 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                    }`}
                  >
                    Next
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </main>
            </div>
          </div>
        </div>
      );
    };

;

const DocSection = ({ title, description, children }) => (
    <div className="relative mb-8 md:mb-16 px-4 md:px-8 py-6 md:py-10 shadow-lg rounded-xl overflow-hidden bg-white/80 border border-white/20">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:6rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 via-transparent to-blue-100/40" />
        <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-2xl" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900 md:bg-clip-text md:text-transparent md:bg-gradient-to-r md:from-gray-900 md:to-gray-600">
          {title}
        </h2>
        {description && (
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 bg-white/50 p-4 rounded-lg">
            {description}
          </p>
        )}
        <div className="space-y-4 md:space-y-6 relative">
          {children}
        </div>
      </div>
    </div>
  );
  
  const SubSection = ({ title, children }) => (
    <div className="relative mb-6 md:mb-8 p-4 md:p-6 rounded-xl bg-white/60 border border-white/30 shadow-lg">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-white/10" />
      <h3 className="relative text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">
        {title}
      </h3>
      <div className="relative space-y-3 md:space-y-4 text-gray-700">
        {children}
      </div>
    </div>
  );
  
  const CodeExample = ({ code, title }) => (
    <div className="relative my-4 md:my-6 rounded-xl overflow-hidden shadow-lg border border-white/30">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90" />
      
      {title && (
        <div className="relative px-4 md:px-6 py-2 md:py-3 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex space-x-1">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-300">{title}</span>
          </div>
        </div>
      )}
      
      <div className="relative p-4 md:p-6 overflow-x-auto">
        <pre className="font-mono text-xs md:text-sm text-gray-100 whitespace-pre-wrap break-words">
          {code}
        </pre>
      </div>
    </div>
  );
  

export default Documentation;