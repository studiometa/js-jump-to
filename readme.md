A small script to jump to content.

## Use

```html
<html>
	<head>
		<style>
			header {
				width: 100%;
				height: 100vh;
			}
		</style>
	</head>
	<body>

		<header>
			<h1>A nice title</h1>
			<button id="js-jump-to--btn">Jump to content</button>
		</header>

		<main>
			<h2>A title for the content</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint et eligendi ipsum maiores, reiciendis deserunt suscipit officia dolorum deleniti. Autem ipsa, quisquam quam amet deserunt earum vel, molestias rem.</p>
			<p>Mauris tellus est, volutpat quis dolor a, maximus aliquam arcu. Vestibulum id magna ac dolor placerat faucibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc tempus congue dui ut gravida. Vestibulum eleifend elit orci, et mattis magna tempor tincidunt. Vivamus ante tellus, sagittis quis ultrices ac, pellentesque consectetur sapien. Phasellus a sodales eros.</p>
		</main>

		<script defer src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
		<script defer src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"></script>
		<script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.5/TweenLite.min.js"></script>
		<script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.5/easing/EasePack.min.js"></script>
		<script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.5/plugins/ScrollToPlugin.min.js"></script>
		<script defer src="/js/jumpTo.min.js"></script>
		<script defer>
			window.addEventListener('load', function() {
				jumpTo();
			});
		</script>
	</body>
</html>
```

## Dependencies

- [jQuery](http://jquery.com/)
- [jQuery Mousewheel](https://github.com/jquery/jquery-mousewheel)
- Greensock's [TweenLite](https://greensock.com/tweenlite) with the [scrollTo plugin](https://greensock.com/ScrollToPlugin) and the [EasePack](https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.5/easing/EasePack.min.js)
