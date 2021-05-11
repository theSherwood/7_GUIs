let { html, svg } = window.sinuous;

let sections = [
  {
    principal: {
      name: "Svelte 3",
      site: "https://svelte.dev/",
      source: "https://github.com/sveltejs/svelte",
    },
    completed: 7,
    demo: "./svelte/public/index.html",
    source: "https://github.com/theSherwood/7_GUIs/tree/master/svelte",
    codesandbox:
      "https://codesandbox.io/s/github/theSherwood/7_GUIs/tree/master/svelte",
  },
  {
    principal: {
      name: "ClojureScript",
      site: "https://clojurescript.org/",
      source: "https://github.com/clojure/clojurescript/",
    },
    secondary: {
      name: "Reagent",
      site: "https://reagent-project.github.io/",
      source: "https://github.com/reagent-project/reagent",
    },
    completed: 7,
    demo: "./clojurescript-reagent/resources/public/index.html",
    source:
      "https://github.com/theSherwood/7_GUIs/tree/master/clojurescript-reagent",
  },
  {
    principal: {
      name: "Sinuous",
      site: "https://sinuous.netlify.com/",
      source: "https://github.com/luwes/sinuous",
    },
    completed: 7,
    demo: "./sinuous/dist/index.html",
    source: "https://github.com/theSherwood/7_GUIs/tree/master/sinuous",
    codesandbox:
      "https://codesandbox.io/s/github/theSherwood/7_GUIs/tree/master/sinuous",
  },
  {
    principal: {
      name: "Sinuous",
      site: "https://sinuous.netlify.com/",
      source: "https://github.com/luwes/sinuous",
    },
    secondary: {
      name: "Webscript",
      site: "https://mudgen.github.io/webscript/docs/",
      source: "https://github.com/mudgen/webscript",
    },
    completed: 7,
    demo: "./sinuous-webscript/dist/index.html",
    source:
      "https://github.com/theSherwood/7_GUIs/tree/master/sinuous-webscript",
    codesandbox:
      "https://codesandbox.io/s/github/theSherwood/7_GUIs/tree/master/sinuous-webscript",
  },
  {
    principal: {
      name: "Sinuous",
      site: "https://sinuous.netlify.com/",
      source: "https://github.com/luwes/sinuous",
    },
    secondary: {
      name: "Sinuous-Style",
      site: "https://github.com/theSherwood/sinuous-style",
      source: "https://github.com/theSherwood/sinuous-style",
    },
    completed: 7,
    demo: "./sinuous-with-sinuous-style/dist/index.html",
    source:
      "https://github.com/theSherwood/7_GUIs/tree/master/sinuous-with-sinuous-style",
    codesandbox:
      "https://codesandbox.io/s/github/theSherwood/7_GUIs/tree/master/sinuous-with-sinuous-style",
  },
  {
    principal: {
      name: "Solid",
      site: "https://github.com/ryansolid/solid",
      source: "https://github.com/ryansolid/solid",
    },
    completed: 7,
    demo: "./solid/build/index.html",
    source: "https://github.com/theSherwood/7_GUIs/tree/master/solid",
  },
  {
    principal: {
      name: "React",
      site: "https://reactjs.org/",
      source: "https://github.com/facebook/react/",
    },
    completed: 2,
    demo: "./react-vanilla/dist/index.html",
    source: "https://github.com/theSherwood/7_GUIs/tree/master/react-vanilla",
    codesandbox:
      "https://codesandbox.io/s/github/theSherwood/7_GUIs/tree/master/react-vanilla",
  },
];

let githubIcon = () => html`
  <img class="github-icon" src="./GitHub-Mark-32px.png" />
`;

let sectionView = ({
  completed,
  demo,
  source,
  codesandbox,
  principal,
  secondary,
}) => {
  return html`<section>
    <div class="flex-box">
      <h3>
        <span class="nowrap">
          <a href=${principal.site}>${principal.name}</a>
          <a href=${principal.source}>${" "}<${githubIcon} /></a>
        </span>
        ${() =>
          secondary
            ? html`${" "}with${" "}
                <span class="nowrap">
                  <a href=${secondary.site}> ${secondary.name}</a>
                  <a href=${secondary.source}>${" "}<${githubIcon} /></a>
                </span>`
            : null}
      </h3>
      <span class="muted block flex-0 bottom--2px"
        >completed - ${completed}/7</span
      >
    </div>
    <ul>
      ${() =>
        demo
          ? html` <li>
              <a href=${demo}>Demo</a>
            </li>`
          : null}
      ${() =>
        source
          ? html` <li>
              <a href=${source}>Source</a>
            </li>`
          : null}
      ${() =>
        codesandbox
          ? html` <li>
              <a href=${codesandbox}>CodeSandbox</a>
            </li>`
          : null}
    </ul>
  </section>`;
};

let mainView = () => html`${() => sections.map(sectionView)}`;

document.querySelector("#root").append(mainView());
