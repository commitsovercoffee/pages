<script>
	import * as content from './content';

	const tagStyle =
		'no-underline px-2 mx-2 rounded-xl bg-stone-400 hover:bg-stone-900 hover:text-orange-50 transition-colors duration-200 ease-in ';
</script>

<section class="prose mx-auto">
	<p class="m-4 text-xl 2xl:text-2xl">Some how I always find time to tinker. Check 'em out!</p>

	<div class="grid grid-cols-1 sm:grid-cols-2">
		{#each content.projects as project}
			<div
				class=" m-4 p-2 border border-stone-400 rounded-xl flex flex-col grow justify-betwen hover:-translate-y-3 hover:shadow-lg hover:shadow-stone-400 transition-all duration-200 ease-in-out"
			>
				<div>
					<p class="text-stone-900 font-semibold">
						{project.name}
					</p>
					<p class="text-stone-600">{project.desc}</p>
				</div>

				<div class="p-2 flex flex-wrap">
					<a class={tagStyle} href={`https://github.com/commitsovercoffee/${project.repo}`}
						>source</a
					>
					{#if project.demo != ''}
						<a class={tagStyle} href={project.demo}>demo</a>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>
