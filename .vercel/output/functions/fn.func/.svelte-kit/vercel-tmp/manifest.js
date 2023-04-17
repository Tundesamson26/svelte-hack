export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","Spinner-2.gif","toggle.png"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.bbe2d026.js","imports":["_app/immutable/entry/start.bbe2d026.js","_app/immutable/chunks/index.d3a233b3.js","_app/immutable/chunks/singletons.6c3e0792.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.74e19a7a.js","imports":["_app/immutable/entry/app.74e19a7a.js","_app/immutable/chunks/index.d3a233b3.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
