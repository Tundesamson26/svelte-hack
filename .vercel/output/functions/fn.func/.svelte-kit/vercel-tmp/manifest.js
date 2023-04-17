export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","Spinner-2.gif","toggle.png"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ea4d335c.js","imports":["_app/immutable/entry/start.ea4d335c.js","_app/immutable/chunks/index.d3a233b3.js","_app/immutable/chunks/singletons.8dbb6484.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.0880203d.js","imports":["_app/immutable/entry/app.0880203d.js","_app/immutable/chunks/index.d3a233b3.js"],"stylesheets":[],"fonts":[]}},
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
