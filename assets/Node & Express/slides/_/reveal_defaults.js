Reveal.initialize({
  controls: false,
  progress: false,
  history: true,
  center: true,
  rollingLinks: false,
  slideNumber: true,
  fragments: true,
  theme: Reveal.getQueryHash().theme,
  transition: Reveal.getQueryHash().transition || 'fade',
  transitionSpeed: 'slow',
  dependencies: [
    { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { 
      hljs.tabReplace = '<span class="tabindent">\t</span>';// replace tabs with spaces
      hljs.initHighlightingOnLoad(); 
    } }
  ]
});
