import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
	useRouterState,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
}

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: "RentMyNavbar — Monetize your free tool" }, // Good title
			{
				name: "description",
				content:
					"A marketplace for premium navbar ads on indie sites & open-source tools.",
			},

			// Open Graph tags
			{
				property: "og:title",
				content: "RentMyNavbar — Monetize your free tool without selling out",
			},
			{
				property: "og:description",
				content:
					"Clean ~20px header ads for open-source & indie sites. Real builder audience.",
			},
			{
				property: "og:image",
				content: "https://rentmynavbar.vercel.app/og-image.png",
			}, // ← Absolute URL, important!
			{ property: "og:url", content: "https://rentmynavbar.vercel.app/" },
			{ property: "og:type", content: "website" },

			// Twitter / X specific (helps a lot)
			{ name: "twitter:card", content: "summary_large_image" },
			{
				name: "twitter:title",
				content: "RentMyNavbar — Monetize your free tool",
			},
			{
				name: "twitter:description",
				content: "Premium navbar ads for indie tools.",
			},
			{
				name: "twitter:image",
				content: "https://rentmynavbar.vercel.app/og-image.png",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const routerState = useRouterState();
	const isLandingPage = routerState.location.pathname === "/landing";

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
				<HeadContent />
			</head>
			<body className="font-sans antialiased wrap-anywhere selection:bg-[rgba(79,184,178,0.24)]">
				{children}
				<Scripts />
			</body>
		</html>
	);
}
