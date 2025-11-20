import { useState } from 'react';

const Index = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6 shadow-lg border-b-4 border-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center tracking-wide">龙门客栈</h1>
          <p className="text-center text-lg mt-2 opacity-90">Гостиница «Врата Дракона»</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <article className="mb-16 bg-card rounded-lg shadow-xl overflow-hidden border-2 border-secondary">
          <header className="bg-primary text-primary-foreground p-8">
            <h2 className="text-3xl font-bold mb-2">История легендарной гостиницы</h2>
            <p className="text-sm opacity-90">Опубликовано: 15 октября 1368 года династии Мин</p>
          </header>

          <div className="p-8">
            <section className="mb-8">
              <img 
                src="https://cdn.poehali.dev/projects/b8f93084-25db-474a-92cc-299af9542b37/files/1321d2bc-a730-481f-8494-f54f9687e555.jpg" 
                alt="Гостиница Врата Дракона" 
                className="w-full h-96 object-cover rounded-lg shadow-md mb-6"
              />
              
              <h3 className="text-2xl font-semibold mb-4 text-primary">Основание и расцвет</h3>
              <p className="mb-4 leading-relaxed text-foreground">
                В далёком 756 году, во времена расцвета династии Тан, на Великом Шёлковом пути появилась 
                гостиница «Врата Дракона». Её основатель, мастер Ли Вэньхуа, был известным торговцем чаем, 
                который решил создать место, где путники могли бы найти убежище от суровых дорог.
              </p>
              <p className="mb-4 leading-relaxed text-foreground">
                Гостиница расположилась у подножия гор Цинлин, в стратегически важном месте. Здесь 
                останавливались купцы, путешественники, поэты и даже императорские чиновники.
              </p>

              <blockquote className="border-l-4 border-secondary bg-accent p-6 my-6 rounded-r-lg italic">
                <p className="text-lg text-accent-foreground">
                  «В этих стенах каждый камень хранит историю тысячи путешествий, 
                  каждая балка помнит смех и слёзы странников со всех концов Поднебесной.»
                </p>
                <footer className="text-right mt-4 text-sm font-semibold">
                  — Из записей поэта Ван Вэя, 762 год
                </footer>
              </blockquote>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Архитектурные особенности</h3>
              
              <img 
                src="https://cdn.poehali.dev/projects/b8f93084-25db-474a-92cc-299af9542b37/files/962f1e84-5fc0-43aa-ac94-bf2c85d2f65b.jpg" 
                alt="Внутренний двор гостиницы" 
                className="w-full h-80 object-cover rounded-lg shadow-md mb-6 float-right ml-6 max-w-md"
              />
              
              <p className="mb-4 leading-relaxed text-foreground">
                Гостиница построена в традиционном стиле с соблюдением принципов фэншуй. 
                Главные особенности архитектуры:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Изогнутые крыши с керамической черепицей для защиты от злых духов</li>
                <li>Центральный двор с садом камней и прудом с карпами кои</li>
                <li>Красные деревянные колонны из ценного сандала</li>
                <li>Бумажные фонари ручной работы вдоль всех галерей</li>
                <li>Резные драконы на балках для привлечения удачи</li>
              </ul>

              <p className="mb-4 leading-relaxed text-foreground clear-both">
                Особое внимание уделялось комфорту гостей. В каждом номере были установлены отопительные 
                системы «кан» — тёплые лежанки из кирпича, а также чайные столики из бамбука.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Знаменитые гости</h3>
              
              <p className="mb-4 leading-relaxed text-foreground">
                За столетия через гостиницу прошли тысячи выдающихся личностей:
              </p>

              <ol className="list-decimal list-inside space-y-3 mb-6 ml-4 text-foreground">
                <li><strong>Сюань-цзан (845 г.)</strong> — буддийский монах, вернувшийся из Индии с священными текстами</li>
                <li><strong>Марко Поло (1275 г.)</strong> — венецианский путешественник, описавший гостиницу в своих записках</li>
                <li><strong>Чжэн Хэ (1421 г.)</strong> — великий мореплаватель династии Мин</li>
                <li><strong>Маттео Риччи (1601 г.)</strong> — итальянский миссионер и картограф</li>
              </ol>

              <blockquote className="border-l-4 border-secondary bg-accent p-6 my-6 rounded-r-lg italic">
                <p className="text-lg text-accent-foreground">
                  «Нигде в Китае я не встречал такого гостеприимства. Хозяин знал секрет 
                  настоящего чая, а его жена готовила лучшие баоцзы в провинции.»
                </p>
                <footer className="text-right mt-4 text-sm font-semibold">
                  — Из дневника Марко Поло
                </footer>
              </blockquote>
            </section>

            <aside className="bg-muted p-6 rounded-lg my-8 border-l-4 border-primary">
              <h4 className="text-xl font-semibold mb-3 text-primary">Интересный факт</h4>
              <p className="text-muted-foreground leading-relaxed">
                В 1127 году, во время нашествия чжурчжэней, гостиница укрыла более 200 беженцев 
                в своих подвалах. За этот подвиг император династии Сун лично наградил владельца 
                шёлковым свитком с каллиграфией «Добродетель превыше богатства».
              </p>
            </aside>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Наследие</h3>
              <p className="mb-4 leading-relaxed text-foreground">
                Сегодня «Врата Дракона» остаётся символом традиционного китайского гостеприимства. 
                Гостиница была полностью отреставрирована в 2005 году с сохранением всех исторических 
                элементов. Она внесена в список национального наследия Китая и продолжает принимать 
                гостей со всего мира.
              </p>
              <p className="leading-relaxed text-foreground">
                Легенды гласят, что в полнолуние можно услышать эхо древних разговоров в коридорах, 
                а в саду иногда появляется призрачная фигура основателя, наблюдающего за своим детищем.
              </p>
            </section>
          </div>

          <footer className="bg-muted p-6 border-t-2 border-border">
            <p className="text-sm text-muted-foreground">
              Автор: Чэнь Мэйлин, историк династий Тан и Сун<br />
              Источники: Императорские архивы, записи путешественников, археологические данные
            </p>
          </footer>
        </article>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <section className="bg-card rounded-lg shadow-xl p-8 border-2 border-secondary">
            <header className="mb-6">
              <h2 className="text-2xl font-bold text-primary mb-2">Вход в личный кабинет</h2>
              <p className="text-sm text-muted-foreground">Добро пожаловать в систему управления гостиницей</p>
            </header>

            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                  Электронная почта
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200 invalid:border-destructive valid:border-primary"
                  placeholder="example@longmen.cn"
                />
                <p className="text-xs text-muted-foreground mt-1">Введите действующий адрес электронной почты</p>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold mb-2 text-foreground">
                  Пароль
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  minLength={8}
                  className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200 invalid:border-destructive valid:border-primary"
                  placeholder="Минимум 8 символов"
                />
                <p className="text-xs text-muted-foreground mt-1">Пароль должен содержать не менее 8 символов</p>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-primary border-2 border-input rounded focus:ring-2 focus:ring-ring cursor-pointer"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-foreground cursor-pointer">
                  Запомнить меня
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-ring transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                Войти
              </button>

              <div className="text-center">
                <a href="#" className="text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring rounded px-2 py-1">
                  Забыли пароль?
                </a>
              </div>
            </form>
          </section>

          <section className="bg-card rounded-lg shadow-xl p-8 border-2 border-secondary">
            <header className="mb-6">
              <h2 className="text-2xl font-bold text-primary mb-2">Управляющий гостиницей</h2>
              <p className="text-sm text-muted-foreground">Информация о текущем дежурном администраторе</p>
            </header>

            <div className="flex items-start gap-6 p-6 bg-accent rounded-lg border-2 border-secondary hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
              <div className="relative flex-shrink-0">
                <img
                  src="https://cdn.poehali.dev/projects/b8f93084-25db-474a-92cc-299af9542b37/files/981858a9-711e-4712-81e3-d7b0fcb74866.jpg"
                  alt="Ли Мэй - управляющий гостиницей"
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary shadow-md group-hover:border-secondary transition-all duration-300"
                />
                <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full shadow-md"></span>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    Ли Мэй (李梅)
                  </h3>
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    В сети
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Должность:</strong> Старший администратор
                </p>

                <p className="text-sm text-foreground leading-relaxed mb-3">
                  Потомственный управляющий в 8-м поколении семьи Ли. Знаток традиций династии Тан, 
                  специалист по чайным церемониям и фэншуй.
                </p>

                <div className="flex gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-1 bg-secondary/20 rounded">Опыт: 15 лет</span>
                  <span className="px-2 py-1 bg-secondary/20 rounded">Языки: 中文, English, Русский</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-semibold text-sm text-foreground mb-2">График работы:</h4>
              <p className="text-sm text-muted-foreground">
                Понедельник - Пятница: 08:00 - 20:00<br />
                Суббота - Воскресенье: 10:00 - 18:00
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground py-8 border-t-4 border-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            © 756-2024 Гостиница «Врата Дракона» • Провинция Шэньси, Китай
          </p>
          <p className="text-xs mt-2 opacity-75">
            Объект культурного наследия под защитой ЮНЕСКО
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
