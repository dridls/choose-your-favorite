In your html file, set up and input field and get some elements to use as "players", getting their Name and age

    In your javascript, create a Class to generate your player objects. Then for each name you got from your input, generate a new player object with properties name, age and img url. Put a default value for the img url equal to empty "" to begin with. Place all objects in a array (this will be your Players array)
    
    When you are done generating player (maybe have a "Done!" button in your html? or get a fixed number of 10 users?), call the unsplash API and get a random person img for each one of your contestants. Add the img url to their respective object property.
    
    Now take two random players from your array and show their images one next to the other. The user must pick one, and this will be the "winner" among the two. The loser will be deleted, and a new contestant will be chosen randomly to compete with the existing winner.
    
    Game ends when we have just one winner, in which case we show a message "We have a winner!" and show the winners photo with his/her name and age.
    
    Use also a counter to show at each moments how many contestants are left.