const Index = () => {
  return (
    <div className="min-h-screen bg-background">

      <header className="bg-primary text-primary-foreground py-4 sm:py-6 shadow-lg border-b-4 border-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center tracking-wide">Schloss Rabenstein</h1>
          <p className="text-center text-sm sm:text-base md:text-lg mt-2 opacity-90">Замок Рабенштайн — Легендарная готическая гостиница</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8 md:py-12 max-w-6xl">
        <article className="mb-8 sm:mb-12 md:mb-16 bg-card rounded-lg shadow-xl overflow-hidden border-2 border-secondary">
          <header className="bg-primary text-primary-foreground p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">История легендарного замка</h2>
            <p className="text-xs sm:text-sm opacity-90">Опубликовано: 12 ноября 1142 года, эпоха Средневековья</p>
          </header>

          <div className="p-4 sm:p-6 md:p-8">
            <section className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1546422904-90eab23c3d7e?w=1200&q=80" 
                alt="Мистический готический замок Рабенштайн" 
                className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md mb-4 sm:mb-6"
              />
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-primary">Основание и расцвет</h3>
              <p className="mb-4 leading-relaxed text-foreground">
                В далёком 1142 году, во времена Священной Римской империи, на скалистом утёсе в Баварии 
                был возведён замок Рабенштайн. Его основатель, рыцарь Конрад фон Штайнберг, построил эту 
                крепость как стратегический пункт на торговом пути, соединяющем север и юг империи.
              </p>
              <p className="mb-4 leading-relaxed text-foreground">
                Замок расположился на высоте 850 метров над уровнем моря, среди дремучих лесов Шварцвальда. 
                Здесь останавливались купцы, рыцари, монахи и даже императорские послы, ищущие приют в 
                суровых горах.
              </p>

              <blockquote className="border-l-4 border-secondary bg-accent p-6 my-6 rounded-r-lg italic">
                <p className="text-lg text-accent-foreground">
                  «Эти готические стены хранят тайны столетий, а каждая башня помнит клятвы рыцарей 
                  и шёпот монахов, искавших здесь убежище от бурь времени.»
                </p>
                <footer className="text-right mt-4 text-sm font-semibold">
                  — Из хроник монаха Бернарда Клервоского, 1153 год
                </footer>
              </blockquote>
            </section>

            <section className="mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-primary">Архитектурные особенности</h3>
              
              <img 
                src="https://cdn.poehali.dev/projects/b8f93084-25db-474a-92cc-299af9542b37/files/242423b1-8947-4090-bb0d-5e4f86efca67.jpg" 
                alt="Парадный зал замка" 
                className="w-full sm:float-right sm:ml-6 sm:max-w-xs md:max-w-sm h-auto max-h-80 object-contain rounded-lg shadow-md mb-4 sm:mb-6"
              />
              
              <p className="mb-4 leading-relaxed text-foreground">
                Замок построен в готическом стиле с элементами романской архитектуры. 
                Главные особенности строения:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Остроконечные готические арки с каменной резьбой</li>
                <li>Центральный двор с колодцем глубиной 60 метров</li>
                <li>Массивные дубовые балки из 600-летних деревьев</li>
                <li>Кованые железные факелы вдоль каменных коридоров</li>
                <li>Витражные окна с гербами знатных семей</li>
              </ul>

              <p className="mb-4 leading-relaxed text-foreground clear-both">
                Особое внимание уделялось защите и комфорту. В каждом зале были установлены 
                массивные камины из чёрного гранита, а стены покрыты гобеленами ручной работы, 
                защищающими от холода.
              </p>

              <img 
                src="https://cdn.poehali.dev/projects/b8f93084-25db-474a-92cc-299af9542b37/files/d928b5e5-78d5-465c-94ab-22dd7afe6740.jpg" 
                alt="Роскошный номер в замке" 
                className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md mb-4 sm:mb-6"
              />

              <p className="mb-4 leading-relaxed text-foreground">
                Каждый из 24 номеров замка сочетает средневековую атмосферу с современным комфортом. 
                Кровати с балдахинами, антикварная мебель и панорамные готические окна создают 
                неповторимое ощущение путешествия во времени.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-primary">Знаменитые гости</h3>
              
              <p className="mb-4 leading-relaxed text-foreground">
                За столетия в замке останавливались выдающиеся исторические личности:
              </p>

              <ol className="list-decimal list-inside space-y-3 mb-6 ml-4 text-foreground">
                <li><strong>Фридрих Барбаросса (1167 г.)</strong> — император Священной Римской империи, ночевал здесь во время похода</li>
                <li><strong>Вольфрам фон Эшенбах (1205 г.)</strong> — легендарный миннезингер, написавший здесь часть «Парцифаля»</li>
                <li><strong>Мартин Лютер (1521 г.)</strong> — реформатор, укрывался в замке после Вормского рейхстага</li>
                <li><strong>Иоганн Вольфганг фон Гёте (1786 г.)</strong> — поэт и мыслитель, черпавший вдохновение в готической атмосфере</li>
              </ol>

              <blockquote className="border-l-4 border-secondary bg-accent p-6 my-6 rounded-r-lg italic">
                <p className="text-lg text-accent-foreground">
                  «Нигде в Германии я не встречал такой мистической атмосферы. Хозяин замка 
                  знал секреты средневековых легенд, а его супруга варила лучший глинтвейн в Баварии.»
                </p>
                <footer className="text-right mt-4 text-sm font-semibold">
                  — Из путевых заметок Гёте
                </footer>
              </blockquote>
            </section>

            <aside className="bg-muted p-4 sm:p-6 rounded-lg my-6 sm:my-8 border-l-4 border-primary">
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary">Интересный факт</h4>
              <p className="text-muted-foreground leading-relaxed">
                В 1348 году, во время эпидемии чумы, замок стал убежищем для более 150 жителей 
                окрестных деревень. Благодаря изолированному расположению и чистой родниковой воде 
                никто из укрывшихся не заболел. За это владелец замка получил от императора Карла IV 
                грамоту с надписью «Милосердие превыше золота».
              </p>
            </aside>

            <section>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-primary">Наследие</h3>
              <p className="mb-4 leading-relaxed text-foreground">
                Сегодня замок Рабенштайн остаётся жемчужиной готической архитектуры Германии. 
                Полная реставрация была завершена в 2010 году с сохранением всех исторических 
                элементов и средневекового духа. Замок внесён в список объектов всемирного наследия 
                ЮНЕСКО и продолжает принимать гостей со всего мира.
              </p>
              <p className="leading-relaxed text-foreground">
                Легенды гласят, что в полнолуние можно услышать звон мечей в оружейной, 
                а в библиотеке иногда появляется призрак средневекового монаха, читающего 
                древние манускрипты при свечах.
              </p>
            </section>
          </div>

          <footer className="bg-muted p-4 sm:p-6 border-t-2 border-border">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Автор: Доктор Ганс Мюллер, историк средневековой Германии<br />
              Источники: Архивы Священной Римской империи, хроники монастырей, археологические исследования
            </p>
          </footer>
        </article>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
          <section className="bg-card rounded-lg shadow-xl p-4 sm:p-6 md:p-8 border-2 border-secondary">
            <header className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2">Регистрация в системе</h2>
              <p className="text-xs sm:text-sm text-muted-foreground">Создайте аккаунт для управления бронированием</p>
            </header>

            <form className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="fullname" className="block text-sm font-semibold mb-2 text-foreground">
                  ФИО
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  required
                  minLength={3}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200 invalid:border-destructive valid:border-primary text-sm sm:text-base bg-background"
                  placeholder="Иванов Иван Иванович"
                />
                <p className="text-xs text-muted-foreground mt-1">Введите полное имя</p>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                  Электронная почта
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200 invalid:border-destructive valid:border-primary text-sm sm:text-base bg-background"
                  placeholder="example@rabenstein.de"
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
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200 invalid:border-destructive valid:border-primary text-sm sm:text-base bg-background"
                  placeholder="Минимум 8 символов"
                />
                <p className="text-xs text-muted-foreground mt-1">Пароль должен содержать не менее 8 символов</p>
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-semibold mb-2 text-foreground">
                  Подтверждение пароля
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  required
                  minLength={8}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all duration-200 invalid:border-destructive valid:border-primary text-sm sm:text-base bg-background"
                  placeholder="Повторите пароль"
                />
                <p className="text-xs text-muted-foreground mt-1">Пароли должны совпадать</p>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  className="w-4 h-4 mt-1 accent-primary cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm text-foreground leading-relaxed cursor-pointer">
                  Я согласен с{' '}
                  <a href="#terms" className="text-primary font-semibold hover:underline">
                    условиями пользовательского соглашения
                  </a>{' '}
                  и{' '}
                  <a href="#privacy" className="text-primary font-semibold hover:underline">
                    политикой конфиденциальности
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
              >
                Зарегистрироваться
              </button>
            </form>
          </section>

          <section className="bg-card rounded-lg shadow-xl p-4 sm:p-6 md:p-8 border-2 border-secondary">
            <header className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2">Управляющая замком</h2>
              <p className="text-xs sm:text-sm text-muted-foreground">Информация о текущем администраторе</p>
            </header>

            <div className="bg-muted rounded-lg p-4 sm:p-6 border-2 border-secondary hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.01]">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                <div className="relative flex-shrink-0">
                  <img
                    src="https://cdn.poehali.dev/projects/b8f93084-25db-474a-92cc-299af9542b37/files/3513e9d2-0a61-4471-9869-62c38c1fdfbd.jpg"
                    alt="Фрау Элизабет Шмидт - управляющая замком"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-primary shadow-lg transition-all duration-300 group-hover:border-secondary"
                  />
                  <span className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-card rounded-full shadow-md"></span>
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-primary transition-colors duration-300 hover:text-secondary">
                      Элизабет Шмидт
                    </h3>
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      В сети
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground mb-3">
                    <strong>Должность:</strong> Старший администратор
                  </p>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
                    Потомственная хранительница замка в 5-м поколении семьи Шмидт. Знаток средневековой 
                    истории, эксперт по готической архитектуре и традициям рыцарских орденов.
                  </p>

                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 text-xs text-muted-foreground">
                    <span className="px-2 py-1 bg-accent rounded">Опыт: 18 лет</span>
                    <span className="px-2 py-1 bg-accent rounded">Языки: DE, EN, FR, RU</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <h4 className="text-sm font-semibold text-foreground mb-2">График работы:</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Понедельник - Пятница: 08:00 - 20:00<br />
                  Суббота - Воскресенье: 10:00 - 18:00
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground py-6 sm:py-8 text-center border-t-4 border-secondary">
        <div className="container mx-auto px-4">
          <p className="text-xs sm:text-sm opacity-90">
            © 1142-2024 Замок Рабенштайн • Бавария, Германия
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