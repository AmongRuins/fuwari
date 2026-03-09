import type {
	AntiLeechConfig,
	ExpressiveCodeConfig,
	ImageFallbackConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
	UmamiConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "AmongRuins Blog",
	subtitle: "个人博客",
	description:
		"记录我所得知的知识，作者为萌傀儡(AmongRuins)",

	keywords: ['萌傀儡','博客','AmongRuins','Astro','Fuwari','Betsy','流转星'],
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 361, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
		forceDarkMode: true, // Force dark mode and hide theme switcher
	},
	banner: {
		enable: false,
		src: "/xinghui.avif", // Relative to the /src directory. Relative to the /public directory if it starts with '/'

		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Pixiv @chokei", // Credit text to be displayed

			url: "https://api.yppp.net/api.php", // (Optional) URL link to the original artwork or artist's page
		},
	},
	background: {
		enable: true, // Enable background image
		src: "https://api.yppp.net/api.php", // 优先使用新 API
		position: "center", // Background position: 'top', 'center', 'bottom'
		size: "cover", // Background size: 'cover', 'contain', 'auto'
		repeat: "no-repeat", // Background repeat: 'no-repeat', 'repeat', 'repeat-x', 'repeat-y'
		attachment: "fixed", // Background attachment: 'fixed', 'scroll', 'local'
		opacity: 0.5, // Background opacity (0-1)
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "/images/blog/favicon.ico", // Path of the favicon, relative to the /public directory
			//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
	apps: [
		{
			name: "夜轻Blog",
			url: "https://blog.yeqing.net/acg-api/",
			image: "https://list.yppp.net/d/cos/yeqing.webp",
			description: "随机二次元图片API文档",
			external: true,
		},
		{
			name: "imgdiet",
			url: "https://www.imgdiet.com/zh-CN",
			image: "https://www.imgdiet.com/favicon-32x32.ico",
			description: "在线图片处理工具",
			external: true,
		},
		{
			name: "辰安图床",
			url: "https://img.paiii.cn/",
			image: "https://img.paiii.cn/assets/favicon.ico",
			description: "永久免费在线图床",
			external: true,
		},
		{
			name: "GNAME",
			url: "https://gname.vip/",
			image: "https://file-sg.gname.net/f/favicon.ico",
			description: "免费二级域名",
			external: true,
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.Friends,
		LinkPreset.Apps,
		LinkPreset.Donate,
		LinkPreset.Stats,
		// LinkPreset.Status,
		// LinkPreset.Monitor,
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/images/blog/avatar.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "萌傀儡(AmongRuins)",
	bio: ["趁现在，享受短暂的人生吧！"],
	links: [
		{
			name: "Bilibli",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/41476922",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/AmongRuins",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

//图片回退
export const imageFallbackConfig: ImageFallbackConfig = {
	enable: true,
	originalDomain: "img.micostar.cc", // 主力图床 (新项目)
	fallbackDomain: "image.cloudrunmax.top", // R2 备用图床 (旧项目)
};

export const umamiConfig: UmamiConfig = {
	enable: true,
	baseUrl: "https://umami.micostar.cc",
	shareId: "X9ZZZ5l2xErS44Rc",
	timezone: "Asia/Shanghai",
};

// 防盗链/域名保护配置
export const antiLeechConfig: AntiLeechConfig = {
	enable: true,
	officialSites: [{ url: "https://amongruins.eu.cc", name: "主站" }],
	debug: false,
	warningTitle: "⚠️ 域名安全警告",
	warningMessage:
		"您可能正在访问非官方网站，存在安全风险！建议跳转到官方网站。",
};

export const googleAnalyticsConfig = {
	enable: true,
	measurementId: "G-68S9RLWRP0",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
