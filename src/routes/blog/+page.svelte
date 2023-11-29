<script>
	import Post from '$lib/components/Post.svelte';

	export let data;

	let selectedTags = new Set();
	let filteredPosts = data.posts;

	console.log(filteredPosts);

	function updateFilterPosts(tag) {
		if (selectedTags.has(tag)) {
			selectedTags.delete(tag);
		} else {
			selectedTags.add(tag);
		}

		selectedTags = selectedTags;

		filteredPosts = data.posts.filter((post) => {
			return selectedTags.size === 0 || post.meta.tags.some((t) => selectedTags.has(t));
		});
	}
</script>

<section class="prose mx-auto">
	<p class="m-2 text-xl 2xl:text-2xl">
		Welcome to my blog, where I share my thoughts, experiences, and passions. Explore topics close
		to my heart and join me on a journey of discovery.
	</p>

	<section>
		{#each [...new Set(data.posts.flatMap((p) => p.meta.tags))] as tag}
			<button
				class="m-2 px-2 rounded-xl border border-stone-400 text-stone-900 transition-all ease-in-out duration-200

				{selectedTags.has(tag) && 'bg-stone-400'}"
				on:click={() => updateFilterPosts(tag)}
			>
				{tag}
			</button>
		{/each}
	</section>

	<section class="mx-4 my-16">
		<Post posts={filteredPosts} />
	</section>
</section>
