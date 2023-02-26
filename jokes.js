const jokes = [
	"Why did the tomato turn red? Because it saw the salad dressing!",
	"Why was the math book sad? Because it had too many problems.",
	"What did the grape say when it got stepped on? Nothing, it just let out a little wine.",
	"Why don't scientists trust atoms? Because they make up everything.",
	"What do you get when you cross a snowman and a shark? Frostbite.",
	"Why did the cookie go to the doctor? Because it was feeling crummy.",
	"What did one toilet say to the other toilet? You look flushed.",
	"What does a nosey pepper do? Gets jalapeno business.",
	"Why do seagulls fly over the sea? Because if they flew over the bay, they'd be bagels.",
	"What do you call a fake noodle? An impasta.",
	"How does a penguin build its house? Igloos it together.",
	"What did one hat say to the other? You stay here, I'll go on ahead.",
	"What do you call a bear with no teeth? A gummy bear.",
	"What do you call a boomerang that doesn't come back? A stick.",
	"How do you organize a space party? You planet.",
	"Why did the invisible man turn down the job offer? He couldn't see himself doing it.",
	"What's the difference between a poorly dressed man on a trampoline and a well-dressed man on a trampoline? Attire.",
	"What did the grape say when it got stepped on? Nothing, it just let out a little wine.",
	"Why don't oysters share their pearls? Because they're shellfish.",
	"What's brown and sticky? A stick."
];

const generateJokeButton = document.getElementById('generate-joke-button');
const jokeDisplay = document.getElementById('joke');

function generateJoke() {
	const randomIndex = Math.floor(Math.random() * jokes.length);
	const randomJoke = jokes[randomIndex];
	jokeDisplay.innerHTML = randomJoke;
}

generateJokeButton.addEventListener('click', generateJoke);
