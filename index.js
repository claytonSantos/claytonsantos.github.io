const Experiencia = { template: `
  <section class="home layout--section" key="1" >
    <div class="img-perfil home-img__perfil">
      <img
        src="https://ca.slack-edge.com/TBSD0716V-U022N2C67JS-d5e2b97140e1-512"
      />
    </div>
    <div class="home__title-container">
      <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_1cazwtnc.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
    </div>
   <div class="home__profile-description">
    <h2>Eu sou um Front End Developer</h2>
    <p>Sou desenvolvedor Front End com 5+ anos de experiência. Focado em Reactjs/Javascript e seu ecossistema: Next Js, Redux, Hooks, Redux-Thunk, Redux Saga, Formik, React-router, Styled Componente, css modules,  HTML5, CSS3|Sass| Bem css. </p>
   </div>
  </section>
` };

const Projects = { template: `
  <section class="timeline layout--section" key="2">
    <div class="timeline__main-img">
    <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_kh0i5hia.json"  background="transparent"  speed="1" loop  autoplay></lottie-player>
    </div>
    <h2>Projects</h2>
    <p>Demos de Apps simples, feito de maneiras ou com bibliotecas diferentes.</p>
    <ul id="codesandbox-list" class="codesandbox-list">
      <li class="codesandbox-list__item">
        <a class="codesandbox-list__link" target="_blank" href="https://codesandbox.io/s/todo-app-pure-react-state-management-bm7uk">
          <h3 class="codesandbox-list__title">
          Todo app - React
          </h3>
        </a>
          <div class="icon-box">
            <span class="material-icons tech-list__icon">verified</span>
            <p>Gerenciador de estado do próprio React</div>
          </div>
          <div class="icon-box">
            <span class="material-icons tech-list__icon">verified</span>
            <p>Gerenciador de estado do próprio React</div>
        </div>
      </li>
      <li class="codesandbox-list__item">
        <a class="codesandbox-list__link" target="_blank" href="https://codesandbox.io/s/todo-with-pure-redux-12keo">
          <h3 class="codesandbox-list__title">
          Todo app - React
          </h3>
        </a>
          <div class="icon-box">
            <span class="material-icons tech-list__icon">verified</span>
            <p>Gerenciador de estado: redux</div>
          </div>
          <div class="icon-box">
            <span class="material-icons tech-list__icon">verified</span>
            <p>Redux Thunk</div>
          </div>
      </li>

      <li class="codesandbox-list__item">
        <a class="codesandbox-list__link" target="_blank" href="https://codesandbox.io/s/todo-app-with-redux-toolkit-create-reducer-state-management-1dl4f">
          <h3 class="codesandbox-list__title">
          Todo app - React
          </h3>
        </a>
          <div class="icon-box">
            <span class="material-icons tech-list__icon">verified</span>
            <p>Gerenciador de estado: Redux Tookit</div>
          </div>
          <div class="icon-box">
            <span class="material-icons tech-list__icon">verified</span>
            <p>Usando <strong>createReducer</strong> do redux toolkit</div>
          </div>
      </li>

      <li class="codesandbox-list__item">
      <a class="codesandbox-list__link" target="_blank" href="https://codesandbox.io/s/todo-app-with-redux-toolkit-slice-state-management-tgdzk?file=/src/App.js">
        <h3 class="codesandbox-list__title">
        Todo app - React
        </h3>
      </a>
        <div class="icon-box">
          <span class="material-icons tech-list__icon">verified</span>
          <p>Gerenciador de estado: Redux Tookit</div>
        </div>
        <div class="icon-box">
          <span class="material-icons tech-list__icon">verified</span>
          <p>Usando <strong>createSlice</strong> do redux toolkit</div>
      </div>
    </li>
    </ul>
  </section>
` }

const Timeline = { template: `
<section class="timeline layout--section" key="3">
    <div class="timeline__main-img">
      <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_ttz7k6cj.json" 
        background="transparent"
        speed="1"
        loop autoplay>
      </lottie-player>
    </div>
  <h2>Timeline Projects</h2>
  <div class="container-timeline">
  <div class="container__line"></div>
    <ul class="container__items">
        <li class="container__item">
            <div class="container__top">
                <div class="container__circle"></div>
                <h3 class="container__title">Cwi</h3>
            </div>
            <div class="container__desc">
                <p>Cargo: Front End Developer</p>
                <p>Período: maio/2021 - até o momento</p>
                <p>Reactjs, React Native e seus ecossistemas.</p>
            </div>
        </li>

        <li class="container__item">
            <div class="container__top">
                <div class="container__circle"></div>
                <h3 class="container__title">
                  Meta
                </h3>
            </div>
            <div class="container__desc">
            <div>
              <p>Cargo: Front End Developer</p>
              <p>Período: nov/2020 - maio-2021</p>
              <p>Reactjs/NextJs e seus ecossistemas.</p>
            </div>
            </div>
        </li>
        <li class="container__item">
            <div class="container__top">
                <div class="container__circle"></div>
                <h3 class="container__title">
                  Samaia It
                </h3>
            </div>
            <div class="container__desc">
              <p>Cargo: Front End Developer</p>
              <p>Período: set/2019 - out/2020</p>
              <p>Reactjs seus ecossistemas.</p>
            </div>
        </li>
        <li class="container__item">
            <div class="container__top">
                <div class="container__circle"></div>
                <div class="container__title">
                  Softplan
                </div>
            </div>
            <div class="container__desc">
            <p>Cargo: Estagiário Front End Developer</p>
            <p>Período: jun/2018 - set/2019</p>
            <p>Atuar junto com o design para a construção de um design system.
            Criar componentes com Reactjs.</p>
            </div>
        </li>
    </ul>
  </div>
</section>
` };


const PageNotFound = {
    template: `<div class="page-not-found">
    <div>
      <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_GIyuXJ.json"  
        background="transparent"  speed="1"
        loop  
        autoplay>
      </lottie-player>
    </div>
    <p class="page-not-found__description">
      Página não encontrada.
    </p>
  </div>`
}

const UnderConstruction = {
    template: `<div class="underConstruction">
    <div class="underConstruction__img-container">
      <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_AQcLsD.json"
        background="transparent" 
        speed="1" 
        loop
        autoplay>
      </lottie-player>
    </div>
    <p class="page-not-found__description">
      Página em construção
    </p>
  </div>`
}

let routes = [
    { path: "/", component: Experiencia },
    { path: "/experiencia", component: Experiencia },
    { path: "/timeline", component: Timeline },
    { path: "/projects", component: Projects },
    { path: "/construcao", component: UnderConstruction },
    { path: "*", component: PageNotFound },
];

// routes = [
//   { path: "*", component: UnderConstruction },
// ]

const router = new VueRouter({
    routes,
});

window.addEventListener('load', function() {
    const app = new Vue({
        router,
        data: {
            themeIsDark: true,
        },
        methods: {
            toggleTheme() {
                this.themeIsDark = !this.themeIsDark
            }
        }
    }).$mount("#app");
})