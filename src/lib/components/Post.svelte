<script>
	export let posts = [];
</script>

<dl>
	{#each posts as { path, meta }}
		<dt>
			<a
				href={path}
				class="text-xl text-stone-900 underline hover:no-underline decoration-2 underline-offset-4"
			>
				{meta.title}
			</a>
		</dt>
		<dd class="ml-8 text-lg 2xl:text-2xl">{meta.desc}</dd>
		<hr />
	{/each}
</dl>
