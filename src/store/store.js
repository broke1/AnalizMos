import { createStore } from "vuex" 

const store = createStore({
  state: {
    menu: [
      {
        name: "Услуги",
        url: "uslugi"
      },
      {
        name: "Почему мы?",
        url: "whyus"
      },
      {
        name: "Информация",
        url: "about_expertise"
      },
      {
        name: "Контакты",
        url: "contacts"
      },
    ],
    title: "Независимая </br> судебная экспертиза",
    uslugi: {
      title: "Наши услуги",
      sub_title: "Наша компания проводит следующие виды судебной экспертизы:",
      items: [
        {
          title: "Подчерковедческая",
          subtitle: "Точная идентификация человека по его подчерку"
        },
        {
          title: "Автотехническая",
          subtitle: "Выявление дефектов и ущерба авто после дтп"
        },
        {
          title: "Экспертиза документов",
          subtitle: "Экспертиза подлинности документов и их ценности"
        },
        {
          title: "Фоноскопическая",
          subtitle: "Определение принадлежности голоса человеку"
        },
        {
          title: "Строительная",
          subtitle: "Оценка стоимости ремонта, после залива и пожара"
        },
        {
          title: "Лингвистическая",
          subtitle: "Выявление принадлежности словесных конструкций"
        }
      ]
    },
    whyus: {
      title: "ПОЧЕМУ ВЫБИРАЮТ НАС?",
      sub_title: "Мы максимально ответственно подходим к выполнению своих обязанностей и за всё время своей деятельности не имеем ни одного недовольного клиента.",
      list: [
        "14 лет работы в экспертизе и оценке",
        "Самая большая сеть филиалов",
        "Полный спектр оценочных услуг",
        "Отстаивание обоснованности оценки в суде",
        "Большая судебная практика",
        "Юридическое сопровождение",
        "Действительно независимая экспертиза"
      ]
    },
    aboutExpertise: {
      title: "О СУДЕБНОЙ ЭКСПЕРТИЗЕ",
      textarr: [
        `Судебная экспертиза появилась очень давно. Впервые она встречалась в законодательстве у древних греков, 
        при императоре Юстинеане, в шестом веке. В то время греки исследовали почерк в судебных целях. 
        Пик популярности подчерковедческих судебных экспертиз пришелся на 70-80 года прошлого столетия. Тогда были успехи в определении  пола, возраста и даже роста писавшего.`,
        `В России впервые стали применять судебную экспертизу при императоре Петре I. Своим указом он обязывал привлекать лекарей для проведения обследования пострадавшего. 
        В 1864 году царь Александр II провел судебную реформу. В ней четко прописывался порядок проведения экспертизы.`,
        `В современном мире в судебной экспертизе проведено много изменений по ее улучшению и она вышла на принципиально новый уровень.`,
      ],
    },
    contacts: {
      title: "НАШИ КОНТАКТЫ",
      list: [
        {
          img: require('../assets/location.png'),
          text: "г. Москва, Хлебозаводский пр-д, 7с9"
        },
        {
          img: require('../assets/phone.png'),
          text: "+7 (495)133-72-71"
        },
        {
          img: require('../assets/email.png'),
          text: "info.analiz.rf@gmail.com"
        },
        {
          img: require('../assets/clock.png'),
          text: "Пн.-Пт.: 10:00 — 18:00"
        },
        {
          img: '',
          text: "Сб.: 10:00 — 17:00"
        },
        {
          img: '',
          text: "Вс.: выходной"
        }
      ],
      underText: 'АНО "Анализ" все права защищены'
    },
    footer: {
      company: "Эталон 2023",
      author: "made by @fred_apriori"
    },
    form: {
      show: false
    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {
      
  }
})

export default store
