module.exports =
  build:
    options:
      module: 'hospDataVis'
      usemin: 'scripts/app.js'
    src: ['<%=files.public.js.templates%>']
    cwd: '<%=files.public.dir%>'
    dest: '<%=files.build.dir%>/templates/template.js'