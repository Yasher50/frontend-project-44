### Hexlet tests and linter status:
[![Actions Status](https://github.com/Yasher50/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Yasher50/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/456c9b047828da7cd3b9/maintainability)](https://codeclimate.com/github/Yasher50/frontend-project-44/maintainability)

### Подготовка:

- Проверьте что у вас есть утилита ***make***. Для проверки пропишите в терминале ```make -v```, если ее нет, установите.
    - **Linux**. Для установки пропишите в терминале ```sudo apt-get install make```
    - **MacOS**. Установка будет производиться через ***homebrew***, если у вас его нет, для установки пропишите в
      терминале\
      ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```\
      Теперь пропишите ```brew install make```
    - **Windows**. Предлагаю воспользоваться менеджером пакетов ***Chocolatey***, для его установки запустите терминал
      от имени администратора и пропишите следующую команду:\
      ```Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-ObjectSystem.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))```\
      Закройте и откройте терминал. Затем пропишите: ```choco install make```


- Проверьте что ваша версия ***nodejs*** не ниже **20.5.1**. Для проверки своей версии пропишите в терминале
  ```node -v```, если она не соответствует требованию, обновите.
    - Для обновления ***nodejs*** пропишите в терминале:\
      ```sudo apt update```\
      ```sudo apt upgrade```\
      ```sudo apt install -y curl```\
      Это обновит вашу систему и установит ***curl***. Далее пропишите
      ```curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -```\
      И наконец пропишите ```sudo apt install -y nodejs```, теперь можно прописать ```node -v```, что бы убедиться что
      версия ***nodejs*** обновилась.

- Подключите зависимости с помощью команды ```make install```
- Выдайте всем файлам в директории ***bin*** права на запуск. Для этого, в корне проекта, для каждой игры, пропишите
  ```chmod +x bin/brain-(game name).js```

### Запуск:

Если все шаги по подготовке выполнены, достаточно будет написать в терминале ```brain-(game name)```

***


<h2>Описание проекта:</h2>
<p>В данном проекте было реализовано 5 логических мини-игр, написанных на языке JavaScript.</p>

<h3>Описание игр:</h3>

<p>1. <b>brain-even</b> - игра включает в себя проверку числе на четность, игроку выводится случайное число ,и,ему надо определить является ли оно четным,или нет.</p>
<p>2. <b>brain-calc</b> - игра-калькулятор выводит случайный математическое выражение, после чего игрок должен дать ответ на данное пример.</p>
<p>3. <b>brain-gcd</b> - игра выводит два случайных числа и предлагает игроку найти их <ins>наибольший общий делитель (НОД)</ins>.</p>
<p>4. <b>brain-progression</b> - игра включается в себя арифмитическую прогрессию чисел с одним пропущенным элементом, предлагая пользователю определить значение данного элемента.</p>
<p>5. <b>brain-prime</b> - игра выводит случайное число и предлагает игроку определить, является ли оно простым.</p>

### Аскинемы с демонстрацией работы каждой игры:

#### 1. [Brain-even asciinema](https://asciinema.org/a/Tnhmg7b9dobktNS5VKrF1qpmx)

#### 2. [Brain-calc asciinema](https://asciinema.org/a/8lR87zyMfew0Qu8jhci4Mrz33)

#### 3. [Brain-gcd asciinema](https://asciinema.org/a/o0JqptTjeCjbrhz9wfXbSUeGl)

#### 4. [Brain-progression asciinema](https://asciinema.org/a/82tD9Jlion0ZhTKdYKnZhoBVZ)

#### 5. [Brain-prime asciinema](https://asciinema.org/a/GhYRpr1RstA7xbE10rT8HIx8s)