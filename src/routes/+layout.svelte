<script>
	import '../app.css';
	import '@fontsource-variable/crimson-pro';

	// nav bar
	import { page } from '$app/stores'; // yields page url
	const links = ['home', 'projects', 'blog', 'about']; // nav bar links
</script>

<!-- nav bar -->
<div
	class="py-16 bg-gradient-to-b from-orange-50 from-80% sticky top-0 flex lg:justify-end justify-center"
>
	<section class="w-min mx-16 border border-stone-400 rounded-full flex">
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

<!-- slot for page specific content -->
<slot />
