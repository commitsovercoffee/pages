<script>
	export let label = 'untitled';
	export let primary = false;
	export let href = '';
</script>

<a
	{href}
	class={`my-4 px-4 py-2 rounded-full text-orange-50 text-2xl hover:text-stone-900 transition-all duration-200 delay-75 ease-in-out bg-stone-900 ${
		primary ? 'hover:bg-green-400' : 'hover:bg-sky-400'
	}`}
>
	{label}
</a>
