const Experiencia = { template: `
  <section class="home layout--section" key="1" >
    <div class="img-perfil">
      <img
        src="https://ca.slack-edge.com/TBSD0716V-U022N2C67JS-d5e2b97140e1-512"
      />
    </div>
    <div class="home__title-container">
      <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_1cazwtnc.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
    </div>
   <div class="home__profile-description">
    <h2>I am Front End Developer</h2>
    <p>Sou desenvolvedor Front End com 4 anos de experiência. Focado em Reactjs/Javascript e seu ecossistema: Next Js, Redux, Hooks, Redux-Thunk, Redux Saga, Formik, React-router, Styled Componente, css modules,  HTML5, CSS3|Sass| Bem css. </p>
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
        <a class="codesandbox-list__link" target="_blank">
          <h3 class="codesandbox-list__title">
          Todo app - React
          </h3>
        </a>
          <div class="icon-box">
            <span class="material-icons tech-list__icon">add</span>
            <p>Gerenciador de estado do próprio React</div>
          </div>
          <div class="icon-box">
          <span class="material-icons tech-list__icon">add</span>
          <p>Gerenciador de estado do próprio React</div>
        </div>
      </li>
      <li class="codesandbox-list__item">
        <a class="codesandbox-list__link" target="_blank">
          <h3 class="codesandbox-list__title">
          Todo app - React
          </h3>
        </a>
          <div class="icon-box">
            <span class="material-icons tech-list__icon">add</span>
            <p>Gerenciador de estado do próprio React</div>
          </div>
      </li>
    </ul>
  </section>
`}

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
                Cargo: Front End Developer
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
              Cargo: Front End Developer
              Período: nov/2020 -  até o momento
              Desenvolvedor Front End, atuando com React js/Next js e todo o seu ecossistema.
              Definir libs amplamente utilizadas na aplicação.
              Desenvolvi features com foco em componentização.
              Foco na utilização de recursos novos e performáticos do React. 
              Integração de Apis/microsserviços
              Participei de uma equipe de metodologia ágil(Scrum)
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
            Cargo: Front End Developer
            Período: 06/2018 - 12/09/2019
            Atuei como desenvolvedor Reactjs. 
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
            Cargo: Estagiário Front End Developer
            Período: 06/2018 - 09/2019
            Atuar junto com o design para a construção de um design system.
            Criar interfaces com Reactjs.
            </div>
        </li>
    </ul>
  </div>
</section>
`  };


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
  template: 
  `<div class="underConstruction">
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

routes = [
  { path: "*", component: UnderConstruction },
]

const router = new VueRouter({
  routes,
});

window.addEventListener('load', function () {
  const app = new Vue({
    router
  }).$mount("#app");
})