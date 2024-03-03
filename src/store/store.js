import { createStore } from "vuex" 

const store = createStore({
  state: {
    menu: [
      {
        name: "Услуги",
        url: "uslugi"
      },
      {
        name: "О компании",
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
    title: "Судебная экспертиза",
    uslugi: {
      title: "Наши услуги",
      sub_title: `Круг профессиональной компетенции наших экспертов охватывает
      любые виды материальных и нематериальных активов. Вы можете заказать у
      нас независимую экспертизу следующих видов:`,
      items: [
        {
          title: " Строительная - техническая",
          subtitle: `Исследование
          сооружений и конструкций. Оценка стоимости объектов
          недвижимости. Оценка ущерба.`
        },
        {
          title: "Оценочная",
          subtitle: `Оценка рыночной стоимости объектов оценки, с
          целью подготовки отчета об оценки.`
        },
        {
          title: "Землеустроительная",
          subtitle: `Исследование земельных участков, зон с особыми
          условиями использования территорий, в том числе с
          определением их границ на местности.`
        },
        {
          title: "Автотехническая",
          subtitle: `Установление обстоятельств
          ДТП. Оценка рыночной и
          восстановительной стоимости ТС. Определение величины
          утраты товарной стоимости.`
        },
        {
          title: "Товароведческая",
          subtitle: `Исследование бытовой
          техники, мебели, одежды, обуви и др.`
        },
        {
          title: "Экономическая экспертиза",
          subtitle: `Финансово-экономическая
          экспертиза. Финансово-кредитная экспертиза. Бухгалтерская
          экспертиза.`
        },
        {
          title: "Почерковедческая",
          subtitle: `Установление лица –
          исполнителя рукописного текста или подписи, условий и
          обстоятельств, при которых выполнены различного рода
          рукописные документы.`
        },
        {
          title: "Пожарная экспертиза",
          subtitle: `Определения причин
          произошедшего пожара, выявлении обстоятельств
          всех этапов горения.`
        },
        {
          title: "Компьютерно-техническая экспертиза",
          subtitle: `Исследование
          программно-технических средств и программных продуктов.`
        }
      ]
    },
    whyus: {
      title: "О КОМПАНИИ",
      title_sub_list: [
        `Общество с ограниченной ответственностью "Центр
        независимой оценки и права "Эталон" предлагает Вашему вниманию услуги
        по проведению судебных экспертиз и исследований.`,
        `- Мы несём полную ответственность за независимость, достоверность и
        корректность оценки, всегда идём навстречу при возникновении спорных
        ситуаций, готовы защищать свою позицию в государственных и
        коммерческих учреждениях любой подведомственности.`,
        `- Высокий профессионализм команды Общество с ограниченной
        ответственностью "Центр независимой оценки и права "Эталон" — это не
        только уверенность в результатах работы, но и возможность выполнять ее в
        максимально сжатые сроки.`,
        `- Ценовая политика - одно из наиболее важных направлений
        деятельности Компании, свидетельствующих о ее эффективности. Мы
        предлагаем качественные, оптимальные по срокам и доступные по ценам
        услуги.`,
        `- Круг профессиональной компетенции наших экспертов охватывает
        любые виды материальных и нематериальных активов.`
      ],
      list: [
        "Обширный опыт работы в области экспертизы и оценки",
        "Полный спектр экспертных и оценочных услуг",
        "Отстаивание обоснованности экспертных заключений в суде",
        "Большая судебная практика",
        "Юридическое сопровождение",
        "Действительно независимая экспертиза"
      ],
      footer_list: [
        `- Главным принципом работы Компании является - принцип уважения.
        Компания ценит и уважает своих сотрудников, клиентов и партнеров.
        Стратегия Компании носит осмысленный характер заключается в
        стремлении добиться лидерства в области предлагаемых услуг, а также на
        построение длительного взаимовыгодного сотрудничества.`,
        `С уважением, Общество сограниченной ответственностью "Центр
        независимой оценки и права "Эталон"`,
      ],
    },
    aboutExpertise: {
      title: "О СУДЕБНОЙ ЭКСПЕРТИЗЕ",
      textarr: [
        `Судебная экспертиза – это процессуальное действие, состоящее из
        проведения исследований и дачи заключения экспертом по вопросам,
        разрешение которых требует специальных знаний в области науки, техники,
        искусства или ремесла и которые поставлены перед экспертом органом или
        лицом, имеющим право назначать судебную экспертизу, в целях установления
        обстоятельств, подлежащих доказыванию по конкретному делу, а также при
        проверке сообщения о преступлении.`,
        `Деятельность Компании основывается на принципах законности,
        соблюдения прав и свобод человека и гражданина, прав юридического лица, а
        также независимости эксперта, объективности, всесторонности и полноты
        исследований, проводимых с использованием современных достижений науки
        и техники.`
      ],
    },
    contacts: {
      title: "НАШИ КОНТАКТЫ",
      list: [
        {
          img: require('../assets/location.png'),
          text: "107031, г. Москва, ул Рождественка, д. 5/7 стр. 2, этаж/помещ. 3/V ком./оф. 4/320"
        },
        {
          img: require('../assets/phone.png'),
          text: "+7 (499) 397-70-71 \n\r+7 (995) 898-85-26"
        },
        {
          img: require('../assets/email.png'),
          text: "info@etalon-ocenka.ru"
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
        },
        {
          img: require('../assets/requisites.png'),
          text: "Реквизиты:"
        },
        {
          img: '',
          text: "ОГРН: 1217700423258"
        },
        {
          img: '',
          text: "Дата присвоения ОГРН: 09.09.2021"
        },
        {
          img: '',
          text: "ИНН: 9702036163"
        },
        {
          img: '',
          text: "КПП: 770201001"
        },
      ],
      underText: 'ООО "ЦНОИП Эталон" все права защищены'
    },
    footer: {
      company: `ООО "ЦНОИП Эталон" все права защищены 2023`,
      author: "made by @fred_apriori"
    },
    form: {
      show: false,
      name: '',
      phone: '',
      text: '',
      msgError: false,
      preloader: false
    }
  },
  mutations: {
    sendForm (state) {

      const data = {
        name: state.form.name,
        phone: state.form.phone,
        text: state.form.text,
      }

      state.form.preloader = true

      fetch(`${window.location.protocol}//${window.location.hostname}:5000/sendForm`, { 
      // fetch(`/sendForm`, { 
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json" 
        }
        // mode: 'no-cors'  
      }).then( res => {
        if (![200,204].includes(res.status)) {
          state.form.msgError = true  
        } else {
          state.form = {
            show: false,
            name: '',
            phone: '',
            text: '',
            msgError: false
          }
        }
      })
        .catch (() => {
          console.log('error')
        }) 
        .finally (() => {
          state.form.preloader = false
        })
    }
  },
  actions: {
  },
  getters: {
      
  }
})

export default store
