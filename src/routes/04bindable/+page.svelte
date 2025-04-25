<script lang="ts">
	let userInput = $state('friend');
</script>

<div class="container">
	<div class="pb-5 font-bold">$bindable</div>
	<div>What is your name?</div>
	<input bind:value={userInput} />
	<div>Hello {userInput}</div>
</div>
