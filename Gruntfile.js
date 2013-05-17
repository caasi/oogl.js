module.exports = function (grunt) {
	var files = [
		'<banner>',
		'src/OOGL.js',
		'src/Timing.js',
		'src/Ajax.js',
		'src/Loader.js',
		'src/Vector2.js',
		'src/Vector3.js',
		'src/Vector4.js',
		'src/Matrix2.js',
		'src/Matrix3.js',
		'src/Matrix4.js',
		'src/ContextBegin.js',
		'src/Buffers.js',
		'src/Arrays.js',
		'src/Textures.js',
		'src/Shaders.js',
		'src/Programs.js',
		'src/Framebuffer.js',
		'src/Renderbuffer.js',
		'src/ContextEnd.js',
		'src/RenderLoop.js',
		];
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.initConfig({
		meta: {
			version: '1.0.1',
			banner: '/*! Object-Oriented Graphics Library - v<%= meta.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'* Released under the MIT License\n' +
				'* http://oogljs.com/\n' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> Alberto La Rocca */'
		},
		concat: {
			dist: {
				src: files,
				dest: 'oogl-<%= meta.version %>.js'
			}
		},
		jshint: {
			options: {
				camelcase: true,
				curly: true,
				immed: true,
				indent: 4,
				latedef: true,
				newcap: true,
				noarg: true,
				quotmark: 'single',
				undef: true,
				unused: true,
				strict: false,
				trailing: true,
				boss: true,
				debug: true,
				expr: true,
				loopfunc: true,
				multistr: true,
				smarttabs: true,
				supernew: true,
				browser: true,
			  globals: {
				  ActiveXObject: false
			  }
			},
      beforeconcat: files,
			afterconcat: ['oogl-<%= meta.version %>.js']
		},
		uglify: {
			dist: {
        files: [
          {
            src: ['oogl-<%= meta.version %>.js'],
            dest: 'oogl-<%= meta.version %>.min.js'
          }
        ]
			}
		}
	});
	grunt.registerTask('default', ['concat', 'uglify']);
	grunt.registerTask('debug', ['jshint']);
};
