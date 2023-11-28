<script>
	import '../app.css';
	import '@fontsource-variable/crimson-pro';

	// nav bar
	import { page } from '$app/stores'; // yields page url
	const links = ['home', 'projects', 'blog', 'about']; // nav bar links

	// custom cursor
	import { spring } from 'svelte/motion';

	let innerHeight = 0;
	let innerWidth = 0;

	let size = spring(20);
	let coords = spring(
		{ x: -50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.4
		}
	);
</script>

<!-- custom cursor -->
<svelte:window
	bind:innerWidth
	bind:innerHeight
	on:mousemove={(e) => {
		coords.set({ x: e.clientX, y: e.clientY });
	}}
	on:mousedown={() => size.set(30)}
	on:mouseup={() => size.set(20)}
/>

<!-- nav bar -->
<div
	class="py-12 bg-gradient-to-b from-orange-50 from-90% sticky top-0 flex lg:justify-end justify-center"
>
	<section class="w-min mx-16 px-4 border border-stone-400 rounded-full bg-amber-50 flex">
		{#each links as link}
			<a
				class={`  
					${'mx-2 my-1 px-2 py-1 text-xl lg:text-2xl transition-all duration-200 ease-in-out'}
					${
						$page.url.pathname.includes(link)
							? 'text-stone-900'
							: 'text-stone-400 hover:text-stone-900 active:translate-y-1'
					}
					`}
				href={`/${link}`}>{link}</a
			>
		{/each}
	</section>
</div>

<svg viewBox="0 0 {innerWidth} {innerHeight}" class="fixed top-0 left-0 z-50 pointer-events-none">
	<circle cx={$coords.x} cy={$coords.y} r={$size} class="fill-current text-stone-400 opacity-40" />
</svg>

<!-- slot for page specific content -->
<slot />
