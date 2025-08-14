 // Get references to the HTML elements we need to interact with
        const yourNameInput = document.getElementById('yourName');
        const loverNameInput = document.getElementById('loverName');
        const calculateBtn = document.getElementById('calculateBtn');
        const resultDiv = document.getElementById('result');

        // Add a click event listener to the button
        calculateBtn.addEventListener('click', () => {
            const name1 = yourNameInput.value.trim();
            const name2 = loverNameInput.value.trim();

            // Check if both names have been entered
            if (name1 === '' || name2 === '') {
                resultDiv.textContent = 'Please enter both names!';
                resultDiv.classList.add('text-red-500'); // Add error color
                return; // Stop the function here
            }
            
            // Clear any previous error styling
            resultDiv.classList.remove('text-red-500');
            
            // --- The Love Calculation Logic ---
            // 1. Generate a random number between 0 and 0.99...
            let love = Math.random();
            // 2. Multiply by 100 to get a number between 0 and 99.99...
            love = love * 100;
            // 3. Add 1 to make the range 1 to 100.99...
            love = love + 1;
            // 4. Use Math.floor to remove the decimal and get a whole number (1-100)
            love = Math.floor(love);

            // --- Display the Result ---
            // Add a loading effect for a moment
            resultDiv.innerHTML = '<span class="animate-pulse">Calculating...</span>';

            // Wait for a short period before showing the final score to build anticipation
            setTimeout(() => {
                let message = `Your love score is ${love}%!`;
                
                // Add a fun, custom message based on the score
                if (love > 80) {
                    message += " 💕 You two are a perfect match!";
                } else if (love > 50) {
                    message += " 😊 There's a strong connection!";
                } else {
                    message += " 🤔 There's potential, keep trying!";
                }
                
                resultDiv.innerHTML = message;
            }, 1000); // 1000 milliseconds = 1 second
        });