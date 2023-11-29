<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let data;

	// Function to fetch all posts from the API
	async function fetchAllPosts() {
		try {
			const response = await fetch('/api/posts');
			if (response.ok) {
				allPosts = await response.json();
			} else {
				console.error('Error fetching posts:', response.statusText);
			}
		} catch (error) {
			console.error('Error fetching posts:', error);
		}
	}

	onMount(async () => {
		// Fetch all posts when the component is mounted
		await fetchAllPosts();
	});
</script>

<section class="prose mx-auto my-32 bg-orange-100">
	<div class="p-8 m-0">
		<svelte:component this={data.content} />
	</div>
</section>
