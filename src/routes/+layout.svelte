<script>
	import '../app.css';
	import { page } from '$app/stores';

	import '@fontsource-variable/crimson-pro';

	// current url
	$: url = $page.url.pathname.split('/').pop() || $page.url.pathname;

	// nav bar
	const links = ['home', 'projects', 'blog', 'about'];
	console.log($page.url.pathname);
</script>

<section>
	{#each links as link}
		{#if link == 'home'}
			<a href="/">{link}</a>
		{:else if link == url}
			<a href={link == 'home' ? '/' : `/${link}`}>{link}</a>
		{:else}
			<a href={link == 'home' ? '/' : `/${link}`}>{link}</a>
		{/if}
	{/each}
</section>
<slot />
