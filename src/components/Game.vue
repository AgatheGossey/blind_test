<template>
	<div id="container">
		<canvas :id="[goodResponse ? 'my-canvas' : '']"> </canvas>
		<div id="game">
			<div id="bar">
				<p>Chair & Tendre</p><v-icon>fas fa-music</v-icon>
				<p>{{ user }}  <v-icon id="heart">fas fa-heart</v-icon></p>
			</div>
			<v-container>
				<input
					v-model="answer"
					@keydown.enter="checkAnswer()"
					id="input"
					:class="[shaking ? 'shake' : '']" :placeholder="placeholderText"
					autofocus
					:disabled="goodResponse || time === 0"
				>
			</v-container>
			<div id="timer">{{ time }}</div>
			<div id="cardsContainer">
				<v-card class="card" id="historicals">
					<div class="title">
						<div>HISTORIQUE</div>
						<div>{{ songIndex }}/ 10</div>
					</div>
					<v-divider/>
					<v-card id="historical">
						<img src="https://e-cdns-images.dzcdn.net/images/playlist/f50bfcf1df80d845b83a6213a61d6aa8/120x120-000000-80-0-0.jpg?fbclid=IwAR0ckm5j_b2cTKVAGLsEj7vBWkYS5f9QBuDydlzInXkMbn_VZ3JxunBsRdA"/>
						<div>
							<v-card-title>Artiste</v-card-title>
							<v-card-subtitle>Subtitle</v-card-subtitle>
						</div>
					</v-card>
				</v-card>
				<v-card class="card" id="ranking">
					<div class="title">
						<div>CLASSEMENT</div>
						<div>{{ ranking }}/ {{ totalNumberOfPlayers }}</div>
					</div>
					<v-divider/>
					<div id="details">
						<div>{{ rankingIndex }}</div>
						<div>{{ user }}</div>
						<div>{{ score }}<span id="pts">PTS</span> </div>
					</div>
				</v-card>
			</div>
		</div>
	</div>
</template>

<script>
import ConfettiGenerator from "confetti-js";

export default {
	name:'Game',
	data() {
		return {
			user: 'Agathe',
			score: '0',
			time: 13,
			intervalId: null,
			goodResponse: false,
			shake: false,
			answer: '',
			placeholderText: 'Devine le titre et l\'artiste !',
			ranking: null,
			totalNumberOfPlayers: null,
			songIndex: 0,
			rankingIndex: 1
		}
	},

	mounted() {
		this.countdown()
		this.canvas()
	},

	computed: {
		shaking() {
			if (this.time < 7) {
				return true
			}
			if (this.time === 0) {
				return false
			}
			return false
		}
	},

	methods: {
		countdown() {
			this.intervalId = setInterval(() => {
				this.time--

				if (this.time === 0) {
					clearInterval(this.intervalId)
					if (this.goodResponse) {
						this.placeholderText = 'Prépare toi pour la prochaine chanson !'
					} else {
						this.placeholderText = "Perduuuuu ! Prépare toi pour la prochaine chanson."
					}
				}
			}, 1000);
		},



		canvas() {
			const confettiSettings = { target: 'my-canvas', max: 400, clock: 60 };
			const confetti = new ConfettiGenerator(confettiSettings);
			confetti.render();
		},

		checkAnswer() {
			this.answer = ''
			if (this.goodResponse === true) {
				this.placeholderText = "Championnnnnn !"
			}
		},
	}
}
</script>

<style scoped lang="scss">

#container {
	width: 100%;
	height: 100%;
	min-height: 100vh;
	padding: 0;
}

#game {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	padding: 0;
}

#my-canvas {
	width: 100vw;
	height: 100vh;
	z-index: 1;
}

#bar {
	text-transform: uppercase;
	padding-top: 2rem;
	display: flex;
	justify-content: space-around
}

#heart {
	color: red;
	font-size: 1em;
}

.container {
	padding: 5em;
}

#input {
	width: 100%;
	background-color: white;
	padding: 1rem;
	font-weight: bold;
	box-shadow: 1px 1px 8px black;
	z-index: 40;
}

.shake {
	animation: 1s linear 0s infinite shake
}

#timer {
	margin: auto;
	width: 75px;
	background-color: #994ac7;
	color: white;
	font-weight: bold;
	font-size: 2rem;
}

#cardsContainer {
	margin-top: 5em;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-around;
	flex-grow: 1;
	z-index: 9;
}

.card {
	width: 30%;
	height: 100%;
	padding: 1em;
	min-height: 800px;
	font-weight: 900;
}

#historicals {
	margin-left: 10%;
}

#ranking {
	margin-right: 10%;
}

#details {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding-top: 1em;
}

.title {
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	font-family: 'Baloo Tammudu 2', cursive;
}

#pts {
	font-size: 0.5em;
}

@media (min-width: 768px) {

	#input {
		width: 90%;
		font-size: 3em;
	}

	#historical {
		display: flex;
	}

	.title {
		flex-direction: row;
		font-size: 1.5em;
	}
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

</style>