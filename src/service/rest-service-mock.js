export default class RestServiceMock {

    _riskGroup = [
        {
            id: 1,
            name: "Николай Иванов",
            profession: "БУХГАЛТЕР"
        },
        {
            id: 2,
            name: "Василий Иванов",
            profession: "СМЕТЧИК"
        },
        {
            id: 3,
            name: "Иннокентий Петров",
            profession: "СТАТИСТИК"
        },
        {
            id: 4,
            name: "Елена Груцкая",
            profession: "КОПИРАЙТЕР"
        },
        {
            id: 5,
            name: "Игорек Бардовский",
            profession: "КОРРЕКТОР"
        },
        {
            id: 6,
            name: "Вячеслв Чернышов",
            profession: "ЮРИСКОНСУЛЬТ"
        },
        {
            id: 7,
            name: "Виктория Корнеева",
            profession: "ЛЕКТОР"
        },
        {
            id: 8,
            name: "Лиза Петрова",
            profession: "ТУРАГЕНТ"
        },
        {
            id: 9,
            name: "Роман Немчинов",
            profession: "ИСПЫТАТЕЛЬ"
        },
        {
            id: 10,
            name: "Ника Голубева",
            profession: "НОТАРИУС"
        },
        {
            id: 11,
            name: "Александр Гладков",
            profession: "ЭКСКУРСОВОД"
        },
        {
            id: 12,
            name: "Алексей Корниленко",
            profession: "АНАЛИТИК"
        },
        {
            id: 13,
            name: "Григорий Кислин",
            profession: "ЖУРНАЛИСТ"
        },
        {
            id: 14,
            name: "Петр Сидоров",
            profession: "ПЕРЕВОДЧИК"
        },
        {
            id: 15,
            name: "Заур Зауров",
            profession: "ПРОВИЗОР"
        },
        {
            id: 16,
            name: "Сергей Перминов",
            profession: "ШТУРМАН"
        },
        {
            id: 17,
            name: "Эдуард Бинеев",
            profession: "ДИАГНОСТ"
        }
    ];

    _courses = [
        {
            name: "Object Oriented Java",
            url: "https://www.coursera.org/learn/object-oriented-java"
        },
        {
            name: "Java Programming",
            url: "https://www.coursera.org/specializations/java-programming"
        },
        {
            name: "Kotlin For Java Developers",
            url: "https://www.coursera.org/learn/kotlin-for-java-developers"
        },
        {
            name: "Cloud Services Java Spring Framework",
            url: "https://www.coursera.org/learn/cloud-services-java-spring-framework"
        },
        {
            name: "Java Programming",
            url: "https://www.coursera.org/learn/java-programming"
        },
        {
            name: "Java Object Oriented",
            url: "https://www.coursera.org/specializations/java-object-oriented"
        },
        {
            name: "Google Cloud Java Spring",
            url: "https://www.coursera.org/learn/google-cloud-java-spring"
        }
    ];

    _vacancies = [
        {
            id: 1,
            name: "JAVA DEVELOPER",
            percentage: 67,
            keyWord: "java"
        },
        {
            id: 1,
            name: "PHP DEVELOPER",
            percentage: 53,
            keyWord: "php"
        },
        {
            id: 1,
            name: "FRONTEND DEVELOPER",
            percentage: 45,
            keyWord: "frontend"
        },
        {
            id: 1,
            name: "QA-ИНЖЕНЕР",
            percentage: 38,
            keyWord: "qa"
        },
        {
            id: 1,
            name: "IT-ИНЖЕНЕР",
            percentage: 21,
            keyWord: "it"
        },
    ];

    getRiskGroup = async () => {
        console.log(this._riskGroup);
        return this._riskGroup;
    };

    getCourses = async (query) => {
        return this._courses;
    };

    getVacancies = async (id) => {
        return this._vacancies;
    };

    propose = (request) => {
    };
}
